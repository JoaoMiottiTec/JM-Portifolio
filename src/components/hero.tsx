'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' });
  }, []);

  return (
    <section ref={heroRef} className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center hero-text">
      <p className="text-xl font-light mb-2">Olá, sou o João Vitor Miotti. Um analista fascinado por tecnologia.</p>
      <h1 className="text-5xl font-bold mb-4">
        <Typewriter
          options={{
            strings: [
              '<span class="highlight">BEM VINDO!!!</span>',
              '<span class="highlight">Desenvolvedor</span> Node e React/Next.js ',
            ],
            autoStart: true,
            loop: true,
            cursor: "<span class='highlight'>|</span>",
          }}
        />
      </h1>
      <div className="flex space-x-4">
        <button className="btn bg-purple-700 text-black">Download CV</button>
        <button className="btn bg-purple-700 text-black">Entre em contato</button>
      </div>
    </section>
  );
};

export default Hero;
