import Header from "@/layout/Header";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portifolio João Miotti ",
  description: "Meus projetos e trabalhos realizados durante minha carreira como desenvolvedor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Header/>
        {children}
        </body>
    </html>
  );
}
