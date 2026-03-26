import Head from "next/head";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  ArrowUpRight,
  Instagram,
  Mail,
  MessageCircle,
} from "lucide-react";

import { CardTool } from "@/components/cardTool";
import { LabelItem } from "@/components/labelItem";

import Layris from "@/images/layris.jpeg";
import LayrisFotografa from "@/images/layris-fotografa.jpeg";
import Sketchup from "@/images/SketchUp.png";
import Autocad from "@/images/autocad_logo.svg";

import { PortfolioSection } from "@/components/PortfolioSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Layris Gorzoni</title>

        <meta
          name="description"
          content="Estudante do 5º ano de Arquitetura e Urbanismo - Layris Gorzoni"
        />

        <meta property="og:title" content="Layris Gorzoni" />
        <meta
          property="og:description"
          content="Estudante do 5º ano de Arquitetura e Urbanismo"
        />
        <meta property="og:type" content="website" />
        <meta property="or:url" content="https://www.layrisgorzoni.com.br" />

        <meta
          property="og:image"
          content="https://www.layrisgorzoni.com.br/imagens/layris-gorzoni.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Layris Gorzoni" />
        <meta
          name="twitter:description"
          content="Estudante de Arquitetura e Urbanismo"
        />

        <meta
          name="twitter:image"
          content="https://www.layrisgorzoni.com.br/imagens/layris-gorzoni.jpeg"
        />
      </Head>
      <main className="bg-stone-50 p-6 min-h-screen">
        <section
          style={{ backgroundImage: `url(${LayrisFotografa.src})` }}
          className="flex flex-col md:h-[calc(100vh-3rem)] justify-center px-10 py-30 text-orange-50 bg-cover xl:bg-position-[center_top_-18rem] bg-no-repeat overflow-hidden relative rounded-2xl lg:px-32"
        >
          <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black overflow-hidden" />

          <div className="flex z-1 flex-col gap-5 max-w-xl">
            <span className="text-lg text-orange-200">
              ARQUITETURA & URBANISMO
            </span>
            <h1 className="text-7xl md:text-8xl font-light text-stone-50">
              Layris
              <br />
              <span className="font-light italic">Gorzoni</span>
            </h1>
            <p className="max-w-md">
              Estudante do 5º ano de Arquitetura e Urbanismo — Uningá,
              Maringá-PR. Apaixonada por design de fachadas, interiores e
              paisagismo.
            </p>
            <Link
              href="/#sobre"
              className="flex flex-row gap-2 items-center text-sm md:text-base text-white font-semibold bg-orange-500 px-6 py-4 rounded-lg w-max hover:bg-orange-600 transition-all duration-400 hover:-translate-y-1"
            >
              <ArrowUpRight size={18} className="animate-pulse" />
              CONHEÇA MEU TRABALHO
            </Link>
          </div>
        </section>

        <section
          id="sobre"
          className="flex flex-col gap-10 bg-stone-50 px-5 py-20 text-stone-500 sm:px-10 lg:flex-row md:p-20 lg:p-32 lg:justify-between"
        >
          <div>
            <span className="text-lg">SOBRE MIM</span>
            <h2 className="text-4xl font-light text-stone-800">
              Trajetória Acadêmica
            </h2>

            <div className="flex flex-col gap-10 max-w-xl mt-10">
              <p>
                Iniciou a graduação na Universidade Unilago, em São José do Rio
                Preto-SP, onde cursou do 1º ao 3º ano. Durante o 3º ano,
                realizou parte dos estudos na Unoesc, em Chapecó-SC.
              </p>

              <p>
                No 4º ano, deu continuidade à formação na FEITEP, em Maringá-PR,
                transferindo-se no segundo semestre para a Uningá, instituição
                onde atualmente conclui o curso.
              </p>

              <span className="w-full h-px bg-stone-300"></span>

              <div className="flex flex-col gap-3">
                <h4 className="text-2xl text-stone-800">Áreas de interesse</h4>
                <p>
                  Design de fachadas, design de interiores e paisagismo, com
                  interesse no desenvolvimento de mobiliário, explorando
                  soluções funcionais, estéticas e integradas ao contexto
                  arquitetônico.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Layris.src})` }}
            className="w-full h-96 rounded-lg bg-cover bg-center bg-no-repeat
            hover:scale-105 hover:drop-shadow-2xl hover:border-4 hover:border-white transition-all duration-500 sm:h-150 lg:max-w-md lg:h-auto lg:mt-0"
          >
            <div className="px-4 py-2 bg-orange-100 rounded-2xl relative top-3 left-3 w-fit border-2 border-orange-500 shadow-2xl shadow-orange-500">
              <p className="text-orange-600 font-semibold text-xs animate-pulse">
                Layris Gorzoni
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col p-10 bg-orange-50 text-stone-600 items-center gap-12 rounded-2xl md:p-20 lg:p-32">
          <div className="flex flex-col gap-3 items-center">
            <span className="text-orange-500">FERRAMENTAS</span>
            <h2 className="text-5xl text-stone-800 text-center leading-14">
              Software & Habilidades
            </h2>
          </div>

          <div className="flex flex-col gap-5 md:gap-10 md:flex-row">
            <CardTool
              icon={
                <Image
                  src={Autocad.src}
                  width={28}
                  height={28}
                  alt="Logo do AutoCAD"
                />
              }
              title="AutoCAD"
              description="Desenho técnico e detalhamento de projetos exclusivos"
            />

            <CardTool
              icon={
                <Image
                  src={Sketchup.src}
                  width={28}
                  height={28}
                  alt="Logo do SketchUp"
                />
              }
              title="SketchUp"
              description="Modelagem 3D e visualização de projetos arquitetônicos"
              delay={0.3}
            />

            <CardTool
              icon={<Bot size={28} />}
              title="Inteligência Artificial"
              description="Ferramanetas de IA aplicadas ao processo de projeto"
              delay={0.6}
            />
          </div>
        </section>

        {/* Portfólio */}
        <PortfolioSection />

        {/* Serviços */}
        <section className="flex flex-col items-center p-10 gap-10 bg-orange-100 border border-orange-300 text-stone-500 rounded-2xl md:p-20">
          <h2 className="text-5xl text-stone-800 text-center leading-14">
            Serviços
          </h2>
          <div className="flex flex-row flex-wrap items-center justify-center gap-5 md:gap-10 lg:max-w-4xl">
            <LabelItem text="Projeto Arquitetônico" />
            <LabelItem text="Residencial" />
            <LabelItem text="Design de Interiores" />
            <LabelItem text="Projeto de Fachadas" />
            <LabelItem text="Estudos Volumétricos e Conceituais" />
            <LabelItem text="Paisagismo" />
            <LabelItem text="Modelagem 3D e Renderização por IA" />
          </div>
        </section>

        <section className="flex flex-col items-center p-10 gap-10 text-stone-500 md:p-20 lg:p-32">
          <h2 className="text-5xl text-stone-800 text-center leading-14">
            Conceito
          </h2>
          <div className="flex flex-col gap-5 max-w-3xl">
            <p className="text-center lg:text-xl italic">
              A arquitetura é entendida como um instrumento capaz de transformar
              a forma como as pessoas vivem, sentem e se relacionam com o
              espaço.
            </p>

            <p className="text-center lg:text-xl italic">
              Cada projeto é desenvolvido com atenção aos detalhes, buscando
              soluções contemporâneas, elegantes e funcionais.
            </p>
          </div>
        </section>

        <section className="flex flex-col w-full items-start md:items-center p-10 gap-5 md:gap-10 text-white bg-orange-600 md:p-20 lg:p-32 rounded-2xl">
          <h2 className="text-5xl text-center leading-14">Contato</h2>

          <div className="flex flex-col md:flex-row gap-5 md:gap-10 md:items-center justify-center font-semibold">
            <MessageCircle
              size={200}
              className="text-orange-500 opacity-20 animate-pulse absolute right-20"
            />

            <Link
              href="https://www.instagram.com/layrisgorzone/"
              target="_blank"
              className="z-1 bg-orange-700 px-6 py-4 rounded-2xl flex flex-row items-center border border-orange-800 gap-2 hover:-translate-y-1.5 transition-all duration-500"
            >
              <Instagram
                size={20}
                className="hover:text-orange-400 transition-colors duration-500"
              />
              <span className="hover:text-orange-400 transition-colors duration-500">
                @layrisgorzone
              </span>
            </Link>

            <Link
              href="https://wa.me/17981386974"
              target="_blank"
              className="z-1 bg-orange-700 px-6 py-4 rounded-2xl flex flex-row items-center border border-orange-800 gap-2 hover:-translate-y-1.5 transition-all duration-500"
            >
              <MessageCircle
                size={20}
                className="hover:text-green-500 transition-colors duration-500"
              />
              <span className="hover:text-green-500 transition-colors duration-500">
                Whatsapp
              </span>
            </Link>

            <Link
              href="mailto:layris-gorzone@hotmail.com"
              target="_blank"
              className="z-1 bg-orange-700 px-6 py-4 rounded-2xl flex flex-row items-center border border-orange-800 gap-2 hover:-translate-y-1.5 transition-all duration-500"
            >
              <Mail
                size={20}
                className="hover:text-blue-500 transition-colors duration-500"
              />
              <span className="hover:text-blue-500 transition-colors duration-500">
                layris-gorzone@hotmail.com
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
