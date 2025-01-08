import {
  clear,
  ijcc,
  tripguide,
  ssl,
  telespeech,
  powaboxing,
  websec4webdev,
  zksecurity
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
      "Optimized function runtime to make it 25% faster (Threading, lazy loading), wrote 12 new security tests, built a new key generation/signing protocol with Yubikeys.",
      "Improved CI/CD pipeline by adding action to build a standalone executable of TAF",
    ],
  },
  {
    title: "Open Source Developer",
    company_name: "ZK Security",
    icon: zksecurity,
    iconBg: "#FFFFFF",
    date: "August 2024",
    points: [
      "Worked on Noname, a programming language to write ZK Proofs",
      "Implemented CI workflow that builds an entire ZK-proof scheme to test Noname’s functionality",
      "Wrote variable type-checking functions for writing ZK-proofs"
    ],
  }
];

const projects = [
  {
    name: "Telespeech",
    description:
      "HackHarvard2023 1st Place. Text-to-speech chrome extension to turn group chats into natural conversations.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "ChromeExtensions",
        color: "green-text-gradient",
      },
    ],
    image: telespeech,
    source_code_link: "https://github.com/ronantakizawa/telespeech",
  },
  {
    name: "Punch Analytics",
    description:
      "Acquired by POWA Boxing LLC. SaaS that analyzes boxing performance using POWA Boxing's Punch Sensors.",
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
      "A free Udemy course on secure web development and web pentesting. 3000+ students.",
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
    name: "Time Series KAN",
    description:
      "A Kolmogorov-Arnold Network for time series anomaly detection. 100+ claps on Medium.",
    tags: [
      {
        name: "Pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "TimeSeries",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://medium.com/@ronantech/time-series-anomaly-detection-using-kolmogorov-arnold-networks-abd9bbeaa9af",
  },
];

export { experiences, projects };
