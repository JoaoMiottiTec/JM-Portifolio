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
    { src: '/images/curriculo.png', alt: 'Curriculo antigo', link: 'https://joaomiottitec.github.io' },
    { src: '/images/innova.png', alt: 'Innova Summit', link: 'https://innova-summit.vercel.app' },
    { src: '/images/seaplan.png', alt: 'Grupo Seaplan Ltda.', link: 'https://www.seaplan.com.br' },
    { src: '/images/eccomerce.png', alt: 'Eccomerce', link: 'https://ecommerce-stripe-sanity-eta.vercel.app' },
    { src: '/images/bgf.png', alt: 'BGF', link: 'https://www.brasiliagamefestival.com.br' },
  ];

  return (
    <section className="bg-transparent py-20">
      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-16 text-center">Projetos</h2>
      <div ref={swiperRef} className="swiper-container max-w-screen-xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
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
                <img src={project.src} alt={project.alt} className="w-full h-[20rem] sm:h-[25rem] lg:h-[30rem] object-cover rounded-xl" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
