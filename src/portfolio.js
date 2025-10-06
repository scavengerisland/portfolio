/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ethan Hutchison | Senior Software Engineer & Product Developer",
  description:
    "Passionate technologist building mission-driven apps. 3+ years at FedEx, creator of LymeTrack health app and Genni B2B platform. Full-stack developer specializing in React Native, Next.js, and cloud solutions.",
  og: {
    title: "Ethan Hutchison | Senior Software Engineer & Product Developer",
    type: "website",
    url: "https://ethanh.co",
  },
};

//Home Page
const greeting = {
  title: "Ethan Hutchison",
  logo_name: "EthanHutchison",
  nickname: "",
  subTitle:
    "Creating technology with purpose | Mission-driven developer focused on real-world impact",
  description:
    "Passionate technologist with 3+ years driving innovation at FedEx's $500M modernization initiative. Led migrations of 15+ applications from Jenkins to GitHub Actions, spearheaded the Java 17 upgrade across critical systems, and built shared configuration services that retired 90+ redundant instances while driving 80% automated test coverage on critical dock applications. Currently building LymeTrack to support chronic illness patients and Genni, an AI-powered B2B lead generation platform launching in 2025, while staying focused on health tech, AI integration, and mission-driven products.",
  resumeLink: "null",
  // portfolio_repository: "https://github.com/scavengerisland/portfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/scavengerisland",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ethanhutchison/",
    link: "https://www.linkedin.com/in/ethanhutchison/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Mail",
    link: "mailto:ethan@ethanh.co",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/scavengerisland/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Core Technologies",
      fileName: "FullStackImg",
      skills: [
        "⚡ Languages: Java, Python, TypeScript, JavaScript, Dart",
        "⚡ Frameworks: Spring Boot, React Native, Next.js, Flutter, Angular",
        "⚡ Cloud Platforms: AWS, Google Cloud, GitHub Actions, Jenkins",
        "⚡ Databases & Realtime: SQL, NoSQL, Firebase, Convex",
        "⚡ Tools: Git, Docker, Splunk, AppDynamics, PostHog, Sentry",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#0175C2",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "bxl:spring-boot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
      ],
    },
    {
      title: "Cloud Modernization & Automation",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Led enterprise cloud migrations and modernization for FedEx's $500M savings initiative",
        "⚡ Build CI/CD pipelines, shared config services, and resilient cloud infrastructure",
        "⚡ Instrument platforms with observability tooling and automated testing at scale",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Stripe",
          fontAwesomeClassname: "simple-icons:stripe",
          style: {
            color: "#008CDD",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Splunk",
          fontAwesomeClassname: "simple-icons:splunk",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "AppDynamics",
          fontAwesomeClassname: "simple-icons:appdynamics",
          style: {
            color: "#33CCFF",
          },
        },
      ],
    },
    {
      title: "Specialized Experience",
      fileName: "DataScienceImg",
      skills: [
        "⚡ 3+ years of full-stack product development across enterprise and startup environments",
        "⚡ Cloud migrations, modernization roadmaps, and AI-assisted automation for 50% faster refactoring",
        "⚡ AI/ML integration, analytics, and personalized automation in health tech and SaaS products",
        "⚡ Agile leadership and storytelling with quarterly updates to 400+ executive stakeholders",
        "⚡ Startup strategy, product discovery, and go-to-market execution for mission-driven apps",
      ],
      softwareSkills: [
        {
          skillName: "Agile Leadership",
          fontAwesomeClassname: "iconoir:agile",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#FF6F00",
          },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#412991",
          },
        },
        {
          skillName: "Collaboration",
          fontAwesomeClassname: "carbon:collaboration",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Product Strategy",
          fontAwesomeClassname: "mdi:lightbulb-on-outline",
          style: {
            color: "#FFB300",
          },
        },
        {
          skillName: "PostHog",
          fontAwesomeClassname: "simple-icons:posthog",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Sentry",
          fontAwesomeClassname: "simple-icons:sentry",
          style: {
            color: "#FB4226",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // Keep as is or update as needed
  ],
};

const degrees = {
  degrees: [
    {
      title: "College of the Ozarks",
      subtitle: "B.S. in Computer Information Science",
      logo_path: "college_logo.png",
      alt_name: "College of the Ozarks",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I gained a strong foundation in computer science fundamentals, software engineering, databases, and more.",
        "⚡ I was recognized with the Leader in Society award from the Keeter Center for Character Education.",
        "⚡ I served as a Computer Science Department Teaching Assistant, helping students and developing my communication skills.",
      ],
      website_link: "https://www.cofo.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Agile Development Practices",
      subtitle: "- FedEx Internal Certification",
      logo_path: "fedex_logo.png",
      certificate_link: "",
      alt_name: "FedEx",
      color_code: "#4B2E83",
    },
    {
      title: "Java Development",
      subtitle: "- Currently Pursuing",
      logo_path: "java_logo.png",
      certificate_link: "",
      alt_name: "Java",
      color_code: "#1F70C199",
    },
    {
      title: "Cloud Development",
      subtitle: "- Currently Pursuing",
      logo_path: "cloud_logo.png",
      certificate_link: "",
      alt_name: "Cloud",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Startup Experience, and Community Involvement",
  description:
    "Originally from Missouri farm country, I bring a unique blend of agricultural roots and cutting-edge technology expertise. My experience ranges from maintaining farm equipment to architecting cloud solutions for Fortune 500 companies, and I'm passionate about building technology that solves real problems for real people with a focus on health tech and mission-driven applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer & Product Developer",
          company: "FedEx",
          company_url: "https://www.fedex.com/",
          logo_path: "fedex_logo.png",
          duration: "June 2021 - Present",
          location: "Atlanta, GA (Remote)",
          description:
            "Led migration of 15+ applications from Jenkins to GitHub Actions inside FedEx's $500M savings initiative, cutting deployment lead time by 40% for 7,000+ internal users. Spearheaded a Java 17 upgrade with OpenRewrite across critical systems and reduced refactored codebases by 68% while reaching 80% automated test coverage. Built a shared config server that decommissioned 90+ redundant instances and delivered quarterly modernization updates to 400+ stakeholders, increasing refactoring throughput 50% through AI-assisted tooling and comprehensive implementation playbooks.",
          color: "#4B2E83",
        },
        {
          title: "Computer Science Department Teaching Assistant",
          company: "College of the Ozarks",
          company_url: "https://www.cofo.edu/",
          logo_path: "college_logo.png",
          duration: "Jan 2020 - Dec 2020",
          location: "Point Lookout, MO",
          description:
            "Demonstrated strong communication skills by presenting complex technical concepts to diverse audiences. Supported students in learning programming fundamentals and advanced computer science concepts.",
          color: "#9b1578",
        },
        {
          title: "Information Technology Intern",
          company: "Kanakuk Kamps",
          company_url: "https://www.kanakuk.com/",
          logo_path: "kanakuk_logo.png",
          duration: "May 2020 - Aug 2020",
          location: "Branson, MO",
          description:
            "Delivered impactful support to dozens of end users, leveraging expertise in Windows and MacOS technologies, alongside Ubiquiti and Cisco network solutions to optimize performance.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Startup & Project Experience",
      experiences: [
        {
          title: "LymeTrack - Health App for Chronic Illness Management",
          company: "LymeTrack",
          company_url: "",
          logo_path: "lyme_app_logo.png",
          duration: "2024 - Present",
          location: "Atlanta, GA",
          description:
            "React Native + Expo app with 200+ Jest tests delivering real-time health tracking on a Convex backend. Day-centric architecture designed to scale to 155K projected users while supporting the 300K+ annual Lyme cases across the US. Tech stack: React Native, TypeScript, Convex, Clerk, OneSignal, PostHog, Sentry.",
          color: "#000000",
        },
        {
          title: "Genni - AI-Powered Lead Generation Platform",
          company: "Genni",
          company_url: "",
          logo_path: "social_startup_logo.png",
          duration: "2024 - Present",
          location: "Remote",
          description:
            "Next.js 14 + TypeScript SaaS with a multi-service architecture orchestrating Python FastAPI workers. Integrates Apify, FindyMail, and OpenAI for automated outreach with launch planned for October 2025. Tech stack: Next.js 14, Convex Cloud, FastAPI, Stripe, Clerk.",
          color: "#4285F4",
        },
        {
          title: "Light Works Studio - Mission-Driven App Development",
          company: "Light Works Studio",
          company_url: "",
          logo_path: "jobboard_logo.png",
          duration: "2014 - Present",
          location: "Atlanta, GA",
          description:
            "\"Driving technological innovations that make a positive impact on people's lives.\" Founder & Technical Lead delivering 13+ client websites across healthcare, professional services, manufacturing, and e-commerce with 10+ years of design and development experience. Focused on mission-driven health tech and productivity solutions. Client roster includes Branson CPA, Dr. Aaron Strickland DC, Aviation Enterprises, Ankerpak Manufacturing, and Local Flavor Branson.",
          color: "#FF3621",
        },
      ],
    },
    {
      title: "Agricultural Background & Community Involvement",
      experiences: [
        {
          title: "Farm Experience",
          company: "Family Farm",
          company_url: "",
          logo_path: "farm_logo.png",
          duration: "1998 - 2018",
          location: "Missouri",
          description:
            "Grew up on a working farm in Missouri, gaining extensive hands-on experience with agricultural equipment, operations, and maintenance. Developed strong mechanical skills maintaining tractors, implements, and farm machinery. Gained deep appreciation for sustainable farming practices and the challenges faced by agricultural producers. This background provides authentic understanding of agricultural technology needs and practical considerations for farm equipment operators.",
          color: "#47A248",
        },
        {
          title: "Volunteer",
          company: "SafeHouse",
          company_url: "",
          logo_path: "safehouse_logo.png",
          duration: "2022 - Present",
          location: "Atlanta, GA",
          description:
            "Actively volunteering with SafeHouse, supporting vulnerable community members through direct service and technical assistance. Helping implement technology solutions to improve organization efficiency and client services. Contributing to a mission-aligned organization focused on creating positive social impact.",
          color: "#4285F4",
        },
        {
          title: "Technical Speaker",
          company: "Local Tech Meetups",
          company_url: "",
          logo_path: "meetup_logo.png",
          duration: "2023 - Present",
          location: "Atlanta, GA",
          description:
            "Sharing technical knowledge through presentations at local developer meetups. Topics include cloud migration strategies, CI/CD best practices, and creating accessible applications. Developed reputation as an engaging communicator who can explain complex technical concepts to diverse audiences.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects & Technical Contributions",
  description:
    "My work centers on creating technology with purpose - solutions that address genuine human needs and deliver positive impact. From healthcare applications to agricultural innovations, I focus on combining technical excellence with meaningful outcomes. Below are projects that demonstrate my commitment to mission-driven development.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // Update with your publications or remove if not needed
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ethan_profile.png",
    description:
      "Based in Atlanta, GA, I'm focused on health technology, mission-driven applications, enterprise modernization, and AI-enabled full-stack solutions. If you're shipping products that improve people's lives—from health tech and B2B SaaS to modernization initiatives—I'd love to connect.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I share my technical knowledge and experiences through articles that aim to help other developers and technology enthusiasts.",
    link: "https://ethanh.co/blog",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Atlanta, Georgia, United States",
    locality: "Atlanta",
    country: "US",
    region: "Georgia",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/ZQd2hyZmLzrN7yJZ7",
  },
  phoneSection: {
    title: "Focus Areas",
    subtitle:
      "Health technology & mission-driven applications • Enterprise modernization & cloud solutions • Full-stack development & AI integration",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
