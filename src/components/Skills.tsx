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
      <h1 className="text-center mb-28 text-5xl font-bold text-primary">
        Habilidades
      </h1>
      <div className="flex gap-7 sm:container sm:mx-auto">
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
                      className="w-28 h-28"
                    ></Image>
                  }
                </div>
              </button>
            );
          })}
        </div>
        {/**right */}
        <div className="w-1/2 text-xl">
          <p className="content" id="placeholder">
            Clique em uma tecnologia para saber mais.
          </p>
          <p className="content hidden" id="html">
            HTML é o componente base da web. Ele permite a construção de
            websites e a inserção de novos conteúdos, como imagens e vídeos, por
            meio dos hipertextos.
          </p>
          <p className="content hidden" id="css">
            O CSS ajuda a estilizar, alinhar, remover e trabalhar no espaço
            entre elementos de uma página HTML.
          </p>
          <p className="content hidden" id="javascript">
            JavaScript é uma linguagem de programação criada, a princípio, para
            ser executada em navegadores e manipular comportamentos de páginas
            web.
          </p>
          <p className="content hidden" id="react">
            React é uma biblioteca criada para construir telas de forma
            declarativa. Ou seja: o React cria aplicações web para serem
            executadas em navegadores, sejam eles para desktop, mobile ou
            qualquer outro dispositivo.
          </p>
          <p className="content hidden" id="sass">
            O SASS é uma linguagem de extensão do CSS, A sua ideia é adicionar
            recursos especiais como variáveis, mixins, funções dentre outras.
          </p>
          <p className="content hidden" id="bootstrap">
            Bootstrap é um framework front-end que fornece estruturas de CSS
            para a criação de sites e aplicações responsivas de forma rápida e
            simples.
          </p>
          <p className="content hidden" id="git">
            O GitHub é o maior repositório de dados compartilhado do mundo, com
            28 milhões de usuários atualmente. É uma plataforma majoritariamente
            usada por desenvolvedores, pois permite uma hospedagem prática de
            código-fonte e arquivos em nuvem.
          </p>
        </div>
      </div>
    </section>
  );
}
