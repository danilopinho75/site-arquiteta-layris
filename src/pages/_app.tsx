import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { AppProps } from "next/app";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Layris Gorzoni</title>
        <meta name="description" content="Portfólio de Layris Gorzoni, estudante de Arquitetura e Urbanismo" />
      </Head>
      <main className={`${inter.variable} ${cormorantGaramond.variable}`}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}
