"use client";
import { skillsList } from "@/lib/lists";
import Image from "next/image";

export function Skills() {
  function showContent(title: string) {
    let allItens = document.querySelectorAll(".content");
    let item = document.querySelector(`#${title}`);

    for (let i = 0; i < allItens.length; i++) {
      allItens[i].classList.add("hidden");
    }
    item?.classList.remove("hidden");
  }

  return (
    <section
      className="flex-col w-full py-32 border-b-2 border-primary bg-gradient-to-r from-terciary via-terciary to-secondary"
      id="skills"
    >
      <h1 className="text-center mb-20 text-4xl font-bold text-primary">
        Skills
      </h1>
      <div className="flex gap-7 container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center w-1/2 h-fit p-5 my-auto bg-secondary rounded-xl">
          {skillsList.map((skill, i) => {
            return (
              <button
                key={i}
                onClick={() => showContent(skill.title)}
                className="w-fit rounded-lg border border-transparent transition-colors overflow-hidden hover:border-primary"
              >
                <div className="grayscale-100 hover:grayscale-0">
                  {
                    <Image
                      src={skill.image}
                      alt={skill.title}
                      className="w-28 h-auto"
                    ></Image>
                  }
                </div>
              </button>
            );
          })}
        </div>
        {/**right */}
        <div className="flex items-center w-1/2 text-lg">
          <p className="content" id="placeholder">
            Click in one{" "}
            <span className="text-primary font-bold">technology</span> to know
            more.
          </p>
          <p className="content hidden" id="html">
            <span className="text-primary font-bold text-xl">HTML</span> stands
            for Hyper Text Markup Language. HTML is the standard markup language
            for creating Web pages. HTML describes the structure of a Web page.
            HTML consists of a series of elements. HTML elements tell the
            browser how to display the content.
          </p>
          <p className="content hidden" id="css">
            <span className="text-primary font-bold text-xl">CSS</span> stands
            for Cascading Style Sheets. CSS describes how HTML elements are to
            be displayed on screen, paper, or in other media.
          </p>
          <p className="content hidden" id="javascript">
            <span className="text-primary font-bold text-xl">JavaScript</span>{" "}
            is a dynamic programming language that's used for web development,
            in web applications, for game development, and lots more. It allows
            you to implement dynamic features on web pages that cannot be done
            with only HTML and CSS.
          </p>
          <p className="content hidden" id="react">
            <span className="text-primary font-bold text-xl">React</span> is a
            free and open-source front-end JavaScript library for building user
            interfaces based on components.
          </p>
          <p className="content hidden" id="sass">
            <span className="text-primary font-bold text-xl">SASS</span> is a
            CSS preprocessor is a scripting language that extends CSS by
            allowing developers to write code in one language and then compile
            it into CSS.
          </p>
          <p className="content hidden" id="bootstrap">
            <span className="text-primary font-bold text-xl">Bootstrap</span> is
            a free, open source front-end development framework for the creation
            of websites and web apps. Designed to enable responsive development
            of mobile-first websites, Bootstrap provides a collection of syntax
            for template designs.
          </p>
          <p className="content hidden" id="git">
            <span className="text-primary font-bold text-xl">GitHub</span> is a
            source code and file hosting platform with version control using
            Git. It allows programmers, utilities or any user registered on the
            platform to contribute to private and/or Open Source projects from
            anywhere in the world.
          </p>
          <p className="content hidden" id="typescript">
            <span className="text-primary font-bold text-xl">TypeScript</span>{" "}
            is an open source programming language developed by Microsoft. It is
            a strict syntactic superset of JavaScript and adds optional static
            typing to the language.
          </p>
          <p className="content hidden" id="reactNative">
            <span className="text-primary font-bold text-xl">React Native</span>{" "}
            is a JavaScript library created by Facebook. It is used to develop
            apps for Android and iOS systems natively.
          </p>
          <p className="content hidden" id="nextJs">
            <span className="text-primary font-bold text-xl">Next.js</span> is
            an open source React front-end development web framework created by
            Vercel that enables functionality such as server-side rendering and
            static website generation for React-based web applications.
          </p>
          <p className="content hidden" id="node">
            <span className="text-primary font-bold text-xl">Node.js</span> is
            an open source, cross-platform software based on Google's V8
            interpreter that allows the execution of JavaScript codes outside a
            web browser. The main feature of Node.js is its asynchronous and
            event-driven architecture.
          </p>
          <p className="content hidden" id="tailwind">
            <span className="text-primary font-bold text-xl">Tailwind CSS</span>{" "}
            is a utility-first CSS framework for rapidly building custom user
            interfaces. It is a highly customizable, low-level CSS framework
            that gives you all of the building blocks you need to build bespoke
            designs without any annoying opinionated styles you have to fight to
            override.
          </p>
        </div>
      </div>
    </section>
  );
}
