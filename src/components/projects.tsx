// components/Projects.tsx
'use client'
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      swiperRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: swiperRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const projects = [
    { src: 'https://via.placeholder.com/600x400', alt: 'Project 1', link: 'https://project1.com' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Project 2', link: 'https://project2.com' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Project 3', link: 'https://project3.com' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Project 4', link: 'https://project4.com' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Project 5', link: 'https://project5.com' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Project 6', link: 'https://project6.com' },
  ];

  return (
    <section className="bg-transparent py-20">
      <h2 className="text-7xl font-bold mb-16 text-black dark:text-white pl-20">Projetos</h2>
      <div ref={swiperRef} className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          className="swiper-wrapper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.src} alt={project.alt} className="w-full h-[30rem] object-cover rounded-xl" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
