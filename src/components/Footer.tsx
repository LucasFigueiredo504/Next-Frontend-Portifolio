import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="w-full h-56 bg-gradient-to-r from-terciary via-terciary to-secondary py-10"
      id="contact"
    >
      <div className="flex-col container mx-auto px-5 ">
        <a
          href="mailto:LucasFigueiredo.emanoel@gmail.com"
          className="flex gap-2 p-3 items-center justify-center text-lg underline transition-colors hover:text-primary"
        >
          <Mail size={25} />
          lucasfigueiredo.emanoel@gmail.com
        </a>
        <a
          href="www.linkedin.com/in/
        lucas-emanoel-figueiredo-da-silva
        "
          target="blank"
          className="flex gap-2 p-3 items-center justify-center text-lg underline transition-colors hover:text-primary"
        >
          <Linkedin size={25} />
          Linkedin
        </a>
      </div>
    </footer>
  );
}
