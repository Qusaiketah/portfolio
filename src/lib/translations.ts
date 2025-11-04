export const translations = {
  en: {
    name: "Qosai Ketah",
    role: "Junior Software Engineer",
    tagline: "From idea to clean, usable software.",
    bio: "Junior software developer with experience in web and app development, integration, testing, and maintenance. Broad technical understanding, strong analytical skills, and an eye for structure and user experience. Comfortable leading myself in solo work and collaborating in productive teams. I communicate clearly and deliver solutions that create value and quality.",
    skills: {
      "Languages": ["C++", "JavaScript", "TypeScript", "Python"],
      "Frameworks & Libraries": ["React", "Node.js"],
      "Mobile": ["Kotlin (Android)", "iOS/Swift"],
      "Cloud & DevOps": ["AWS (S3, IAM)", "Git/GitHub", "CI/CD (basic)"],
      "Other": ["Backend", "Frontend"]
    },
    projects: [
      {
        title: "Football App",
        summary: "Swift app with league tables, goal stats, live updates, and an integrated betting feature. REST API integration, CoreData for efficient storage, modern UI/UX.",
        tech: ["Swift", "REST API", "CoreData", "UI/UX"],
        links: { github: "", demo: "" }
      },
      
      {
        title: "Multiplayer (Connect Four)",
        summary: "Online multiplayer using Firebase Realtime Database for live game state sync. Implemented game mechanics, networking, and responsive UI.",
        tech: ["Kotlin", "Firebase Realtime Database"],
        links: { github: "", demo: "" }
      },
      {
        title: "Full-stack Media Uploader",
        summary: "Upload images/videos to AWS S3 via a Node.js REST API with a React + TypeScript front end. Includes authentication and a modern, responsive UI.",
        tech: ["React", "TypeScript", "Node.js", "REST API", "AWS S3"],
        links: { github: "", demo: "" }
      },
      {
        title: "Interactive Portfolio Website",
        summary: "A responsive personal portfolio built with React, TypeScript, and TailwindCSS. It features dark mode, multi-language support, and smooth UI animations powered by Vite.",
        tech: ["React", "TypeScript", "Vite", "TailwindCSS"],
        links: {
          links: { github: "", demo: "" }
        }
      }      
    ],
    experience: [
      {
        role: "Full-stack Developer (Startup)",
        company: "NFK / Woltuse",
        period: "Mar 2024 – Jun 2024",
        location: "Jönköping",
        bullets: [
          "Worked in a small Scrum team to build a React-based website for Woltuse.",
          "Focused on React, environment configuration, and API integrations for smooth UX."
        ]
      },
      {
        role: "Warehouse Associate",
        company: "H&M",
        period: "Apr 2022 – Sep 2022",
        location: "",
        bullets: [
          "Training in returns handling, split-point work, picking and packing."
        ]
      },
      {
        role: "Pallet Repairer & Machine Operator",
        company: "Ardagh Group",
        period: "May 2021 – Sep 2021",
        location: "Limmared",
        bullets: [
          "Hands-on repair and machine operation; completed traverser training."
        ]
      }
    ],
    education: {
      degree: "Software Development & Mobile Platforms (B.Sc.)",
      school: "Jönköping University",
      period: "2022 – 2025",
      city: "Jönköping",
      notes: [
        "Topics: web development, mobile platforms, databases/SQL, data structures & algorithms, DevOps basics."
      ]
    },
    courses: [
      "AWS Cloud Practitioner (Udemy)",
      "Cybersecurity (Udemy)"
    ],
    contact: {
      email: "qketah@gmail.com",
      linkedin: "https://www.linkedin.com/in/qusai-ketah-40226b205",
      github: "https://github.com/"
    },
    ui: {
      nav: ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"],
      buttons: { contact: "Contact Me", projects: "View Projects", downloadCV: "Download CV" },
      ctaReady: "Ready to collaborate?",
      location: "Location",
      availability: "Availability",
      interests: "Interests",
      locationValue: "Jönköping, Sweden",
      availabilityValue: "Open to junior roles ",
      interestsValue: "Web, Mobile, Cloud , Cybersecurity",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send Message",
      formSuccess: "Message sent successfully!",
      backToTop: "Back to top",
      copyright: "© {year} Qosai Ketah. All rights reserved.",
      sectionBadges: {
        about: "01 About",
        skills: "02 Skills",
        projects: "03 Projects",
        experience: "04 Experience",
        education: "05 Education",
        contact: "06 Contact"
      }
    }
  },
  sv: {
    name: "Qosai Ketah",
    role: "Junior mjukvaruingenjör",
    tagline: "Från idé till ren, användbar programvara.",
    bio: "Junior mjukvaruutvecklare med erfarenhet inom webb- och applikationsutveckling, integration, testning och underhåll. Bred teknisk förståelse, stark analytisk förmåga och ett öga för struktur och användarupplevelse. Van att självleda i egna projekt och samarbeta i produktiva team. Kommunicerar tydligt och levererar lösningar som skapar nytta och kvalitet.",
    skills: {
      "Språk": ["C++", "JavaScript", "TypeScript", "Python"],
      "Ramverk & Bibliotek": ["React", "Node.js"],
      "Mobil": ["Kotlin (Android)", "iOS/Swift"],
      "Moln & DevOps": ["AWS (S3, IAM)", "Git/GitHub", "CI/CD (grundläggande)"],
      "Övrigt": ["Backend", "Frontend"]
    },
    projects: [
      {
        title: "iOS Fotbollsapp",
        summary: "Swift-app med ligatabeller, målstatistik, liveuppdateringar och integrerad vadslagningsfunktion. REST API-integration, CoreData för effektiv lagring, modern UI/UX.",
        tech: ["Swift", "REST API", "CoreData", "UI/UX"],
        links: { github: "", demo: "" }
      },
      {
        title: "Kotlin Multiplayer (Fyra i rad)",
        summary: "Multiplayer online med Firebase Realtime Database för synkronisering av spelstatus i realtid. Implementerade spelmekanik, nätverk och responsiv UI.",
        tech: ["Kotlin", "Firebase Realtime Database"],
        links: { github: "", demo: "" }
      },
      {
        title: "Fullstack Mediauppladdare",
        summary: "Ladda upp bilder/videos till AWS S3 via Node.js REST API med React + TypeScript frontend. Inkluderar autentisering och modern, responsiv UI.",
        tech: ["React", "TypeScript", "Node.js", "REST API", "AWS S3"],
        links: { github: "", demo: "" }
      },
      {
        title: "Interaktiv portföljsajt",
        summary:
          "En responsiv personlig portfölj byggd med React, TypeScript och TailwindCSS. Den har mörkt läge, flerspråkigt stöd och mjuka UI-animationer med Vite.",
        tech: ["React", "TypeScript", "Vite", "TailwindCSS"],
        links: { github: "", demo: "" }
      }
    ],
    experience: [
      {
        role: "Fullstack-utvecklare (Startup)",
        company: "NFK / Woltuse",
        period: "Mar 2024 – Jun 2024",
        location: "Jönköping",
        bullets: [
          "Arbetade i ett litet Scrum-team för att bygga en React-baserad webbplats för Woltuse.",
          "Fokus på React, miljökonfiguration och API-integrationer för smidig UX."
        ]
      },
      {
        role: "Lagermedarbetare",
        company: "H&M",
        period: "Apr 2022 – Sep 2022",
        location: "",
        bullets: [
          "Utbildning i returhantering, split-point-arbete, plockning och packning."
        ]
      },
      {
        role: "Pallreparatör & Maskinoperatör",
        company: "Ardagh Group",
        period: "Maj 2021 – Sep 2021",
        location: "Limmared",
        bullets: [
          "Praktiskt reparationsarbete och maskinoperatör; genomförde traversutbildning."
        ]
      }
    ],
    education: {
      degree: "Programvaruutveckling & Mobila plattformar (Kandidat)",
      school: "Jönköping University",
      period: "2022 – 2025",
      city: "Jönköping",
      notes: [
        "Ämnen: webbutveckling, mobila plattformar, databaser/SQL, datastrukturer & algoritmer, DevOps grundläggande."
      ]
    },
    courses: [
      "AWS Cloud Practitioner (Udemy)",
      "Cybersäkerhet (Udemy)"
    ],
    contact: {
      email: "qketah@gmail.com",
      linkedin: "https://www.linkedin.com/in/qusai-ketah-40226b205",
      github: "https://github.com/"
    },
    ui: {
      nav: ["Hem", "Om", "Kompetenser", "Projekt", "Erfarenhet", "Utbildning", "Kontakt"],
      buttons: { contact: "Kontakta mig", projects: "Se projekt", downloadCV: "Ladda ner CV" },
      ctaReady: "Redo att samarbeta?",
      location: "Plats",
      availability: "Tillgänglighet",
      interests: "Intressen",
      locationValue: "Jönköping, Sverige",
      availabilityValue: "Öppen för junior-roller",
      interestsValue: "Webb, Mobil, Moln, CyberSäkerhet",
      formName: "Namn",
      formEmail: "E-post",
      formMessage: "Meddelande",
      formSubmit: "Skicka meddelande",
      formSuccess: "Meddelande skickat!",
      backToTop: "Tillbaka till toppen",
      copyright: "© {year} Qosai Ketah. Alla rättigheter reserverade.",
      sectionBadges: {
        about: "01 Om",
        skills: "02 Kompetenser",
        projects: "03 Projekt",
        experience: "04 Erfarenhet",
        education: "05 Utbildning",
        contact: "06 Kontakt"
      }
    }
  }
};
