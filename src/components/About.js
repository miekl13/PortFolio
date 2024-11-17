import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "assets/images/AboutMeImage1.jpg", // Ruta local a la imagen 1
  img2: "assets/images/AboutMeImage2.jpg", // Ruta local a la imagen 2
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const aboutRefs = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useProjectLeftRightReveal(aboutRefs);

  return (
    <div className='about container mx-auto mt-40' id='about'>
      <SectionTitle title={"Sobre Mí"} />
      <div className='about-wrapper mt-40 grid grid-cols-1 gap-20 overflow-hidden lg:grid-cols-2'>
        <div className='about-left' ref={aboutLeftRef}></div>
        <div className='about-right' ref={aboutRightRef}>
          <p>
            ¡Bienvenido a mi portfolio! Mi pasión se centra en el diseño y desarrollo de videojuegos, así como en la creación de arte 2D y 3D. Desde mis inicios en el mundo del desarrollo, he trabajado en proyectos innovadores que combinan creatividad y tecnología. Me encanta transformar ideas en experiencias interactivas que cautiven a los usuarios.
          </p>
          <p className='mt-10'>
            Como desarrollador y diseñador de videojuegos, disfruto explorando nuevas herramientas y técnicas para mejorar mis habilidades. Mi enfoque se basa en la resolución de problemas, la colaboración, y la innovación constante. Estoy comprometido con la excelencia en cada proyecto, desde la concepción hasta la entrega.
          </p>
          <a
            className='uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-300 inline-block mt-10'
            href='https://drive.google.com/file/d/tu-resumen.pdf' // Reemplazar con tu URL real
            target='_blank'
            rel='noreferrer'
          >
            Ver Mi CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
