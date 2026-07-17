import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FiMapPin, FiAward, FiBriefcase, FiBook } from "react-icons/fi";

export default function ExperiencePage() {
  const data = [
    {
      title: "June 2026 - Present",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBriefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Software Developer Intern
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-neutral-400 text-xs sm:text-sm">
              <span className="font-medium">Mavenark Technologies Pvt Ltd</span>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Mumbai, IN</span>
              </div>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <p className="leading-relaxed">
                Building internal automation tools and SaaS solutions, optimizing algorithms for scalability and performance,
                ensuring data quality through testing and validation, researching emerging technologies, and contributing to software design,
                debugging, and continuous product enhancement in a fintech startup environment.

              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Dec 2025 - June 2026",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBook className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Java Full Stack Development
            </h3>
            <div className="flex items-center gap-2 text-neutral-400 text-xs sm:text-sm">
              <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">QSpiders, Pune, IN</span>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Successfully completed an intensive Java Full Stack Development
              program covering Core Java, Advanced Java, JDBC, Servlets, JSP,
              Hibernate, Spring, Spring Boot, SQL, HTML, CSS, JavaScript,
              React.js, REST APIs, Git, Maven, and software development
              best practices. Built multiple full-stack applications and
              strengthened problem-solving, object-oriented programming,
              and backend development skills.
            </p>
          </div>
        </div>
      ),
    },

    {
      title: "2022-2026",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBook className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Bachelor of Engineering
            </h3>
            <div className="flex items-center gap-2 text-neutral-400 text-xs sm:text-sm">
              <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Jalgaon, IN</span>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Graduated with BTech in Computer Engineering, focusing on software
              development and computer science fundamentals. Developed strong
              problem-solving skills and technical expertise through
              comprehensive coursework and practical projects.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Awards and Honors",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiAward className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-4 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Achievements 🔥
            </h3>
            {/* YUKTI Innovation Challenge */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400" />
                <a
                  href="YOUR_CERTIFICATE_LINK_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h4 className="text-white font-medium hover:text-blue-400 transition-colors duration-200 inline-flex items-center gap-1">
                    YUKTI Innovation Challenge 2025, Ministry of Education (Govt. of India), Mumbai
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </h4>
                </a>
              </div>

              <div className="pl-5">
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Nationally shortlisted for designing an{" "}
                  <span className="text-blue-400 font-medium">
                    AI-powered Women Safety Application
                  </span>{" "}
                  featuring real-time GPS tracking, emergency alerts, and 5+ core safety
                  features. Improved emergency response efficiency by 35% and was evaluated
                  among 1,000+ national submissions for innovation and problem-solving.
                </p>

                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    Ministry of Education
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    AICTE
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    Women Safety
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    Innovation
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    GPS Tracking
                  </span>
                </div>
              </div>
            </div>
            {/* Sui Overflow */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400" />
                <a
                  href="https://drive.google.com/file/d/1YS32js_ZvuK_x19ddGXs2mIhMaXTNri-/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h4 className="text-white font-medium hover:text-blue-400 transition-colors duration-200 inline-flex items-center gap-1">
                    Google Cloud - Gen AI Study Jam 2024
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </h4>
                </a>
              </div>
              <div className="pl-5">
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Awarded for{" "}
                  <span className="text-blue-400 font-medium">
                    Excellence in GenAI
                  </span>{" "}
                  innovation—Optimized Vertex AI prompts, built GenAI apps with Gemini & Streamlit,
                  ranked top 5% in an AI challenge, and completed a 30-day GenAI program.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    GDSC Sarala Birla University, Ranchi
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    GenAI
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    Vertex AI
                  </span>
                </div>
              </div>
            </div>
            {/* IIT Bombay - National Entrepreneurship Challenge 2023 Finalists */}
            <div className="space-y-2">
              <div className="flex items-start sm:items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2 sm:mt-0" />
                <a
                  href="https://arena.colosseum.org/projects/explore/netsepio?previous=L3Byb2plY3RzL2V4cGxvcmU_c2VlZD1iNGI0ZTYwYzViNGE0NzkwJnNlYXJjaD1uZXRzZXA&ref=blog.colosseum.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group min-w-0"
                >
                  <h4 className="text-white font-medium hover:text-blue-400 transition-colors duration-200 inline-flex items-start sm:items-center gap-1 text-sm sm:text-base leading-tight">
                    <span className="break-words">
                      IIT Bombay - National Entrepreneurship Challenge 2023 Finalists
                    </span>
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5 sm:mt-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </h4>
                </a>
              </div>
              <div className="pl-3 sm:pl-5">
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  Achieved{" "}
                  <span className="text-blue-400 font-medium">8th place</span>{" "}
                  out of 50+ National teams, We refined ideas, pitched to experts, and grew exponentially,
                  showcasing innovative problem-solving.
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full whitespace-nowrap">
                    National Competition
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full whitespace-nowrap">
                    50+ Teams
                  </span>
                </div>
              </div>
            </div>


          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Timeline data={data} />
    </div>
  );
}
