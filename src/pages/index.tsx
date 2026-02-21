import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Bot, PencilLine, Rotate3d, ArrowUpRight } from "lucide-react";

import { CardTool } from "@/components/cardTool";
import { LabelItem } from "@/components/labelItem";

import EntradaAmbulancia from "@/images/entrada-ambulancia.jpeg";
import EntradaCarro from "@/images/entrada-de-carro.jpeg";
import FachadaUpa from "@/images/fachada-upa.jpeg";
import PracaPublica from "@/images/praca-publica.jpeg";
import Layris from "@/images/layris.jpeg";
import AreaChurrasco from "@/images/area-churrasco.jpeg";
import FachadaCasa from "@/images/fachada-casa.jpeg";
import QuartoCasa from "@/images/quarto.jpeg";
import SalaCasa from "@/images/sala.jpeg";
import Flamboyant1 from "@/images/flamboyant-1.jpeg";
import Flamboyant2 from "@/images/flamboyant-2.jpeg";
import Flamboyant3 from "@/images/flamboyant-3.jpeg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <main className="bg-stone-50 p-6 min-h-screen">
        <section
          style={{ backgroundImage: `url(${EntradaAmbulancia.src})` }}
          className="flex flex-col md:h-[calc(100vh-3rem)] justify-center px-10 py-30 text-orange-50 bg-cover bg-left sm:bg-center bg-no-repeat overflow-hidden relative rounded-2xl lg:px-32"
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
              className="flex flex-row gap-2 items-center text-white font-semibold bg-orange-500 px-6 py-4 rounded-lg w-max hover:bg-orange-600 transition-all duration-400 hover:-translate-y-1"
            >
              <ArrowUpRight size={18} className="animate-pulse" />
              CONHEÇA MEU TRABALHO
            </Link>
          </div>
        </section>

        <section
          id="sobre"
          className="flex flex-col gap-10 bg-stone-50 px-10 py-20 text-stone-500 lg:flex-row md:p-20 lg:p-32 lg:justify-between"
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
          />
        </section>

        <section className="flex flex-col p-10 bg-orange-50 text-stone-600 items-center gap-12 rounded-2xl md:p-20 lg:p-32">
          <div className="flex flex-col gap-3 items-center">
            <span className="text-orange-500">FERRAMENTAS</span>
            <h2 className="text-5xl text-stone-800 text-center leading-14">Software & Habilidades</h2>
          </div>

          <div className="flex flex-col gap-5 md:gap-10 md:flex-row">
            <CardTool
              icon={<PencilLine size={28} />}
              title="AutoCAD"
              description="Desenho técnico e detalhamento de projetos exclusivos"
            />

            <CardTool
              icon={<Rotate3d size={28} />}
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
        <section className="flex flex-col p-10 gap-10 bg-stone-50 text-stone-500 md:p-20 lg:p-32">
          <Tabs
            defaultValue="hospitalar"
            className="w-full flex flex-col gap-10 text-stone-500"
          >
            <div className="flex flex-col gap-5 items-start md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col">
                <span>PORTFÓLIO</span>
                <h2 className="text-4xl md:text-5xl text-stone-800">Projetos Acadêmicos</h2>
              </div>
              <TabsList className="opacity-100 bg-stone-50 md:bg-stone-100 flex flex-col w-full items-start my-6 gap-2 md:flex-row md:my-0 md:gap-1">
                <TabsTrigger
                  value="hospitalar"
                  className="text-stone-400 hover:text-orange-600 data-[state=active]:bg-orange-600"
                >
                  Projeto Hospitalar
                </TabsTrigger>
                <TabsTrigger
                  value="residencial"
                  className="text-stone-400 hover:text-orange-600 data-[state=active]:bg-orange-600"
                >
                  Residencial
                </TabsTrigger>
                <TabsTrigger
                  value="flamboyant"
                  className="text-stone-400  hover:text-orange-600 data-[state=active]:bg-orange-600"
                >
                  Parque Flamboyant
                </TabsTrigger>
              </TabsList>
            </div>

            {/* 🔽 hospitalar */}
            <TabsContent value="hospitalar" className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4 data-[state=active]:duration-500">
              <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                <div>
                  <Carousel className="w-full lg:max-w-lg">
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

                    <CarouselPrevious className="bg-white text-stone-800 hover:bg-stone-100 border border-stone-200" />
                    <CarouselNext className=" bg-white text-stone-800 hover:bg-stone-100 border border-stone-200" />
                  </Carousel>
                </div>

                <div className="flex flex-col gap-10 max-w-xl">
                  <span className="text-orange-500">PROJETO HOSPITALAR</span>
                  <h4 className="text-3xl text-stone-800">
                    UPA 24h - Pronto Atendimento
                  </h4>
                  <p>
                    Unidade de Pronto Atendimento com área construída de{" "}
                    <b>3.990 m²</b>, localizada na Avenida Mário Clappier
                    Urbanatti Doutor, em Maringá – PR. A edificação está
                    distribuída em cinco pavilhões funcionais.
                  </p>

                  <p>
                    O projeto aplica o conceito de <b>arquitetura biofílica</b>,
                    integrando elementos da natureza ao ambiente construído para
                    promover bem-estar físico e mental de pacientes e
                    colaboradores.
                  </p>

                  <p>
                    A paleta cromática é composta por tons de cinza, branco,
                    marrom e preto, com o uso de <b>madeira Cumaru</b>, metalon
                    preto e vegetação integrada, criando uma atmosfera
                    acolhedora e humanizada.
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

                  <div className="flex flex-row flex-wrap gap-2">
                    <LabelItem text="Biofilia" />
                    <LabelItem text="Madeira Cumaru" delay={0.2} />
                    <LabelItem text="Ventilação Natural" delay={0.4} />
                    <LabelItem text="Acessibilidade" delay={0.6} />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* 🔽 CONTEÚDO 2 */}
            <TabsContent value="residencial" className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4 data-[state=active]:duration-500">
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between"> 
                <div className="flex flex-col">
                  <span className="text-orange-500">Casa</span>
                  <h3 className="text-3xl text-stone-800">Projeto Residencial</h3>
                </div>               
                <Carousel className="w-full max-w-2xl">
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src={FachadaCasa}
                        alt="Fachada do projeto Casa"
                        className="w-full h-auto rounded-lg"
                      />
                    </CarouselItem>

                    <CarouselItem>
                      <Image
                        src={QuartoCasa}
                        alt="Quarto do projeto Casa"
                        className="w-full h-auto rounded-lg"
                      />
                    </CarouselItem>

                    <CarouselItem>
                      <Image
                        src={SalaCasa}
                        alt="Sala do projeto Casa"
                        className="w-full h-auto rounded-lg"
                      />
                    </CarouselItem>

                    <CarouselItem>
                      <Image
                        src={AreaChurrasco}
                        alt="Área de churrasco do projeto Residencial"
                        className="w-full h-auto rounded-lg"
                      />
                    </CarouselItem>
                  </CarouselContent>

                  <CarouselPrevious className="bg-white text-stone-800 hover:bg-stone-100 border border-stone-200" />
                  <CarouselNext className=" bg-white text-stone-800 hover:bg-stone-100 border border-stone-200" />
                </Carousel>
              </div>
            </TabsContent>

            {/* 🔽 CONTEÚDO 3 */}
            <TabsContent value="flamboyant" className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4 data-[state=active]:duration-500">
              <div className="flex flex-col gap-10 lg:items-center">
                <div className="flex flex-col gap-3 lg:items-center">
                  <span className="text-orange-500">Parque Flamboyant</span>
                  <h3 className="text-3xl text-stone-800">Parque Flamboyant</h3>
                </div>
                {/* conteúdo flamboyant */}
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src={Flamboyant1}
                        alt=""
                        className="w-full h-auto rounded-lg"
                      />
                    </CarouselItem>

                    <CarouselItem>
                      <Image
                        src={Flamboyant2}
                        alt=""
                        className="w-full h-auto rounded-lg"
                      />
                    </CarouselItem>

                    <CarouselItem>
                      <Image
                        src={Flamboyant3}
                        alt=""
                        className="w-full h-auto rounded-lg"
                      />
                    </CarouselItem>
                  </CarouselContent>

                  <CarouselPrevious className="bg-white text-stone-800 hover:bg-stone-100 border border-stone-200" />
                  <CarouselNext className=" bg-white text-stone-800 hover:bg-stone-100 border border-stone-200" />
                </Carousel>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </>
  );
}
