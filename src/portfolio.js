/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ethan Hutchison",
  description:
    "A mission-driven technologist passionate about creating solutions with real-world positive impact. Expertise in full-stack development, agile methodologies, and cross-functional collaboration with agricultural roots and startup experience.",
  og: {
    title: "Ethan Hutchison",
    type: "website",
    url: "https://ethanh.co",
  },
};

//Home Page
const greeting = {
  title: "Ethan Hutchison",
  logo_name: "EthanHutchison",
  nickname: "people. tech. coffee.",
  subTitle:
    "Creating technology with purpose | Mission-driven developer focused on real-world impact",
  resumeLink: "null",
  portfolio_repository: "https://github.com/scavengerisland/portfolio",
  githubProfile: "https://github.com/scavengerisland",
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
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Mail",
    link: "mailto:ethan@ethanh.co",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/scavengerisland/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building & maintaining Java SpringBoot applications with high reliability",
        "⚡ Frontend experience with multiple CMS platforms and React components",
        "⚡ Development and refactoring for optimal cloud-based performance",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "bxl:spring-boot",
          style: {
            color: "green",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
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
          skillName: "JUnit5",
          fontAwesomeClassname: "devicon:junit",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#CB3837",
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
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Implementing CI/CD pipelines with GitHub Actions and Jenkins",
        "⚡ Experience with cloud platforms and modern infrastructure",
        "⚡ Application monitoring, error analytics, and performance optimization",
      ],
      softwareSkills: [
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
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PCF",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
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
      title: "Platforms & Tools",
      fileName: "DesignImg",
      skills: [
        "⚡ Driving digital innovation with cutting-edge platforms",
        "⚡ Experience with Agile methodologies and leading SCRUM ceremonies",
        "⚡ Building technical roadmaps and implementation strategies",
      ],
      softwareSkills: [
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Salesforce",
          fontAwesomeClassname: "simple-icons:salesforce",
          style: {
            color: "#00A1E0",
          },
        },
        {
          skillName: "MacOS",
          fontAwesomeClassname: "wpf:macos",
          style: {
            color: "gray",
          },
        },
        {
          skillName: "SquareSpace",
          fontAwesomeClassname: "simple-icons:squarespace",
          style: {
            color: "blue",
          },
        },
        {
          skillName: "Shopify",
          fontAwesomeClassname: "simple-icons:shopify",
          style: {
            color: "green",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "IntelliJ",
          fontAwesomeClassname: "skill-icons:idea-light",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
    {
      title: "Interests & Expertise",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Agile Software Development Lifecycle (SDLC)",
        "⚡ AI and Machine Learning integration in apps and analytics",
        "⚡ Team leadership and strategic alignment",
        "⚡ Agricultural technology and organic farming solutions",
      ],
      softwareSkills: [
        {
          skillName: "Agile Development",
          fontAwesomeClassname: "iconoir:agile",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AI",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Data Architecture",
          fontAwesomeClassname: "simple-icons:databricks",
          style: {
            color: "#FF3621",
          },
        },
        {
          skillName: "Leadership",
          fontAwesomeClassname: "carbon:collaboration",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Agriculture",
          fontAwesomeClassname: "mdi:agriculture",
          style: {
            color: "#47A248",
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
    "My diverse background bridges technology and agriculture, from growing up on a Missouri farm to refactoring critical enterprise applications. I bring hands-on experience with farm equipment maintenance, technical problem-solving, and a passion for creating innovative solutions that make a real difference. My work reflects my commitment to mission-driven technology that creates positive impact.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Software Developer II",
          company: "FedEx",
          company_url: "https://www.fedex.com/",
          logo_path: "fedex_logo.png",
          duration: "June 2021 - Present",
          location: "Remote",
          description:
            "Led GitHub Actions adoption from Jenkins, reducing deployment times by 40% and improving reliability for systems serving 7,000+ internal users daily. Collaborated on a $500M savings initiative through FedEx Freight mainframe retirement, migrating 13 critical business systems to modern cloud infrastructure with 99.9% uptime. Accelerated application refactoring efficiency by 50% by implementing AI-driven code analysis tools, establishing a modernization template adopted across 5 development teams. Reduced codebase by 68% in refactored applications using SpringBoot and MVC design patterns, while increasing test coverage to 80%. Delivered quarterly strategic alignment presentations to 400+ organizational stakeholders, effectively communicating technical roadmaps and team achievements. Created comprehensive technical documentation and implementation guides that reduced onboarding time for new team members by 30%.",
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
          title: "Lyme Tracker Mobile App",
          company: "LightWorks Studio",
          company_url: "",
          logo_path: "lyme_app_logo.png",
          duration: "2024 - Present",
          location: "Atlanta, GA",
          description:
            "Leading development of a mission-driven healthcare app helping Lyme disease patients track symptoms and improve treatment outcomes. Built on Flutter/Firebase with a focus on data privacy and user-centered design. Conducted user interviews with 25+ Lyme patients to identify critical pain points and feature priorities. Implemented AI-driven analytics to provide personalized insights and treatment suggestions, improving patient quality of life. Designed for scalability to support 10,000+ users in first year with 99.5% uptime target. Creating a solution with direct positive impact on a community with limited technological support.",
          color: "#000000",
        },
        {
          title: "Technical Advisor",
          company: "Social Media Startup",
          company_url: "",
          logo_path: "social_startup_logo.png",
          duration: "2023 - Present",
          location: "Remote",
          description:
            "Providing strategic technical guidance to an early-stage social media platform focused on community building. Advised on technology stack selection, scalability planning, and roadmap development. Helped implement privacy-by-design principles and ethical data practices. Demonstrated ability to translate complex technical concepts to non-technical founders, enabling informed business decisions.",
          color: "#4285F4",
        },
        {
          title: "Co-Founder",
          company: "Job Board Startup",
          company_url: "",
          logo_path: "jobboard_logo.png",
          duration: "2019 - 2020",
          location: "College of the Ozarks",
          description:
            "Co-founded a niche job board connecting students with work opportunities during college. Built the initial MVP using modern web technologies and implemented automated job matching algorithms. Managed the rapid development cycles and adapted to changing market requirements in a high-pressure startup environment. Gained valuable experience in product development, user acquisition, and lean startup methodologies.",
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
      "I'm particularly interested in connecting with mission-driven teams creating technology that makes a positive real-world impact. My passion lies at the intersection of innovation and purpose, especially in areas like agricultural technology, healthcare solutions, and sustainable systems. Feel free to reach out via LinkedIn or email to discuss how I might contribute to your team's mission.",
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
    title: "",
    subtitle: "",
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
