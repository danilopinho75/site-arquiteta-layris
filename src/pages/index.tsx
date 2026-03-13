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

import EntradaAmbulancia from "@/images/entrada-ambulancia.jpeg";
import EntradaCarro from "@/images/entrada-de-carro.jpeg";
import FachadaUpa from "@/images/fachada-upa.jpeg";
import PracaPublica from "@/images/praca-publica.jpeg";
import Layris from "@/images/layris.jpeg";
import LayrisFotografa from "@/images/layris-fotografa.jpeg";
import AreaChurrasco from "@/images/area-churrasco.jpeg";
import FachadaCasa from "@/images/fachada-casa.jpeg";
import QuartoCasa from "@/images/quarto.jpeg";
import SalaCasa from "@/images/sala.jpeg";
import Flamboyant1 from "@/images/flamboyant-1.jpeg";
import Flamboyant2 from "@/images/flamboyant-2.jpeg";
import Flamboyant3 from "@/images/flamboyant-3.jpeg";
import Sketchup from "@/images/SketchUp.png";
import Autocad from "@/images/autocad_logo.svg";
import Guarita01 from "@/images/guarita-01.jpeg";
import Guarita02 from "@/images/guarita-02.jpeg";
import Guarita03 from "@/images/guarita-03.jpeg";
import Guarita04 from "@/images/guarita-04.jpeg";
import Guarita05 from "@/images/guarita-05.jpeg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { motion } from "motion/react";

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
        <section className="flex flex-col p-10 gap-10 bg-stone-50 text-stone-500 md:p-20 lg:p-32">
          <Tabs
            defaultValue="hospitalar"
            className="w-full flex flex-col gap-10 text-stone-500"
          >
            <div className="flex flex-col gap-5 items-start md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col">
                <span>PORTFÓLIO</span>
                <h2 className="text-4xl md:text-5xl text-stone-800">
                  Projetos Acadêmicos
                </h2>
              </div>
              <TabsList className="opacity-100 bg-stone-50 md:bg-stone-100 flex flex-col w-full items-start my-6 gap-2 md:flex-row md:my-0 md:gap-1">
                <TabsTrigger
                  value="hospitalar"
                  className="text-stone-400 hover:text-orange-600 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Projeto Hospitalar
                </TabsTrigger>
                <TabsTrigger
                  value="residencial"
                  className="text-stone-400 hover:text-orange-600 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Residencial
                </TabsTrigger>
                <TabsTrigger
                  value="flamboyant"
                  className="text-stone-400  hover:text-orange-600 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Parque Flamboyant
                </TabsTrigger>

                <TabsTrigger
                  value="guarita"
                  className="text-stone-400 hover:text-orange-600 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Guarita em Alvenaria Estrutural
                </TabsTrigger>
              </TabsList>
            </div>

            {/* 🔽 hospitalar */}
            <TabsContent
              value="hospitalar"
              className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4 data-[state=active]:duration-500"
            >
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
            <TabsContent
              value="residencial"
              className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4 data-[state=active]:duration-500"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                <div className="flex flex-col max-w-lg gap-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-orange-500">Projeto Residencial</span>
                    <h3 className="text-3xl text-stone-800">
                      Residência Contemporânea Unifamiliar
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5">
                    <p>
                      Projeto para família de um casal com uma filha, partir dos
                      princípios da arquitetura contemporânea, priorizando a
                      integração entre volumetria, materialidade e
                      funcionalidade.
                    </p>

                    <p>
                      A composição da fachada explora o contraste entre volumes
                      puros e elementos horizontais marcantes, com destaque para
                      o uso de revestimento amadeirado, que confere identidade e
                      acolhimento à edificação.
                    </p>

                    <p>
                      Internamente, os ambientes foram projetados para
                      proporcionar conforto, praticidade e qualidade espacial. A
                      área social externa integra espaço gourmet e área de
                      convivência.
                    </p>

                    <p>
                      O projeto de interiores valoriza a materialidade e a
                      composição cromática, utilizando tons neutros como base e
                      incorporando elementos naturais, como madeira e pedra,
                      criando ambientes equilibrados e contemporâneos. O
                      mobiliário foi pensado de forma a reforçar a
                      funcionalidade e a identidade visual de cada espaço.
                    </p>

                    <p>
                      O dormitório infantil foi desenvolvido com linguagem
                      lúdica e acolhedora, incorporando cores suaves, formas
                      orgânicas e elementos que estimulam o conforto e a
                      identidade do usuário.
                    </p>

                    <p>
                      A residência foi projetada buscando equilíbrio entre
                      estética, funcionalidade e conforto, resultando em uma
                      arquitetura contemporânea, elegante e atemporal.
                    </p>
                  </div>
                </div>
                <Carousel className="w-full">
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
            <TabsContent
              value="flamboyant"
              className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4 data-[state=active]:duration-500"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                <div className="flex flex-col max-w-lg gap-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-orange-500">Urbanismo</span>
                    <h3 className="text-3xl text-stone-800">
                      Parque Flamboyant - Maringá-PR
                    </h3>
                  </div>
                  <div className="flex flex-col gap-8">
                    <p>
                      O Parque Flamboyant foi idealizado como um refúgio de paz
                      e segurança, um verdadeiro oásis verde a poucos minutos do
                      centro urbano, projetado para fortalecer o convívio
                      social, o lazer ativo e a interação com a natureza local.
                    </p>

                    <div className="flex flex-col gap-4">
                      <p className="text-md text-orange-600 font-semibold">
                        O paisagismo é para garantir um ambiente totalmente
                        arborizado e com riqueza ecológica:
                      </p>

                      <p>
                        <span className="font-semibold">Beleza Imponente:</span>{" "}
                        Nossas trilhas são ladeadas por árvores nativas
                        majestosas, como os Ipês (Roxo e Rosa), todo caminhos
                        com palmeiras e o imponente Angico-Vermelho, que
                        garantem sombreamento e um espetáculo de cores em cada
                        estação.
                      </p>

                      <p>
                        <span className="font-semibold">Frutos e Fauna:</span>{" "}
                        Integramos estrategicamente frutíferas como a
                        Jabuticabeira e a Goiabeira em áreas de convívio,
                        fornecendo alimento fresco para a fauna local e
                        enriquecendo a experiência dos visitantes.
                      </p>

                      <p>
                        <span className="font-semibold">
                          A Marca do Parque:
                        </span>{" "}
                        O exuberante Flamboyant (Delonix regia) pontua áreas de
                        grandes gramados, atuando como um elemento ornamental
                        que celebra a beleza tropical.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <p className="text-md text-orange-600 font-semibold">
                        Materiais de Alta Performance e Durabilidade:
                      </p>

                      <p>
                        A segurança e a longevidade do mobiliário são
                        prioridades, utilizando apenas materiais resistentes ao
                        tempo e ao uso público intensivo:
                      </p>

                      <p>
                        <span className="font-semibold">
                          Mobiliário de Convivência:
                        </span>{" "}
                        Bancos e decks de contemplação são construídos em
                        Madeira Cumaru ou Composto WPC (Madeira Plástica) de
                        alta densidade, garantindo conforto térmico,
                        durabilidade excepcional e resistência à umidade e
                        cupins.
                      </p>

                      <p>
                        O Playground possui piso de segurança Emborrachado EPDM,
                        cumprindo todas as normas de absorção de impacto. Os
                        brinquedos contam com estrutura metálica em Aço
                        Galvanizado a Fogo ou Inoxidável, imunes à corrosão.
                      </p>

                      <p>
                        <span className="font-semibold">Infraestrutura:</span>{" "}
                        Os caminhos e as bases do quiosque e banheiros são
                        feitos de Concreto Armado de alto desempenho,
                        assegurando estabilidade e baixa necessidade de
                        manutenção.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <p className="text-md text-orange-600 font-semibold">
                        Lazer e diversão:
                      </p>

                      <p>
                        <span className="font-semibold">
                          Atividades na Natureza:
                        </span>{" "}
                        Ampla disponibilidade para trilhas ecológicas e áreas de
                        piquenique/acampamento em espaços designados.
                      </p>

                      <p>
                        <span className="font-semibold">
                          Esporte e Lazer Ativo:
                        </span>{" "}
                        Campo gramado para jogos de futebol, moderno playground
                        para as crianças e espaço pet dedicado para o convívio
                        dos animais.
                      </p>

                      <p>
                        <span className="font-semibold">Comodidade:</span> Nosso
                        quiosque central e os banheiros públicos garantem o
                        suporte necessário para atender confortavelmente toda a
                        população.
                      </p>
                    </div>
                  </div>
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

            {/* 🔽 Guarita */}
            <TabsContent
              value="guarita"
              className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4 data-[state=active]:duration-500"
            >
              <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                <div>
                  <Carousel className="w-full lg:max-w-lg">
                    <CarouselContent>
                      <CarouselItem>
                        <Image
                          src={Guarita01}
                          alt=""
                          className="w-full h-auto rounded-lg"
                        />
                      </CarouselItem>

                      <CarouselItem>
                        <Image
                          src={Guarita02}
                          alt=""
                          className="w-full h-auto rounded-lg"
                        />
                      </CarouselItem>

                      <CarouselItem>
                        <Image
                          src={Guarita03}
                          alt=""
                          className="w-full h-auto rounded-lg"
                        />
                      </CarouselItem>

                      <CarouselItem>
                        <Image
                          src={Guarita04}
                          alt=""
                          className="w-full h-auto rounded-lg"
                        />
                      </CarouselItem>

                      <CarouselItem>
                        <Image
                          src={Guarita05}
                          alt=""
                          className="w-full h-auto rounded-lg"
                        />
                      </CarouselItem>
                    </CarouselContent>

                    <CarouselPrevious className="bg-white text-stone-800 hover:bg-stone-100 border border-stone-200" />
                    <CarouselNext className=" bg-white text-stone-800 hover:bg-stone-100 border border-stone-200" />
                  </Carousel>
                </div>

                <div className="flex flex-col gap-8 max-w-xl">
                  <div className="flex flex-col gap-4 max-w-xl">
                    <LabelItem text="Guarita em Alvenaria Estrutural" />
                    <h3 className="text-3xl text-orange-600 font-semibold border-b-2 border-b-orange-200 w-fit">
                      Características Gerais:
                    </h3>

                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            Área total da Guarita
                          </TableCell>
                          <TableCell>7,56 m²</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="font-medium">
                            Sanitário acessível
                          </TableCell>
                          <TableCell>3,60 m²</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="font-medium">
                            Área total construída
                          </TableCell>
                          <TableCell>27 m²</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="font-medium">
                            Pé-direito livre
                          </TableCell>
                          <TableCell>3,00 m</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="font-medium">
                            Sistema construtivo
                          </TableCell>
                          <TableCell>
                            Alvenaria estrutural com blocos de concreto
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="font-medium">
                            Tipo de bloco
                          </TableCell>
                          <TableCell>Família 14x39 cm</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="font-medium">
                            Fornecedor referência
                          </TableCell>
                          <TableCell>Tatu Pré-Moldados</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div>
                    <h3 className="text-3xl text-orange-600 font-semibold border-b-2 border-b-orange-200 w-fit mb-3">
                      Diferenciais do Sistema:
                    </h3>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            Alta resistência e estabilidade estrutural
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Agilidade na execução da obra</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>
                            Redução de desperdício de materiais
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>
                            Compatibilidade com instalações hidráulicas e
                            elétricas
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="whitespace-normal break-words">
                            Excelente custo-benefício para construções de
                            pequeno porte como guaritas, casas técnicas e áreas
                            administrativas
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

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
