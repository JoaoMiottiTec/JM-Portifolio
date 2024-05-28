'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  const cardData = [
    {
      src: '/images/react.svg',
      alt: 'React.js',
      link: 'https://reactjs.org/'
    },
    {
      src: '/images/next.svg',
      alt: 'Next.js',
      link: 'https://nextjs.org/'
    },
    {
      src: '/images/tailwind.svg',
      alt: 'Tailwind',
      link: 'https://tailwindcss.com/'
    },
    {
      src: '/images/node.svg',
      alt: 'Node.JS',
      link: 'https://nodejs.org/en'
    },
    {
      src: '/images/ts.svg',
      alt: 'TypeScript',
      link: 'https://www.typescriptlang.org'
    },
    {
      src: '/images/postgree.svg',
      alt: 'PostGreSQL',
      link: 'https://www.postgresql.org'
    },
  ];

  return (
    <section id='skills' className="bg-transparent overflow-hidden">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 space-y-12 flex flex-col justify-center">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 text-center sm:text-left">Habilidades</h2>
        <div className="flex flex-wrap justify-center space-x-4 space-y-4">
          {cardData.map((card, index) => (
            <a
              href={card.link}
              key={index}
              ref={(el) => (cardsRef.current[index] = el!)}
              className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 transform hover:scale-110 transition-transform duration-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={card.src}
                alt={card.alt}
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom bg-white opacity-50 hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
