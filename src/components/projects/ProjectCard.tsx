import Image, { StaticImageData } from "next/image";
import { TechButton } from "../TechButton"; // Assuming this component is styled
import { ArrowUpRight } from "lucide-react";

interface Props {
  coverImage: StaticImageData;
  link: string;
  title: string;
  technology: string[];
  content: string;
}

export function ProjectCard({
  coverImage,
  link,
  title,
  technology,
  content,
}: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between gap-4 rounded-xl px-4 py-8
                 bg-slate-500/10 border border-white/10 backdrop-blur-lg
                 transition-all duration-300 ease-in-out
                 hover:border-accent/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
    >
      {/* Image Container */}
      <div className="w-full rounded-md">
        <Image
          src={coverImage}
          alt={`Cover image for ${title}`}
          className="w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Text Content */}
      <div className="flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-xl font-bold text-primary group-hover:text-accent transition-colors">
          {title}
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{content}</p>
      </div>
      {/* Tech Tags */}
      <div className="flex justify-start gap-2 flex-wrap pt-2 border-t border-white/10">
        {technology.map((tech) => (
          // Assuming TechButton renders a styled badge
          (<TechButton key={tech} tech={tech} />)
        ))}
      </div>
    </a>
  );
}
