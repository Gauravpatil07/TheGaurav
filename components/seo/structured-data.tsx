export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gaurav Patil",
          url: "https://www.thegaurav.dev",
          sameAs: [
            "https://github.com/Gauravpatil07",
            "https://www.linkedin.com/in/gauravpatil07/",
            "https://x.com/gauravpatilop"
          ],
          jobTitle: "Full Stack Developer",
          knowsAbout: ["Web Development", "Blockchain", "TypeScript", "React", "Next.js"],
          image: "/profile.jpg",
          description: "Full Stack Developer specializing in Next.js, TypeScript, and Blockchain development."
        })
      }}
    />
  );
} 