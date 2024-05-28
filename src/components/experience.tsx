'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section id='experience' className="min-h-screen flex flex-col items-start justify-center py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto section-content">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 text-center sm:text-left">Experiências</h2>
        <div ref={(el) => { sectionsRef.current[0] = el! }} className="experience-item mb-8">
          <h3 className="text-2xl font-semibold">Freelancer</h3>
          <p className="text-lg">Agosto 2022 – Atualmente</p>
          <p className="text-lg">Brasília, DF</p>
          <ul className="list-disc list-inside">
            <li>Trabalhei em diversos projetos de desenvolvimento, design e suporte técnico diretamente com os clientes.</li>
            <li>Desenvolvi habilidades de comunicação e atendimento ao cliente.</li>
            <li>Clientes atendidos incluem: Seaplan, Innova Summit, BGF, Advocacias.</li>
            <li>Tecnologias utilizadas: Python, Nextjs, Tailwindcss, NodeJs, Angular, Dart, React Native</li>
          </ul>
        </div>
        <div ref={(el) => { sectionsRef.current[1] = el! }} className="experience-item mb-8">
          <h3 className="text-2xl font-semibold">Desenvolvedor FrontEnd Pleno</h3>
          <p className="text-lg">Março 2021 – Março 2022</p>
          <p className="text-lg">DeltaPoint, Brasília, DF</p>
          <ul className="list-disc list-inside">
            <li>Métologia agil aplicada desde o inicio da minha jornada na empresa</li>
            <li>Desenvolvi o projetos utilizando JavaScript/React e TypeScript.</li>
            <li>Fiz alguns serviços como QA dentro da empresa</li>
            <li>Atuei como suporte N1 e N2 após a conclusão do projeto, aprimorando minhas habilidades de atendimento ao cliente.</li>
          </ul>
        </div>
        <div ref={(el) => { sectionsRef.current[2] = el! }} className="experience-item mb-8">
          <h3 className="text-2xl font-semibold">Estagiário</h3>
          <p className="text-lg">Outubro 2018 – Dezembro 2020</p>
          <p className="text-lg">VALEC, Brasília</p>
          <ul className="list-disc list-inside">
            <li>Utilizei tecnologias como Java, DBA e C, colaborando diretamente com diretores e gerentes, melhorando minhas habilidades de comunicação e oratória.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;