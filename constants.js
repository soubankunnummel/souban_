export const METADATA = {
  author: "Muhammed Souban",
  title: "Portfolio | Muhammed Souban",
  description:
    "Muhammed Souban is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://souban-eight.vercel.app/",
  twitterHandle: "@Souban_",
  keywords: [
    "Muhammed Souban",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dimvacpif/image/upload/t_updated-portfolio-thumbail/food-delivery/foods/z7vjzicjjdjuvhfwhjl9",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Full Stack Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: souban.san@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/muhammedsouban/",
  },
  {
    name: "github",
    url: "https://github.com/soubankunnummel",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/souban_kunnummel/",
  },
  {
    name: "twitter",
    url: "https://x.com/Souban_",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    // "sass",
    "nodejs",
    "Express",
    // "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack-query",
    
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "zustand",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    // "antdesign",
    "chakra-ui",
    "daisyui",
    "shadcn-ui"
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "storyblok"],
};

export const PROJECTS = [
  {
    name: "Threads",
    image: "/projects/threads.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Threads UI clone using NextJS + Tailwind CSS 🛏️",
    gradient: ["#6A11CB", "#2575FC"],
    url: "https://talkflow.vercel.app/",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "Searchive",
    image: "/projects/searchive.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Jobportel web app using NextJS + Tailwind CSS 🛏️",
    gradient: ["#202c1d", "#65e429"]
,
    url: "https://web-searchive.yestack.in/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "storyblok"],
  },
  { 
    name: "Teledesk",
    image: "/projects/teledesk.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "A Task management app built with React, Shadcn UI, Express, MongoDB 📒",
    gradient: ["#2c365a", "#8504fb"],
    url: "https://app.teledesk.io/",
    tech: ["react", "chakra-ui", "telegram","tailwindcss"
    ],
  },
  {
    name: "YESTACK",
    image: "/projects/yestack-.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Company Website 🏎️",
    gradient: ["#191b1f", "#1b9395"],
    url: "https://www.yestack.io/",
    tech: ["react","nextjs", "tailwindcss",],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  SEARCHIVE: [
    {
      title: "Searchive",
      description:
        "Searchive is a next-generation job portal connecting top talent with leading companies effortlessly.",
     
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Redefining hiring, one match at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Since 2023, the job search process has been cluttered with outdated methods, slow hiring cycles, and mismatched roles. Leading a team of recruiters and developers, we built Searchive—an AI-powered platform that connects job seekers with relevant opportunities instantly. Our system eliminates inefficiencies and helps businesses find the right talent, faster.",
      
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Smarter hiring, seamless experience
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Understanding the need for a smarter recruitment approach, we engineered a data-driven matching system that streamlines job discovery for candidates and employers alike. This innovation has resulted in X% faster placements and Y% higher candidate satisfaction, marking a new era in job hiring.",
      
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          AI-driven, human-led recruitment
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "By leveraging real-time insights and automation, we refined the hiring process to ensure that job seekers receive only relevant opportunities while companies connect with pre-vetted, high-intent candidates. This approach has reduced hiring time by X% and improved role retention significantly.",
      
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Faster hiring, better talent, no bias
        </div>
      ),
    },
  ],
  
  TELEDESK: [
    {
      title: "Teledesk",
      description:
        "Teledesk is a task management and collaboration suite built for small businesses and startups that rely on Telegram as their primary communication platform.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Task management, simplified—right inside Telegram
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "I led the development of Teledesk's core task management system, streamlining team workflows and improving collaboration within Telegram. Additionally, I optimized real-time notifications, automated task tracking, and enhanced user experience—resulting in increased productivity and reduced miscommunication.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Building efficiency, one task at a time
        </div>
      ),
    },
  ],
  
  SPACENOS: [
    {
      title: "Spacenos",
      description:
        "A dynamic startup dedicated to creating innovative products that make the world a better place.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          We build apps that solve problems for the next billion people
        </div>
      ),
    },
    {
      title: "Trailblazing",
      description:
        "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
