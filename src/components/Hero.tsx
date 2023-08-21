import Image from "next/image";
import picture from "../assets/picture.jpg";

export function Hero() {
  return (
    <section className="w-full py-36 border-b-2 border-primary bg-gradient-to-r from-terciary via-terciary to-secondary">
      <div className="flex container mx-auto px-5">
        {/*Left*/}
        <div className="flex items-center w-1/2">
          <h2 className="text-5xl font-bold text-primary">
            <span className="text-zinc-200">
              Hello,
              <br />I am
            </span>
            <br />
            Lucas Emanoel {"</>"}
          </h2>
        </div>
        {/*Right*/}
        <div className="flex flex-col gap-10 items-center w-1/2">
          <Image
            src={picture}
            alt=""
            className="w-[350px] h-auto rounded-full border border-primary"
          />
          <a
            href="/files/curriculo.pdf"
            download
            className="text-2xl font-bold text-terciary rounded-full bg-primary py-5 px-12 border border-transparent cursor-pointer transition-colors hover:border-primary hover:bg-terciary hover:text-primary"
          >
            Curriculum
          </a>
        </div>
      </div>
    </section>
  );
}
