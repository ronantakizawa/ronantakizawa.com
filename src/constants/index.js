import {
  clear,
  ijcc,
  jobit,
  portfolio,
  relaypractice,
  snowfroc,
  tripguide,
  webijcc,
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
    title: "Project Intern",
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
];

const projects = [
  {
    name: "MMA Quiz",
    description:
      "This is a simple quiz web application that calculates what kind of fighting style is optimal for you. This project is dockerized.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ronantakizawa/fightingquiz",
  },
  {
    name: "IS API",
    description:
      "API built with MongoDB and NodeJS to get information about international schools. Deployed with AWS EC2.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "AWSEC2",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/ronantakizawa/internationalschoolsapi/",
  },
  {
    name: "Personal Portfolio",
    description:
      "This is my personal development portfolio modeled from Ladunjexa's portfolio.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://ijcc.jp/",
  },
  {
    name: "Envirobattery",
    description:
      "Chrome extension that calculates your carbon footprint from your laptop usage.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "VanillaJavascript",
        color: "pink-text-gradient",
      },
    ],
    image: webijcc,
    source_code_link:
      "https://chrome.google.com/webstore/detail/envirobattery/bopeofklopcheapjeoncmccndnceoocb",
  },
];

export { experiences, projects };
