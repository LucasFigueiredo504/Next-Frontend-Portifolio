import Image, { StaticImageData } from "next/image";

interface Props {
  coverImage: StaticImageData;
  link: string;
  title: string;
  content: string;
}

export function ProjectCard({ coverImage, link, title, content }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col items-center gap-3 max-w-[300px] min-w-fit h-96 bg-terciary rounded-xl p-5 border border-zinc-900 hover:border-primary"
    >
      <div className="min-w-[200px] h-52 bg-secondary rounded-xl overflow-hidden">
        <Image
          src={coverImage}
          alt={"project cover"}
          className="object-cover h-full"
        />
      </div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p>{content}</p>
    </a>
  );
}
