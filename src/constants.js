// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import CSJMU from "./assets/education_logo/CSJMA.jpg";

import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";

import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";

import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";

import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

import MyCollege from "./assets/education_logo/MyCollege.png";


// Project Section Logo's
import maxBot from "./assets/work_logo/maxBot.png";
import MaxEnglish from "./assets/work_logo/MaxEnglish.png";
import MaxGame from "./assets/work_logo/MaxGame.png";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
           { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring boot", logo: springbootLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];



export const education = [
  {
    id: 1,
    img: CSJMU,
    school: "Chhatrapati Shahu Ji Maharaj University,Kanpur Nagar ",
    date: "Sept 2023 - Aug 2026",
    grade: "7.5+ CGPA",
    desc: "I completed my Bachelor of Computer Applications (BCA) from Chhatrapati Shahu Ji Maharaj University,Kanpur Nagar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
    degree: "Bachelor of Computer Applications (BCA)",
  },
  {
    id: 2,
    img: MyCollege,
    school: "Shivnath Shivdas Maurya Inter College , Sarsaul kanpur Nagar",
    date: "Apr 2021 - March 2022",
    grade: "65.6%",
    desc: "I completed my class 12 education from Shivnath Shivdas Maurya Inter college,  under the UPMSP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "UPMSP(XII) - PCM",
  },
  {
    id: 3,
    img: MyCollege,
    school: "Shivnath Shivdas Maurya Inter College , Sarsaul kanpur Nagar",
    date: "Apr 2022 - March 2023",
    grade: "81.5%",
    desc: "I completed my class 10 education from Shivnath Shivdas Maurya Inter College, under the UPMSP board, where I studied Science and Mathematics.",
    degree: "UPMSP(X), Science and Mathematics",
  },
];

export const projects = [
  {
    id: 0,
    title: "Multi-Mode ChatBot",
    description:
      "A fun and dynamic chatbot app offering multiple conversation modes — General Chat, Idol Journey, Career Help, Strategy Advice, and more. Powered by an AI backend, the app mimics human interaction while giving topic-specific guidance using pre-trained prompts, stylish UI, and voice integration.",
    image: maxBot, // use the image file from the bot screenshots
    tags: ["React", "JavaScript", "AI Prompting", "TailwindCSS", "Gemini API"],
    github: "https://github.com/chandan944/testBot",
    webapp: "https://bot-test-psi.vercel.app/",
  },
  {
    id: 1,
    title: "Max English Learner",
    description:
      "A React Native-based mobile app powered by Gemini API designed to help users learn English through stories, vocabulary challenges, and real-time feedback. Features include genre-based story generation, sentence correction, text-to-speech, Hindi translations, and fuzzy word search to enrich learning experience in a fun way.",
    image: MaxEnglish, // use the image file you uploaded
    tags: [
      "React Native",
      "Gemini API",
      "Text-to-Speech",
      "JavaScript",
      "TailwindCSS",
    ],
    github: "https://github.com/chandan944/MaxLearn",
    webapp: "https://expo.dev/artifacts/eas/kxnDpr1WpZuFoEUo5hbFz7.apk",
  },
  {
    id: 2,
    title: "Game Discovery Portal",
    description:
      "A full-featured gaming platform built with React that allows users to browse and discover games by genres like Action, RPG, Strategy, etc. Features include fuzzy search, game previews, and dark/light mode toggle. UI is enhanced with category filters and animated transitions.",
    image: MaxGame, // screenshot of your game UI
    tags: ["React JS", "API", "JavaScript", "TailwindCSS", "Responsive UI"],
    github: "https://github.com/chandan944/A-Game-site",
    webapp: "https://max-game-kv0bwk1pa-chandans-projects-6abbd979.vercel.app/",
  },
];
