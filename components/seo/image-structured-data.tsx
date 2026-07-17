export function ProfileImagesSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.thegaurav.dev",
          },
          about: {
            "@type": "Person",
            name: "Gaurav Patil",
            description:
              "Full Stack Developer specializing in Next.js, TypeScript, and Blockchain development.",
          },
          associatedMedia: [
            {
              "@type": "ImageObject",
              contentUrl: "https://www.thegaurav.dev/Gaurav_Patil.png",
              name: "Gaurav Patil - Full Stack Developer Primary Profile",
              description:
                "Primary profile photo of Gaurav Patil, Full Stack Developer",
              encodingFormat: "image/jpeg",
              width: "800",
              height: "800",
            },
            {
              "@type": "ImageObject",
              contentUrl: "https://www.thegaurav.dev/profile.jpg",
              name: "Gaurav Patil - Full Stack Developer Alternate Profile",
              description:
                "Secondary profile photo of Gaurav Patil, showcasing professional appearance",
              encodingFormat: "image/jpeg",
              width: "800",
              height: "800",
            },
          ],
        }),
      }}
    />
  );
}
