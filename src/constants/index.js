import {
  clear,
  ijcc,
  tripguide,
  ssl,
  telespeech,
  powaboxing,
  websec4webdev
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Ireland Japan Chamber of Commerce",
    icon: ijcc,
    iconBg: "#FFFFFF",
    date: "December 2022 - May 2023",
    points: [
      "Generated content for website efficiently using GPT-3.",
      "Redesigned website using HTML, CSS, and Javascript.",
      "Automated website updates using widgets.",
      "Created 5 graphic designs to promote networking events on social media.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Clear (Y Combinator W21)",
    icon: clear,
    iconBg: "#479EEA",
    date: "May 2023 - August 2023",
    points: [
      "DevOps fullstack mobile development with: React Native, Typescript, NodeJS, GraphQL, Rust, SQL, Docker, GitLab",
      "Improved UI/ UX animations, patched login errors, created new API queries for Rust Server",
      "Pushed 40 commits and fixed 20 Github issues",
    ],
  },
  {
    title: "Researcher",
    company_name: "NYU Secure Systems Lab",
    icon: ssl,
    iconBg: "#FFFFFF",
    date: "May 2024 - August 2024",
    points: [
      "Patched, and added new features to The Archive Framework (TAF)",
      "Improved CI/CD pipeline by adding action to build a cross-platform standalone executable of TAF",
      "Optimized function runtime to make it 25% faster",
    ],
  }
];

const projects = [
  {
    name: "Telespeech",
    description:
      "AI-powered text-to-speech chrome extension using Firebase and a NextJS sever connected to ElevenLabs API.",
    tags: [
      {
        name: "HackHarvard",
        color: "blue-text-gradient",
      },
      {
        name: "Text2Speech",
        color: "green-text-gradient",
      },
    ],
    image: telespeech,
    source_code_link: "https://github.com/ronantakizawa/telespeech",
  },
  {
    name: "Punch Analytics",
    description:
      "ML SaaS that analyzes boxing performance using POWA Boxing's Punch Sensors. Acquired by POWA Boxing.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "IoT",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: powaboxing,
    source_code_link:
      "https://github.com/ronantakizawa/punchanalytics",
  },
  {
    name: "Web Sec 4 Web Dev",
    description:
      "A free Udemy course on secure web development and web pentesting. 2700+ students.",
    tags: [
      {
        name: "Web Security",
        color: "blue-text-gradient",
      },
      {
        name: "Pentesting",
        color: "green-text-gradient",
      },
    ],
    image: websec4webdev,
    source_code_link: "https://www.udemy.com/course/websec4webdev/",
  },
  {
    name: "IS API",
    description:
      "API built with MongoDB and NodeJS to get information about international schools. Deployed with AWS, k8.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "k8",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/ronantakizawa/internationalschoolsapi/",
  },
];

export { experiences, projects };
