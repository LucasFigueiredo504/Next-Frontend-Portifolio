import Image, { StaticImageData } from "next/image";
import { TechButton } from "../TechButton";

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
      className="flex flex-col relative justify-between items-center gap-3 max-w-[300px] min-w-[210px] h-[400px] bg-terciary rounded-xl p-3 border border-transparent transition-all hover:border-primary hover:-translate-y-1"
    >
      <div className="min-w-[200px] h-52 bg-transparent flex items-center">
        <Image src={coverImage} alt={"project cover"} className="w-auto" />
      </div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-center">{content}</p>
      <div className="flex justify-center gap-1 flex-wrap">
        {technology.map((tech) => {
          return <TechButton tech={tech} />;
        })}
      </div>
    </a>
  );
}
