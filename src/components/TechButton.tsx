interface TechButtonProps {
  tech: string;
}

export function TechButton({ tech }: TechButtonProps) {
  return (
    <div className="rounded-md bg-zinc-900 text-zinc-300 p-[4px] text-[0.7rem] font-bold">
      {tech}
    </div>
  );
}
