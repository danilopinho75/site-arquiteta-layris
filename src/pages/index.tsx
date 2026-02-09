import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Bot, PencilLine, Rotate3d } from "lucide-react";
import { CardTool } from "@/components/cardTool";
import { LabelItem } from "@/components/labelItem";
import EntradaAmbulancia from "@/images/entrada-ambulancia.jpeg";
import EntradaCarro from "@/images/entrada-de-carro.jpeg";
import FachadaUpa from "@/images/fachada-upa.jpeg";
import PracaPublica from "@/images/praca-publica.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <section className="flex flex-col h-screen justify-center bg-stone-800 px-32 text-orange-50">
        <div className="flex flex-col gap-5 max-w-xl">
          <span className="text-lg text-orange-200">
            ARQUITETURA & URBANISMO
          </span>
          <h1 className="text-8xl font-light text-stone-50">
            Layris
            <br />
            <span className="font-light italic">Gorzoni</span>
          </h1>
          <p className="max-w-md">
            Estudante do 5º ano de Arquitetura e Urbanismo — Uningá, Maringá-PR.
            Apaixonada por design de fachadas, interiores e paisagismo.
          </p>
          <Link
            href="/#sobre"
            className="text-stone-400 font-semibold pb-1 border-b-2 border-stone-400 w-max"
          >
            CONHEÇA MEU TRABALHO
          </Link>
        </div>
      </section>

      <section className="flex flex-row justify-between bg-stone-50 p-32 text-stone-500">
        <div>
          <span className="text-lg">SOBRE</span>
          <h2 className="text-4xl font-light text-stone-800">
            Trajetória Acadêmica
          </h2>
        </div>

        <div className="flex flex-col gap-10 max-w-xl">
          <p>
            Iniciou a graduação na Universidade Unilago, em São José do Rio
            Preto-SP, onde cursou do 1º ao 3º ano. Durante o 3º ano, realizou
            parte dos estudos na Unoesc, em Chapecó-SC.
          </p>

          <p>
            No 4º ano, deu continuidade à formação na FEITEP, em Maringá-PR,
            transferindo-se no segundo semestre para a Uningá, instituição onde
            atualmente conclui o curso.
          </p>

          <span className="w-full h-px bg-stone-300"></span>

          <div className="flex flex-col gap-3">
            <h4 className="text-2xl text-stone-800">Áreas de interesse</h4>
            <p>
              Design de fachadas, design de interiores e paisagismo, com
              interesse no desenvolvimento de mobiliário, explorando soluções
              funcionais, estéticas e integradas ao contexto arquitetônico.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col p-32 bg-orange-50 text-stone-600 items-center gap-12">
        <div className="flex flex-col gap-3 items-center">
          <span className="text-orange-500">FERRAMENTAS</span>
          <h2 className="text-5xl text-stone-800">Software & Habilidades</h2>
        </div>

        <div className="flex flex-row gap-10">
          <CardTool
            icon={<PencilLine size={28} />}
            title="AutoCAD"
            description="Desenho técnico e detalhamento de projetos exclusivos"
          />

          <CardTool
            icon={<Rotate3d size={28} />}
            title="SketchUp"
            description="Modelagem 3D e visualização de projetos arquitetônicos"
          />

          <CardTool
            icon={<Bot size={28} />}
            title="Inteligência Artificial"
            description="Ferramanetas de IA aplicadas ao processo de projeto"
          />
        </div>
      </section>

      <section className="flex flex-col gap-10 bg-stone-50 p-32 text-stone-500">
        <div>
          <span>PORTFÓLIO</span>
          <h2 className="text-5xl text-stone-800">Projetos Acadêmicos</h2>
        </div>

        <div className="flex flex-row justify-between">
          <div>
            <Carousel className="w-full max-w-lg">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src={FachadaUpa}
                    alt="Fachada do projeto UPA 24h"
                    className="w-full h-auto rounded-lg"
                  />
                </CarouselItem>

                <CarouselItem>
                  <Image
                    src={PracaPublica}
                    alt="Praça pública do projeto UPA 24h"
                    className="w-full h-auto rounded-lg"
                  />
                </CarouselItem>

                <CarouselItem>
                  <Image
                    src={EntradaAmbulancia}
                    alt="Entrada de ambulância do projeto UPA 24h"
                    className="w-full h-auto rounded-lg"
                  />
                </CarouselItem>

                <CarouselItem>
                  <Image
                    src={EntradaCarro}
                    alt="Entrada de carro do projeto UPA 24h"
                    className="w-full h-auto rounded-lg"
                  />
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious
                className="
                bg-white text-stone-800 
                hover:bg-stone-100
                border border-stone-200
              "
              />
              <CarouselNext
              className="
                bg-white text-stone-800 
                hover:bg-stone-100
                border border-stone-200
              "
              />
            </Carousel>
          </div>

          <div className="flex flex-col gap-10 max-w-xl">
            <span className="text-orange-500">PROJETO HOSPITALAR</span>
            <h4 className="text-3xl text-stone-800">
              UPA 24h - Pronto Atendimento
            </h4>
            <p>
              Unidade de Pronto Atendimento com área construída de{" "}
              <b>3.990 m²</b>, localizada na Avenida Mário Clappier Urbanatti
              Doutor, em Maringá – PR. A edificação está distribuída em cinco
              pavilhões funcionais.
            </p>

            <p>
              O projeto aplica o conceito de <b>arquitetura biofílica</b>,
              integrando elementos da natureza ao ambiente construído para
              promover bem-estar físico e mental de pacientes e colaboradores.
            </p>

            <p>
              A paleta cromática é composta por tons de cinza, branco, marrom e
              preto, com o uso de <b>madeira Cumaru</b>, metalon preto e
              vegetação integrada, criando uma atmosfera acolhedora e
              humanizada.
            </p>

            <span className="w-full h-px bg-stone-300"></span>

            <div className="flex flex-row gap-20">
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl">3.990 m²</h4>
                <p className="text-xs">ÁREA CONSTRUÍDA</p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-3xl">5</h4>
                <p className="text-xs">PAVILHÕES</p>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <LabelItem text="Biofilia" />
              <LabelItem text="Madeira Cumaru" />
              <LabelItem text="Ventilação Natural" />
              <LabelItem text="Acessibilidade" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
