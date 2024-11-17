import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);

  return (
    <div className='bio mt-20 container mx-auto overflow-hidden'>
      <p ref={bioRef}>
        Soy un apasionado desarrollador y diseñador de videojuegos, especializado en la creación de experiencias interactivas a través de arte 2D, 3D y programación. Con una trayectoria enfocada en proyectos innovadores, busco constantemente nuevas herramientas y tecnologías para mejorar mis habilidades. Mi objetivo es resolver problemas complejos con creatividad y lógica, y contribuir al avance de la industria del entretenimiento digital.
      </p>
    </div>
  );
};

export default Bio;
