import { StructuredContent } from "./types";

// Update the generateStructuredResponse function to handle specific project types
export function generateStructuredResponse(queryType: string): StructuredContent | null {
    // Define individual project templates
    const projectTemplates: Record<string, unknown[]> = {
        codeflex_project: [
            {
                title: "Codeflex",
                description:
                    "A modern AI-powered fitness assistant built with Next.js, Tailwind CSS, Shadcn UI, and Vapi Voice AI, delivering personalized workout and nutrition plans using Gemini AI.",
                technologies: [
                    "Next.js",
                    "React.js",
                    "Tailwind CSS",
                    "Shadcn UI",
                    "Vapi Voice AI",
                    "Gemini AI",
                ],
                link: "https://github.com/Gauravpatil07/Codeflex-AI-Fitness-Assistant",
            },
        ],

        codesync_project: [
            {
                title: "CodeSync",
                description:
                    "A full-stack remote interview platform featuring real-time video calling, collaborative coding, secure authentication, and a responsive interface for technical interviews.",
                technologies: [
                    "Next.js",
                    "TypeScript",
                    "WebRTC",
                    "Stream",
                    "Convex",
                    "Clerk",
                ],
                link: "https://github.com/Gauravpatil07/Remote-Interview-Platform",
            },
        ],

        codecraft_project: [
            {
                title: "CodeCraft",
                description:
                    "A full-stack online code editor supporting multiple programming languages with real-time code sharing, execution history, authentication, and a modern IDE experience.",
                technologies: [
                    "Next.js 15",
                    "TypeScript",
                    "Convex",
                    "Clerk",
                ],
                link: "https://github.com/Gauravpatil07/CodeCraft-The-Code-Editor",
            },
        ],

        carnetzero_project: [
            {
                title: "CarnetZero",
                description:
                    "A carbon footprint management platform for Indian coal mines to measure emissions, simulate carbon neutrality pathways, and generate sustainability reports.",
                technologies: [
                    "React.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Framer Motion",
                    "Recharts",
                ],
                link: "https://github.com/Gauravpatil07/CarnetZero-carbon-footprint-calculator",
            },
        ],
    };

    // Define individual contact templates
    const contactTemplates: Record<string, { email?: string; phone?: string; location?: string; discord?: string; type: string }> = {
        email_contact: {
            email: "gauravpatil07.work@gmail.com",
            type: "Email",
        },
        phone_contact: {
            phone: "+918208412113",
            type: "Phone",
        },
        location_contact: {
            location: "Pune",
            type: "Location",
        },
        discord_contact: {
            discord: "https://discord.com/users/gauravcr7",
            type: "Discord",
        },
    };

    // Define individual link templates
    const linkTemplates: Record<string, { title: string; url: string; description: string }[]> = {
        resume_link: [
            {
                title: "Resume",
                url: "https://www.thegaurav.dev/resume",
                description:
                    "View my detailed resume with skills, experience, and education",
            },
        ],
        github_link: [
            {
                title: "GitHub Profile",
                url: "https://github.com/Gauravpatil07",
                description:
                    "Check out my code repositories and open-source contributions",
            },
        ],
        linkedin_link: [
            {
                title: "LinkedIn Profile",
                url: "https://www.linkedin.com/in/gauravpatil07/",
                description: "Connect with me professionally on LinkedIn",
            },
        ],
        discord_link: [
            {
                title: "Discord Server",
                url: "https://discord.com/users/gauravcr7",
                description: "Join my Discord community",
            },
        ],
        portfolio_link: [
            {
                title: "Portfolio Website",
                url: "https://www.thegaurav.dev",
                description: "My personal portfolio showcasing projects and skills",
            },
        ],
        project_links: [
            {
                title: "Codeflex-AI-Fitness-Assistant",
                url: "https://github.com/Gauravpatil07/Codeflex-AI-Fitness-Assistant",
                description: "Personalized AI-Powered Workout & Diet Companion",
            },
            {
                title: "CodeSync- Interview Platform",
                url: "https://github.com/Gauravpatil07/Remote-Interview-Platform",
                description: "A full-stack video interview platform Designed for seamless remote technical interviews.",
            },
            {
                title: "CodeCraft- The Code Editor",
                url: "https://github.com/Gauravpatil07/CodeCraft-The-Code-Editor",
                description: "SaaS Code Editor – Full Stack VSCode-like IDE",
            },
        ],
    };

    // Define the structured data templates for general categories
    const structuredDataTemplates: Record<string, unknown> = {
        skills: [
            { name: "JavaScript", category: "Programming Language" },
            { name: "Java", category: "Programming Language" },
            { name: "React.js", category: "Frontend Framework" },
            { name: "Next.js", category: "Frontend Framework" },
            { name: "TypeScript", category: "Programming Language" },
            { name: "Node.js", category: "Backend" },
            { name: "MySQL", category: "Database" },
            { name: "PostgreSQL", category: "Database" },
            { name: "Docker", category: "DevOps" },
            { name: "Git", category: "Version Control" },
            { name: "AWS EC2", category: "Cloud" },
            { name: "Google Cloud", category: "Cloud" },
        ],
        projects: [
            {
                title: "Codeflex - AI Fitness Assistant",
                description:
                    "Personalized AI-Powered Workout & Diet Companion",
                technologies: ["Next.js", ", Tailwind CSS", "Shadcn UI", " Vapi Voice AI", "Gemini AI"],
                link: "https://github.com/Gauravpatil07/Codeflex-AI-Fitness-Assistant",
            },
            {
                title: "CodeSync - Interview Platform",
                description:
                    "A full-stack video interview platform Designed for seamless remote technical interviews",
                technologies: ["Next.js", "React.js", "Node.js", "Socket.io", "WebRTC"],
                link: "https://github.com/Gauravpatil07/Remote-Interview-Platform",
            },
            {
                title: "CarnetZero - Carbon Footprint Calculator ",
                description:
                    "A web-based carbon footprint management platform designed to measure emissions, simulate carbon neutrality pathways, and generate sustainability reports for Indian coal mines.",
                technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                link: "https://github.com/Gauravpatil07/CarnetZero-carbon-footprint-calculator",
            },
        ],
        experience: [],
        education: [
            {
                title: "BTech Computer Science Engineering",
                institution: "GHR COE, Jalgaon",
                period: "2022 - 2026",
                description: "Bachelor's degree in Computer Science Engineering",
            },
            {
                title: "12th Grade",
                institution: "NESJ COLLEGE OF SCIENCE, Jamner",
                period: "2021 - 2022",
                description: "Higher secondary education",
            },
            {
                title: "10th Grade",
                institution: "SHINDE INTERNATIONAL SCHOOL, Pachora",
                period: "2019 - 2020",
                description: "Secondary education",
            },
        ],
        contact: {
            email: "gauravpatil07.work@gmail.com",
            phone: "+918208412113",
            location: "Pune",
            linkedin: "https://www.linkedin.com/in/gauravpatil07/",
            github: "https://github.com/Gauravpatil07",
            discord: "https://discord.com/users/gauravcr7",
            portfolio: "https://www.thegaurav.dev",
        },
        awards: [
            {
                title: "YUKTI Innovation Challenge 2025",
                description:
                    "Nationally shortlisted by the Ministry of Education (AICTE) for developing an AI-powered Women Safety Application featuring real-time GPS tracking, emergency alerts, and intelligent safety features.",
            },
            {
                title: "Google Cloud GenAI Study Jam 2024",
                description:
                    "Recognized for excellence in Generative AI after building AI applications with Gemini, Vertex AI, and Streamlit, ranking among the top participants in the national program.",
            },
            {
                title: "National Entrepreneurship Challenge 2023",
                description:
                    "Secured 8th place among 50+ national teams at IIT Bombay by pitching an innovative startup idea and demonstrating entrepreneurial and problem-solving skills.",
            },
        ],
        links: [
            {
                title: "Portfolio Website",
                url: "https://www.thegaurav.dev",
                description: "My personal portfolio showcasing projects and skills",
            },
            {
                title: "Resume",
                url: "https://www.thegaurav.dev/resume",
                description: "View my detailed resume",
            },
            {
                title: "GitHub Profile",
                url: "https://github.com/Gauravpatil07",
                description: "Check out my code repositories and contributions",
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/in/gauravpatil07/",
                description: "Connect with me professionally",
            },
            {
                title: "Codeflex",
                url: "https://github.com/Gauravpatil07/Codeflex-AI-Fitness-Assistant",
                description: "AI-powered fitness assistant with voice AI and personalized workout planning",
            },
            {
                title: "CodeSync",
                url: "https://github.com/Gauravpatil07/Remote-Interview-Platform",
                description: "Real-time remote interview platform with video calling and collaborative coding",
            },
            {
                title: "CarnetZero",
                url: "https://github.com/Gauravpatil07/CarnetZero-carbon-footprint-calculator",
                description: "Carbon footprint management platform for emissions tracking and sustainability planning",
            },
        ],
    };

    // Check if it's a specific project type
    if (queryType.includes("_project")) {
        return {
            type: queryType === "fleeman_project" ? "fleeman_project" : "projects",
            data: projectTemplates[queryType],
        };
    }

    // Check if it's a specific contact type
    if (queryType.includes("_contact")) {
        return {
            type: "contact",
            data: contactTemplates[queryType],
        };
    }

    // Check if it's a specific link type
    if (queryType.includes("_link")) {
        return {
            type: "links",
            data: linkTemplates[queryType],
        };
    }

    // Otherwise return the general category data
    if (structuredDataTemplates[queryType]) {
        return {
            type: queryType,
            data: structuredDataTemplates[queryType],
        };
    }

    return null;
}
