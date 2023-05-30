import Image from "next/image";
import picture from "../assets/picture.jpg";

export function Hero() {
  return (
    <section className="w-full py-56 border-b-2 border-primary bg-gradient-to-r from-terciary via-terciary to-secondary">
      <div className="flex sm:container sm:mx-auto">
        {/*Left*/}
        <div className="flex items-center w-1/2">
          <h2 className="text-6xl font-bold text-primary">
            <span className="text-zinc-200">
              Olá,
              <br /> me chamo
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
            className="w-[450px] h-auto rounded-full border border-primary"
          />
          <a
            href="../assets/curriculo.pdf"
            download
            className="text-2xl font-bold text-terciary rounded-full bg-primary py-5 px-16 border border-transparent cursor-pointer transition-colors hover:border-primary hover:bg-terciary hover:text-primary"
          >
            Currículo
          </a>
        </div>
      </div>
    </section>
  );
}
