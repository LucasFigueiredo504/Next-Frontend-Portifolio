import Image from "next/image";
import LaptopImage from "../assets/laptop.png";

export function About() {
  return (
    <section
      className="flex-col w-full py-32 border-b-2 border-primary bg-gradient-to-r from-secondary via-secondary to-terciary "
      id="about"
    >
      <h1 className="text-center mb-28 text-4xl font-bold text-primary">
        About me
      </h1>
      <div className="flex container mx-auto px-5">
        {/*Left*/}
        <div className="flex items-center w-1/2">
          <Image
            src={LaptopImage}
            alt={"laptop"}
            className="w-[450px] h-auto"
          />
        </div>
        {/*Right*/}
        <div className="w-1/2">
          <p className="text-lg">
            I'm in love with technology and all it's endless possibilities. i
            started my trajectory in 2018 developing games in Unity, in 2021 i
            aroused a big interest in Web development which led me to deepen
            myself in this field through the creation projects, studying of
            courses and independent studies.
            <br />
            <br />
            At the moment i have knowledge in Front-End technologies, as well as
            skills in design using photoshop.
          </p>
        </div>
      </div>
    </section>
  );
}
