import { IconType } from "react-icons";
import {
  SiReact,
  SiReactquery,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiPostgresql,
  SiSharp,
  SiMongodb,
  SiUnity,
  SiAdobephotoshop,
  SiBlender,
} from "react-icons/si";

export interface Skill {
  title: string;
  description: string;
  icon: IconType; // use a React component instead of string
  category: "Frontend" | "Backend & Databases" | "Game Development";
}

export const skillsList: Skill[] = [
  // Frontend
  {
    title: "React",
    description:
      "Building dynamic, component-based user interfaces with React.",
    icon: SiReact,
    category: "Frontend",
  },
  {
    title: "React Native",
    description:
      "Developing mobile applications for iOS and Android using React Native.",
    icon: SiReact,
    category: "Frontend",
  },
  {
    title: "Next.js",
    description:
      "Creating server-side rendered and statically generated web applications with Next.js.",
    icon: SiNextdotjs,
    category: "Frontend",
  },
  {
    title: "TypeScript",
    description:
      "Enhancing JavaScript with static typing for scalable and maintainable applications.",
    icon: SiTypescript,
    category: "Frontend",
  },
  {
    title: "Tailwind CSS",
    description:
      "Crafting responsive, utility-first designs quickly with Tailwind CSS.",
    icon: SiTailwindcss,
    category: "Frontend",
  },

  // Backend & Databases
  {
    title: "Node.js",
    description:
      "Building scalable server-side applications and APIs using Node.js runtime.",
    icon: SiNodedotjs,
    category: "Backend & Databases",
  },
  {
    title: "Express",
    description:
      "Creating robust APIs and server-side logic with the Express framework.",
    icon: SiExpress,
    category: "Backend & Databases",
  },
  {
    title: "Fastify",
    description:
      "Developing high-performance backend services using the Fastify framework.",
    icon: SiFastify,
    category: "Backend & Databases",
  },
  {
    title: "PostgreSQL",
    description:
      "Managing relational databases with advanced querying and strong data integrity.",
    icon: SiPostgresql,
    category: "Backend & Databases",
  },
  {
    title: "MongoDB",
    description:
      "Handling flexible, document-oriented NoSQL databases for scalable data storage.",
    icon: SiMongodb,
    category: "Backend & Databases",
  },

  // Game Development
  {
    title: "Unity",
    description: "Developing immersive 2D and 3D games using Unity and C#.",
    icon: SiUnity,
    category: "Game Development",
  },
  {
    title: "C#",
    description: "Programming game logic and mechanics with C# in Unity.",
    icon: SiSharp,
    category: "Game Development",
  },
  {
    title: "Photoshop",
    description:
      "Creating and editing graphics, textures, and visual assets for games.",
    icon: SiAdobephotoshop,
    category: "Game Development",
  },
  {
    title: "Blender",
    description:
      "Modeling, animating, and rendering 3D assets for games using Blender.",
    icon: SiBlender,
    category: "Game Development",
  },
];

export const projectList = [
  {
    link: "https://tickzi.com",
    videoUrl: "tickzi-video.mp4",
    title: "Tickzi",
    technologies: [
      "Next.js",
      "React Native",
      "Typescript",
      "Tailwind",
      "Drizzle",
    ],
    content:
      "Tickzi is a Brazilian ticketing platform that enables users to buy, transfer, and manage event tickets securely through a modern web and mobile interface",
  },
  {
    link: "https://maratonadaamazonia.com.br/en",
    videoUrl: "maratona-video.mp4",
    title: "Maratona da Amazônia",
    technologies: ["Next.js", "Tailwind", "Typescript"],
    content:
      "Maratona da Amazônia is an event website promoting the Amazon Half Marathon in Belém, Brazil, offering race details, registrations, and cultural experiences for runners of all levels.",
  },
  {
    link: "https://www.globaldiscounting.com/",
    title: "Global Discounting",
    videoUrl: "/global-video.mp4",
    technologies: ["Next.js", "Typescript", "Tailwind"],
    content:
      "Global Discounting is a digital financial platform that provides companies with innovative solutions to unlock cash flow and manage licensing agreements efficiently.",
  },
  {
    link: "https://master-tables.vercel.app/",
    title: "RPG Manager",
    videoUrl: "/tables-video.mp4",
    technologies: [
      "Next.js",
      "Typescript",
      "Drizzle",
      "Node.js",
      "Tailwind",
      "PostgreSQL",
    ],
    content:
      "RPG Manager é um website utilitário para gerenciamento de campanhas de RPG, com criação e administração de elementos por meio de tabelas dinâmicas e gerenciadores de estatísticas de personagens.",
  },
];
