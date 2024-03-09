interface TechButtonProps {
  tech: string;
}

export function TechButton({ tech }: TechButtonProps) {
  return (
    <div className="rounded-md bg-primary text-slate-800 p-[4px] text-[0.7rem] font-bold">
      {tech}
    </div>
  );
}
