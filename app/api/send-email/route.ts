import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { applyCors, corsMiddleware } from "@/lib/cors";

async function handler(req: NextRequest) {
  try {
    const {
      content,
      message,
      prompt,
      senderName,
      senderEmail,
      name,
      email,
      subject,
    } = await req.json();

    const emailContent =
      typeof content === "string" && content.trim()
        ? content
        : typeof message === "string"
          ? message
          : "";
    const resolvedSenderName = senderName ?? name;
    const resolvedSenderEmail = senderEmail ?? email;

    if (!emailContent.trim()) {
      return NextResponse.json(
        { error: "Email content is required" },
        { status: 400 }
      );
    }

    if (resolvedSenderEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(resolvedSenderEmail)) {
        return NextResponse.json(
          { error: "Invalid email address" },
          { status: 400 }
        );
      }
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const emailSubject =
      subject || (prompt ? `AI Generated Email: ${prompt.substring(0, 50)}...` : "Manual Email");

    const fromAddress = `"Gaurav Portfolio" <${process.env.EMAIL_USER}>`;

    const mailOptions = {
      from: fromAddress,
      to: process.env.EMAIL_USER,
      subject: emailSubject,
      text: content,
      replyTo: resolvedSenderEmail
        ? resolvedSenderName
          ? `"${resolvedSenderName}" <${resolvedSenderEmail}>`
          : resolvedSenderEmail
        : undefined,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">Email Received</h2>
          ${resolvedSenderName ? `<p><strong>From:</strong> ${resolvedSenderName}</p>` : ""}
          ${resolvedSenderEmail ? `<p><strong>Email:</strong> ${resolvedSenderEmail}</p>` : ""}
          <p><strong>Subject:</strong> ${emailSubject}</p>
          ${prompt ? `<p><strong>Prompt:</strong> ${prompt}</p>` : ""}
          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
            ${emailContent.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    // Return more detailed information about the sent email
    return NextResponse.json(
      {
        message: "Email sent successfully",
        id: info.messageId,
        details: {
          from: fromAddress,
          subject: emailSubject,
            content: emailContent,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to send email", details: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to send email", details: "Unknown error" },
      { status: 500 }
    );
  }
}

export const POST = (req: NextRequest) => applyCors(req, handler);
export const OPTIONS = (req: NextRequest) =>
  corsMiddleware(req);
