import {
  ijcc,
  clear,
  carrent,
  jobit,
  tripguide,
  webijcc,
  snowfroc,
  portfolio,
  relaypractice
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
    company_name: "Clear",
    icon: clear,
    iconBg: "#479EEA",
    date: "May 2023 - August 2023",
    points: [
      "Mobile development with: React Native, Typescript, Rust, NodeJS, Firebase",
    ],
  }
];


const projects = [
  {
    name: "Relay Practice App",
    description:
      "A dummy mobiel app built for the Clear internship. Backend: Firebase, Rust, GraphQL. Frontend: React Native, Relay.",
      tags: [
        {
          name: "Firebase",
          color: "blue-text-gradient",
        },
        {
          name: "Rust",
          color: "green-text-gradient",
        },
        {
          name: "ReactNative",
          color: "pink-text-gradient",
        },
      ],
    image: relaypractice,
    source_code_link: "https://github.com/ronantakizawa/relaypractice",
  },
  {
    name: "MMA Quiz",
    description:
      "This is a simple quiz web application that calculates what kind of fighter you are using React, Bootstrap, ApexGraph.js.",
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
          name: "ApexGraph.js",
          color: "pink-text-gradient",
        },
      ],
    image: jobit,
    source_code_link: "https://github.com/ronantakizawa/fightingquiz",
  },
  {
    name: "International Schools API",
    description:
      "This is an API built with MongoDB and NodeJS to get information about international schools around the world.",
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
          name: "REST APIs",
          color: "pink-text-gradient",
        },
        
      ],
    image: tripguide,
    source_code_link: "https://github.com/ronantakizawa/internationalschoolsapi/",
  },
  {
    name: "Personal Portfolio",
    description:
      "This is my personal development portfolio modeled from Ladunjexa's portfolio. Uses: React, Tailwind CSS, Three.js.",
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
    name: "Jr Pentester Certification",
    description:
      "Tryhackme offensive penetration testing certificate. Learned: Web App Vulnerabilities, BurpSuite, Metasploit, NMAP.",
      tags: [
        {
          name: "Metasploit",
          color: "blue-text-gradient",
        },
        {
          name: "BurpSuite",
          color: "green-text-gradient",
        },
        {
          name: "NMAP",
          color: "pink-text-gradient",
        },
      ],
    image: webijcc,
    source_code_link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-KKQYLVSSIF.png",
  },
  {
    name: "SnowFROC 2023 CTF",
    description:
      "Placed 4th in OWASP's Website pentesting CTF. Found 13 vulnerabilities: SQL Injection, XSS, Directory Traversal...",
      tags: [
        {
          name: "WebAppSecurity",
          color: "blue-text-gradient",
        },
      ],
    image: snowfroc,
    source_code_link: "https://github.com/ronantakizawa/SnowFROC-CTF",
  },
];

export {experiences, projects };
