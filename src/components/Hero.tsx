import Image from "next/image";
import picture from "../assets/picture.jpg";
import "./Hero.css";
import { Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full py-36 border-b-2 border-primary bg-gradient-to-r from-terciary via-terciary to-secondary overflow-hidden relative">
      <div className=" animate-[appear_3s_ease-in-out] before:absolute before:h-96 before:w-96 before:bottom-0 before:-left-10 before:bg-gradient-to-tr from-terciary via-terciary to-secondary before:z-10 before:rounded-[50%] after:h-32 after:w-32 after:absolute after:top-10 after:right-20 after:bg-gradient-to-bl after:from-transparent after:via-secondary after:to-primary after:rounded-[50%]" />

      <div className="flex flex-col-reverse gap-10 items-center container mx-auto px-5 sm:flex-row">
        {/*Left*/}
        <div className="flex items-center flex-1 z-20">
          <h1 className="text-3xl sm:text-6xl mx-auto my-20 font-bold font-sans text-zinc-200 ">
            <span className="flex items-center gap-5">
              Lucas Emanoel
              <a
                href="https://www.linkedin.com/in/lucas-emanoel-388733234/"
                target="blank"
                className="hover:cursor-pointer"
              >
                <Linkedin height={30} width={30} />
              </a>
              <a
                href="https://github.com/lucastheldl"
                target="blank"
                className="hover:cursor-pointer"
              >
                <Github height={30} width={30} />
              </a>
            </span>
            <p className="text-primary animate">
              Desenvolvedor Frontend{"</>"}
            </p>
          </h1>
        </div>
        {/*Right*/}
        {/*  <div className="flex flex-col gap-10 items-center flex-1 mx-auto">
           <Image
            src={picture}
            alt=""
            className="w-[350px] h-auto rounded-full border border-primary"
          /> 
           <a
            href="/files/curriculo.pdf"
            download
            className="hidden text-2xl font-bold text-terciary rounded-full bg-primary py-5 px-12 border border-transparent sm:block cursor-pointer transition-colors hover:border-primary hover:bg-terciary hover:text-primary"
          >
            Baixar CV
          </a> 
        </div> */}
      </div>
    </section>
  );
}
