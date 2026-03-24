"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import { LabelItem } from "@/components/labelItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import EntradaAmbulancia from "@/images/entrada-ambulancia.jpeg";
import EntradaCarro from "@/images/entrada-de-carro.jpeg";
import FachadaUpa from "@/images/fachada-upa.jpeg";
import PracaPublica from "@/images/praca-publica.jpeg";
import AreaChurrasco from "@/images/area-churrasco.jpeg";
import FachadaCasa from "@/images/fachada-casa.jpeg";
import QuartoCasa from "@/images/quarto.jpeg";
import SalaCasa from "@/images/sala.jpeg";
import Flamboyant1 from "@/images/flamboyant-1.jpeg";
import Flamboyant2 from "@/images/flamboyant-2.jpeg";
import Flamboyant3 from "@/images/flamboyant-3.jpeg";
import Guarita01 from "@/images/guarita-01.jpeg";
import Guarita02 from "@/images/guarita-02.jpeg";
import Guarita03 from "@/images/guarita-03.jpeg";
import Guarita04 from "@/images/guarita-04.jpeg";
import Guarita05 from "@/images/guarita-05.jpeg";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectId = "hospitalar" | "residencial" | "flamboyant" | "guarita";

interface Project {
  id: ProjectId;
  tag: string;
  title: string;
  thumb: StaticImageData;
  images: { src: StaticImageData; alt: string }[];
  detail: React.ReactNode;
}

// ─── Project data ─────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: "hospitalar",
    tag: "Projeto Hospitalar",
    title: "UPA 24h — Pronto Atendimento",
    thumb: FachadaUpa,
    images: [
      { src: FachadaUpa, alt: "Fachada do projeto UPA 24h" },
      { src: PracaPublica, alt: "Praça pública do projeto UPA 24h" },
      { src: EntradaAmbulancia, alt: "Entrada de ambulância do projeto UPA 24h" },
      { src: EntradaCarro, alt: "Entrada de carro do projeto UPA 24h" },
    ],
    detail: (
      <div className="flex flex-col gap-8 max-w-xl">
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
          vegetação integrada, criando uma atmosfera acolhedora e humanizada.
        </p>

        <span className="w-full h-px bg-stone-300" />

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
    ),
  },
  {
    id: "residencial",
    tag: "Projeto Residencial",
    title: "Residência Contemporânea Unifamiliar",
    thumb: FachadaCasa,
    images: [
      { src: FachadaCasa, alt: "Fachada do projeto Casa" },
      { src: QuartoCasa, alt: "Quarto do projeto Casa" },
      { src: SalaCasa, alt: "Sala do projeto Casa" },
      { src: AreaChurrasco, alt: "Área de churrasco do projeto Residencial" },
    ],
    detail: (
      <div className="flex flex-col gap-5 max-w-xl">
        <p>
          Projeto para família de um casal com uma filha, a partir dos
          princípios da arquitetura contemporânea, priorizando a integração
          entre volumetria, materialidade e funcionalidade.
        </p>
        <p>
          A composição da fachada explora o contraste entre volumes puros e
          elementos horizontais marcantes, com destaque para o uso de
          revestimento amadeirado.
        </p>
        <p>
          O projeto de interiores valoriza a materialidade e a composição
          cromática, utilizando tons neutros como base e incorporando
          elementos naturais, como madeira e pedra.
        </p>
        <p>
          A residência foi projetada buscando equilíbrio entre estética,
          funcionalidade e conforto, resultando em uma arquitetura
          contemporânea, elegante e atemporal.
        </p>
      </div>
    ),
  },
  {
    id: "flamboyant",
    tag: "Urbanismo",
    title: "Parque Flamboyant — Maringá-PR",
    thumb: Flamboyant1,
    images: [
      { src: Flamboyant1, alt: "Parque Flamboyant vista 1" },
      { src: Flamboyant2, alt: "Parque Flamboyant vista 2" },
      { src: Flamboyant3, alt: "Parque Flamboyant vista 3" },
    ],
    detail: (
      <div className="flex flex-col gap-6 max-w-xl">
        <p>
          O Parque Flamboyant foi idealizado como um refúgio de paz e
          segurança, um verdadeiro oásis verde a poucos minutos do centro
          urbano, projetado para fortalecer o convívio social, o lazer ativo
          e a interação com a natureza local.
        </p>

        <div className="flex flex-col gap-3">
          <p className="text-sm text-orange-600 font-semibold">Paisagismo:</p>
          <p>
            <span className="font-semibold">Beleza Imponente:</span> Trilhas
            ladeadas por Ipês (Roxo e Rosa), palmeiras e o imponente
            Angico-Vermelho, garantindo sombreamento e um espetáculo de cores
            em cada estação.
          </p>
          <p>
            <span className="font-semibold">Frutos e Fauna:</span> Frutíferas
            como a Jabuticabeira e a Goiabeira integradas estrategicamente em
            áreas de convívio.
          </p>
          <p>
            <span className="font-semibold">A Marca do Parque:</span> O
            exuberante Flamboyant (<em>Delonix regia</em>) pontua áreas de
            grandes gramados como elemento ornamental tropical.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm text-orange-600 font-semibold">Lazer e diversão:</p>
          <p>
            Trilhas ecológicas, campo de futebol, playground com piso EPDM,
            espaço pet, quiosque central e banheiros públicos.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "guarita",
    tag: "Alvenaria Estrutural",
    title: "Guarita em Alvenaria Estrutural",
    thumb: Guarita01,
    images: [
      { src: Guarita01, alt: "Guarita vista 1" },
      { src: Guarita02, alt: "Guarita vista 2" },
      { src: Guarita03, alt: "Guarita vista 3" },
      { src: Guarita04, alt: "Guarita vista 4" },
      { src: Guarita05, alt: "Guarita vista 5" },
    ],
    detail: (
      <div className="flex flex-col gap-8 max-w-xl">
        <div className="flex flex-col gap-4">
          <LabelItem text="Guarita em Alvenaria Estrutural" textClassName="font-semibold" />
          <h3 className="text-2xl text-orange-600 font-semibold border-b-2 border-b-orange-200 w-fit">
            Características Gerais:
          </h3>
          <Table>
            <TableBody>
              {[
                ["Área total da Guarita", "7,56 m²"],
                ["Sanitário acessível", "3,60 m²"],
                ["Área total construída", "27 m²"],
                ["Pé-direito livre", "3,00 m"],
                ["Sistema construtivo", "Alvenaria estrutural com blocos de concreto"],
                ["Tipo de bloco", "Família 14x39 cm"],
                ["Fornecedor referência", "Tatu Pré-Moldados"],
              ].map(([label, value]) => (
                <TableRow key={label}>
                  <TableCell className="font-medium whitespace-normal break-words">{label}</TableCell>
                  <TableCell className="whitespace-normal break-words">{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <h3 className="text-2xl text-orange-600 font-semibold border-b-2 border-b-orange-200 w-fit mb-3">
            Diferenciais do Sistema:
          </h3>
          <Table>
            <TableBody>
              {[
                "Alta resistência e estabilidade estrutural",
                "Agilidade na execução da obra",
                "Redução de desperdício de materiais",
                "Compatibilidade com instalações hidráulicas e elétricas",
                "Excelente custo-benefício para construções de pequeno porte",
              ].map((item) => (
                <TableRow key={item}>
                  <TableCell className="whitespace-normal break-words">{item}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function PortfolioSection() {
  const [selectedId, setSelectedId] = useState<ProjectId | null>(null);

  const selectedIndex = projects.findIndex((p) => p.id === selectedId);
  const selected = selectedIndex >= 0 ? projects[selectedIndex] : null;

  function handleSelect(id: ProjectId) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  function navigate(dir: "prev" | "next") {
    if (selectedIndex < 0) return;
    const next =
      dir === "next"
        ? (selectedIndex + 1) % projects.length
        : (selectedIndex - 1 + projects.length) % projects.length;
    setSelectedId(projects[next].id);
  }

  return (
    <section className="flex flex-col p-10 gap-10 bg-stone-50 text-stone-500 md:p-20 lg:p-32">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="text-xs tracking-widest uppercase text-stone-400">
          PORTFÓLIO
        </span>
        <h2 className="text-4xl md:text-5xl text-stone-800">
          Projetos Acadêmicos
        </h2>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {projects.map((project) => {
          const isActive = selectedId === project.id;
          return (
            <button
              key={project.id}
              onClick={() => handleSelect(project.id)}
              className={[
                "group text-left rounded-xl overflow-hidden border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
                isActive
                  ? "border-orange-500 shadow-lg shadow-orange-100"
                  : "border-stone-200 hover:border-stone-300 hover:-translate-y-2 hover:shadow-lg shadow-stone-200",
              ].join(" ")}
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={project.thumb}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Active overlay */}
                {isActive && (
                  <div className="absolute inset-0 bg-orange-500/10" />
                )}
              </div>

              {/* Card body */}
              <div className="bg-white px-4 py-3 flex flex-col gap-1">
                <span className="text-[10px] tracking-widest uppercase text-orange-500">
                  {project.tag}
                </span>
                <p className="text-sm font-medium text-stone-800 leading-snug">
                  {project.title}
                </p>

                {/* "Ver projeto" indicator */}
                <div
                  className={[
                    "flex items-center gap-1.5 mt-1.5 text-[11px] transition-colors duration-200",
                    isActive ? "text-orange-500" : "text-stone-400 group-hover:text-stone-600",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "w-1.5 h-1.5 rounded-full transition-colors duration-200",
                      isActive ? "bg-orange-500" : "bg-stone-300 group-hover:bg-stone-400",
                    ].join(" ")}
                  />
                  <span>{isActive ? "Selecionado" : "Ver projeto"}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="border border-stone-200 rounded-2xl bg-white overflow-hidden"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <span className="text-[11px] tracking-widest uppercase text-orange-500">
                  {selected.tag}
                </span>
                <span className="text-stone-300">·</span>
                <span className="text-sm text-stone-600 font-medium">
                  {selected.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Navigation arrows */}
                <button
                  onClick={() => navigate("prev")}
                  className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-50 hover:border-stone-300 transition-colors"
                  aria-label="Projeto anterior"
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  onClick={() => navigate("next")}
                  className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-50 hover:border-stone-300 transition-colors"
                  aria-label="Próximo projeto"
                >
                  <ArrowRight size={14} />
                </button>

                {/* Close */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-stone-50 hover:border-stone-300 transition-colors ml-1"
                  aria-label="Fechar"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-10 p-6 md:flex-row md:items-start">
              {/* Carousel */}
              <div className="w-full md:max-w-lg shrink-0">
                <Carousel className="w-full">
                  <CarouselContent>
                    {selected.images.map((img, i) => (
                      <CarouselItem key={i}>
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-white text-stone-800 hover:bg-stone-100 border border-stone-200" />
                  <CarouselNext className="bg-white text-stone-800 hover:bg-stone-100 border border-stone-200" />
                </Carousel>

                {/* Image count hint */}
                <p className="mt-2 text-xs text-stone-400 text-center">
                  {selected.images.length} imagens — use as setas para navegar
                </p>
              </div>

              {/* Detail content */}
              <div className="flex-1">{selected.detail}</div>
            </div>

            {/* Bottom nav hint */}
            <div className="px-6 pb-5 flex items-center gap-2 text-[11px] text-stone-400">
              <ArrowLeft size={11} />
              <ArrowRight size={11} />
              <span>Use as setas acima para navegar entre os {projects.length} projetos</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}