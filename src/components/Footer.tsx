import { Mail } from "lucide-react";

export function Footer() {
  return (
    <div className="w-full border-t border-white/10">
      <div className="container mx-auto px-6 py-16 flex flex-col items-center gap-8">
        <div className="mt-12 w-fulltext-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:LucasFigueiredo.emanoel@gmail.com"
              className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors group"
            >
              <Mail size={20} />
              <span className="group-hover:underline">
                lucasfigueiredo.emanoel@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
