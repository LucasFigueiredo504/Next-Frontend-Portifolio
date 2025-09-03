//projects
import PokeApi from "../assets/Pokeapi.jpg";
import tmdb from "../assets/tmdb.png";
import weather from "../assets/weatherApp.jpg";
import pomodoro from "../assets/PomodoroApp.png";
import shirtShop from "../assets/shirtShop.png";
import cardBattle from "../assets/cardBattle.png";
import booksCollection from "../assets/booksCollecion.jpg";
import githubBlog from "../assets/GithubBlog.png";
import placeholder from "../assets/reactLogo.jpg";

export const skillsList = [
  {
    image: "/placeholder.svg?height=64&width=64",
    title: "JavaScript",
    description: "Dynamic programming language for web development",
  },
  {
    image: "/placeholder.svg?height=64&width=64",
    title: "TypeScript",
    description: "Typed superset of JavaScript for better development",
  },
  {
    image: "/placeholder.svg?height=64&width=64",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    image: "/placeholder.svg?height=64&width=64",
    title: "Git",
    description: "Distributed version control system",
  },
  {
    image: "/placeholder.svg?height=64&width=64",
    title: "React",
    description: "JavaScript library for building user interfaces",
  },
  {
    image: "/placeholder.svg?height=64&width=64",
    title: "React Native",
    description: "Framework for building native mobile apps with React",
  },
  {
    image: "/placeholder.svg?height=64&width=64",
    title: "Next.js",
    category: "webdev",
    description: "React framework for production-ready applications",
  },
  {
    image: "/placeholder.svg?height=64&width=64",
    title: "Node.js",
    description: "JavaScript runtime for server-side development",
  },
  {
    image: "/placeholder.svg?height=64&width=64",
    title: "PostgreSQL",
    description:
      "An advanced open-source relational database known for reliability, scalability, and SQL compliance.",
  },
  {
    image: "/placeholder.svg?height=64&width=64",
    title: "Unity Engine",
    description:
      "A powerful cross-platform game engine using C# for building 2D, 3D, and VR/AR experiences.",
  },
];

export const projectList = [
  {
    image: pomodoro,
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
    image: cardBattle,
    link: "https://lucastheldl.github.io/CardBattle/",
    videoUrl: "maratona-video.mp4",
    title: "Maratona da Amazônia",
    technologies: ["Next.js", "Tailwind", "Typescript"],
    content:
      "Maratona da Amazônia is an event website promoting the Amazon Half Marathon in Belém, Brazil, offering race details, registrations, and cultural experiences for runners of all levels.",
  },
  {
    image: githubBlog,
    link: "https://lucastheldl.github.io/GithubBlog/",
    title: "Global Discounting",
    videoUrl: "/global-video.mp4",
    technologies: ["Next.js", "Typescript", "Tailwind"],
    content:
      "Global Discounting is a digital financial platform that provides companies with innovative solutions to unlock cash flow and manage licensing agreements efficiently.",
  },
  {
    image: shirtShop,
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
      "Website para gerenciamento de campanhas rpg com criação e gerenciamento de elementos utilizando tabelas dinâmicas",
  },
];
