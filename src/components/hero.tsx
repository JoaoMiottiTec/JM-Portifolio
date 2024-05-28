'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Typewriter from 'typewriter-effect';

const Hero = ({ theme }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' });
  }, []);

  return (
    <section ref={heroRef} className={`relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-cover bg-center hero-text bg-dots ${theme}`}>
      <div className="meteor-container absolute inset-0 z-0">
        <div className="meteor meteor-1"></div>
        <div className="meteor meteor-2"></div>
        <div className="meteor meteor-3"></div>
        <div className="meteor meteor-4"></div>
        <div className="meteor meteor-5"></div>
        <div className="meteor meteor-6"></div>
        <div className="meteor meteor-7"></div>
        <div className="meteor meteor-8"></div>
        <div className="meteor meteor-9"></div>
        <div className="meteor meteor-10"></div>
        <div className="meteor meteor-11"></div>
        <div className="meteor meteor-12"></div>
        <div className="meteor meteor-13"></div>
        <div className="meteor meteor-14"></div>
        <div className="meteor meteor-15"></div>
        <div className="meteor meteor-16"></div>
        <div className="meteor meteor-17"></div>
        <div className="meteor meteor-18"></div>
        <div className="meteor meteor-19"></div>
        <div className="meteor meteor-20"></div>
      </div>
      <p className="text-xl font-light mb-2 z-20 text-center">Olá, sou o João Vitor Miotti. Um engenheiro de software fascinado pela tecnologia.</p>
      <h1 className="text-5xl font-bold mb-4 z-20 text-center">
        <Typewriter
          options={{
            strings: [
              '<span class="highlight">Bem-vindo!!!</span>',
              '<span class="highlight">Desenvolvedor</span> Node e React/Next.js ',
            ],
            autoStart: true,
            loop: true,
            cursor: "<span class='highlight'>|</span>",
          }}
        />
      </h1>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 z-20">
        <a href="/curriculoDev.pdf" download className="btn bg-purple-700 text-black px-4 py-2 rounded-md">Download CV</a>
        <a href="https://wa.me/61991832758" target="_blank" rel="noopener noreferrer" className="btn bg-purple-700 text-black px-4 py-2 rounded-md">Entre em contato</a>
      </div>
    </section>
  );
};

export default Hero;
