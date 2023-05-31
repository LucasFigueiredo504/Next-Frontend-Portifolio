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
      <h1 className="text-center mb-28 text-4xl font-bold text-primary">
        Habilidades
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
        <div className="w-1/2 text-lg">
          <p className="content" id="placeholder">
            Clique em uma{" "}
            <span className="text-primary font-bold">tecnologia</span> para
            saber mais.
          </p>
          <p className="content hidden" id="html">
            <span className="text-primary font-bold">HTML</span> é o componente
            base da web. Ele permite a construção de websites e a inserção de
            novos conteúdos, como imagens e vídeos, por meio dos hipertextos.
          </p>
          <p className="content hidden" id="css">
            <span className="text-primary font-bold">CSS</span> ajuda a
            estilizar, alinhar, remover e trabalhar no espaço entre elementos de
            uma página HTML.
          </p>
          <p className="content hidden" id="javascript">
            <span className="text-primary font-bold">JavaScript</span> é uma
            linguagem de programação criada, a princípio, para ser executada em
            navegadores e manipular comportamentos de páginas web.
          </p>
          <p className="content hidden" id="react">
            <span className="text-primary font-bold">React</span> é uma
            biblioteca criada para construir telas de forma declarativa. Ou
            seja: o React cria aplicações web para serem executadas em
            navegadores, sejam eles para desktop, mobile ou qualquer outro
            dispositivo.
          </p>
          <p className="content hidden" id="sass">
            <span className="text-primary font-bold">SASS</span> é uma linguagem
            de extensão do CSS, A sua ideia é adicionar recursos especiais como
            variáveis, mixins, funções dentre outras.
          </p>
          <p className="content hidden" id="bootstrap">
            <span className="text-primary font-bold">Bootstrap</span> é um
            framework front-end que fornece estruturas de CSS para a criação de
            sites e aplicações responsivas de forma rápida e simples.
          </p>
          <p className="content hidden" id="git">
            <span className="text-primary font-bold">GitHub</span> é o maior
            repositório de dados compartilhado do mundo, com 28 milhões de
            usuários atualmente. É uma plataforma majoritariamente usada por
            desenvolvedores, pois permite uma hospedagem prática de código-fonte
            e arquivos em nuvem.
          </p>
          <p className="content hidden" id="typescript">
            <span className="text-primary font-bold">TypeScript</span> é uma
            linguagem de programação de código aberto desenvolvida pela
            Microsoft. É um superconjunto sintático estrito de JavaScript e
            adiciona tipagem estática opcional à linguagem.
          </p>
          <p className="content hidden" id="reactNative">
            <span className="text-primary font-bold">React Native</span> é uma
            biblioteca Javascript criada pelo Facebook. É usada para desenvolver
            aplicativos para os sistemas Android e iOS de forma nativa.
          </p>
          <p className="content hidden" id="nextJs">
            <span className="text-primary font-bold">Next.js</span> é uma
            estrutura da web de desenvolvimento front-end React de código aberto
            criada por Vercel que permite funcionalidades como renderização do
            lado do servidor e geração de sites estáticos para aplicativos da
            web baseados em React.
          </p>
          <p className="content hidden" id="node">
            <span className="text-primary font-bold">Node.js</span> é um
            software de código aberto, multiplataforma, baseado no interpretador
            V8 do Google e que permite a execução de códigos JavaScript fora de
            um navegador web. A principal característica do Node.js é sua
            arquitetura assíncrona e orientada por eventos.
          </p>
        </div>
      </div>
    </section>
  );
}
