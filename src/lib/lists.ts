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
import { ComponentType } from "react";

export interface Skill {
  title: string;
  description: string;
  icon: ComponentType; // Keep as ComponentType
  category: "Frontend" | "Backend & Databases" | "Game Development";
}

export const skillsList: Skill[] = [
  // Frontend
  {
    title: "React",
    description:
      "Building dynamic, component-based user interfaces with React.",
    icon: SiReact as ComponentType, // Type assertion
    category: "Frontend",
  },
  {
    title: "React Native",
    description:
      "Developing mobile applications for iOS and Android using React Native.",
    icon: SiReact as ComponentType, // Type assertion
    category: "Frontend",
  },
  {
    title: "Next.js",
    description:
      "Creating server-side rendered and statically generated web applications with Next.js.",
    icon: SiNextdotjs as ComponentType, // Type assertion
    category: "Frontend",
  },
  {
    title: "TypeScript",
    description:
      "Enhancing JavaScript with static typing for scalable and maintainable applications.",
    icon: SiTypescript as ComponentType, // Type assertion
    category: "Frontend",
  },
  {
    title: "Tailwind CSS",
    description:
      "Crafting responsive, utility-first designs quickly with Tailwind CSS.",
    icon: SiTailwindcss as ComponentType, // Type assertion
    category: "Frontend",
  },
  // Backend & Databases
  {
    title: "Node.js",
    description:
      "Building scalable server-side applications and APIs using Node.js runtime.",
    icon: SiNodedotjs as ComponentType, // Type assertion
    category: "Backend & Databases",
  },
  {
    title: "Express",
    description:
      "Creating robust APIs and server-side logic with the Express framework.",
    icon: SiExpress as ComponentType, // Type assertion
    category: "Backend & Databases",
  },
  {
    title: "Fastify",
    description:
      "Developing high-performance backend services using the Fastify framework.",
    icon: SiFastify as ComponentType, // Type assertion
    category: "Backend & Databases",
  },
  {
    title: "PostgreSQL",
    description:
      "Managing relational databases with advanced querying and strong data integrity.",
    icon: SiPostgresql as ComponentType, // Type assertion
    category: "Backend & Databases",
  },
  {
    title: "MongoDB",
    description:
      "Handling flexible, document-oriented NoSQL databases for scalable data storage.",
    icon: SiMongodb as ComponentType, // Type assertion
    category: "Backend & Databases",
  },
  // Game Development
  {
    title: "Unity",
    description: "Developing immersive 2D and 3D games using Unity and C#.",
    icon: SiUnity as ComponentType, // Type assertion
    category: "Game Development",
  },
  {
    title: "C#",
    description: "Programming game logic and mechanics with C# in Unity.",
    icon: SiSharp as ComponentType, // Type assertion
    category: "Game Development",
  },
  {
    title: "Photoshop",
    description:
      "Creating and editing graphics, textures, and visual assets for games.",
    icon: SiAdobephotoshop as ComponentType, // Type assertion
    category: "Game Development",
  },
  {
    title: "Blender",
    description:
      "Modeling, animating, and rendering 3D assets for games using Blender.",
    icon: SiBlender as ComponentType, // Type assertion
    category: "Game Development",
  },
];

export const projectList = [
  {
    link: "https://tickzi.com.br",
    images: ["/tk.jpg", "/tk_1.jpg", "/tk_2.jpg"],
    title: "Tickzi",
    technologies: [
      "Next.js",
      "React Native",
      "Typescript",
      "Tailwind",
      "Drizzle",
      "Shadcn",
      "Zustand",
    ],
    content:
      "Tickzi is a Brazilian ticketing platform that enables users to buy, transfer, and manage event tickets securely through a modern web and mobile interface",
  },
  {
    link: "https://maratonadaamazonia.com.br/en",
    images: ["/ca.jpg", "/ca_1.jpg", "/ca_2.jpg"],
    title: "Maratona da Amazônia",
    technologies: ["Next.js", "Tailwind", "Typescript"],
    content:
      "Maratona da Amazônia is an event website promoting the Amazon Half Marathon in Belém, Brazil, offering race details, registrations, and cultural experiences for runners of all levels.",
  },
  {
    link: "https://www.globaldiscounting.com/",
    title: "Global Discounting",
    images: ["/gd.jpg", "/gb_1.jpg", "/gb_2.jpg"],
    technologies: ["Next.js", "Typescript", "Tailwind", "Shadcn"],
    content:
      "Global Discounting is a digital financial platform that provides companies with innovative solutions to unlock cash flow and manage licensing agreements efficiently.",
  },
  {
    link: "https://master-tables.vercel.app/",
    title: "RPG Manager",
    images: ["/mt.jpg", "/mt_1.jpg"],
    technologies: [
      "Next.js",
      "Typescript",
      "Drizzle",
      "Node.js",
      "Tailwind",
      "PostgreSQL",
    ],
    content:
      "RPG Manager is a utility website for managing RPG campaigns, allowing the creation and administration of elements through dynamic tables and character statistics managers.",
  },
];
