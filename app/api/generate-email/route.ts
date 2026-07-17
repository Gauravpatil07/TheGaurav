import { NextResponse, NextRequest } from "next/server";
import { applyCors, corsMiddleware } from "@/lib/cors";

// Set a longer timeout for the API route
export const config = {
  runtime: "edge",
  regions: ["iad1"],
};

async function handler(req: NextRequest) {
  try {
    const { prompt, context } = await req.json();

    if (typeof prompt !== "string" || !prompt.trim()) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "AI assistant is not configured" },
        { status: 500 }
      );
    }

    // System prompt for email generation
    const systemPrompt = `You are an AI assistant helping a visitor draft an email to Gaurav Patil. 
    The email should be written from the perspective of the visitor/user, addressed to Gaurav.
    Use the user's prompt to determine the intent (e.g., job offer, collaboration, question).
    
    Requirements:
    - Address the email to "Gaurav" or "Mr. Patil".
    - Maintain a professional and polite tone.
    - If the user provides their name/details in the prompt, include them. Otherwise, use placeholders like "[Your Name]".
    - Format properly with a clear subject line (if applicable) and body.
    - Do NOT include any explanations, just the email content.`;

    // Format messages for OpenRouter
    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },
      ...(typeof context === "string" && context.trim()
        ? [
            {
              role: "system",
              content: `Additional context from the user: ${context.trim()}`,
            },
          ]
        : []),
      {
        role: "user",
        content: prompt,
      },
    ];

    // Make direct API call to OpenRouter with a timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://www.thegaurav.dev",
          "X-Title": "Gaurav's Portfolio",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "nvidia/nemotron-3-super-120b-a12b:free",
          messages: messages,
          max_tokens: 1200,
          temperature: 0.2, // Add temperature for more consistent responses
        }),
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter API error:", response.status, errorText);
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    const generatedContent = data?.choices?.[0]?.message?.content;

    if (!generatedContent) {
      throw new Error("OpenRouter returned an empty response");
    }

    return NextResponse.json({ generatedContent });
  } catch (error: unknown) {
    console.error("Error generating email:", error);

    // Check if it's an abort error (timeout)
    if (error instanceof Error && error.name === "AbortError") {
      const fallbackDraft = `Subject: Re: your message\n\nHi Gaurav,\n\nI wanted to get in touch regarding my message.\n\nBest regards,\n[Your Name]`;

      return NextResponse.json({
        generatedContent: fallbackDraft,
        warning: "The AI provider timed out, so a draft template was returned instead.",
      });
    }

    if (error instanceof Error) {
      const fallbackDraft = `Subject: Re: ${error.message.includes("timeout") ? "your message" : "your inquiry"}\n\nHi Gaurav,\n\n${error.message.includes("OpenRouter") ? "I wanted to get in touch regarding the topic I described." : "I wanted to get in touch regarding my request."}\n\nBest regards,\n[Your Name]`;

      return NextResponse.json({ generatedContent: fallbackDraft });
    }

    return NextResponse.json(
      { error: "Failed to generate email" },
      { status: 500 }
    );
  }
}

export const POST = (req: NextRequest) => applyCors(req, handler);
export const OPTIONS = (req: NextRequest) => corsMiddleware(req);
