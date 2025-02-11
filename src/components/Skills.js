import { useRef } from "react";
import { useSkillLineReveal, useSkillTextReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const data = [
  { id: 1, title: "Modelado 3D inorganico y organico" },
  { id: 2, title: "Modelado y iluminacion de escenarios" },
  { id: 3, title: "Texturizado en Substance Painter" },
  { id: 4, title: "Dibujos en digital en Procreate y Photoshop" },
  { id: 5, title: "Unwrap y riging de modelos 3D " },
  { id: 6, title: "Animaciones 2D y 3D" },
  { id: 7, title: "Concept Art y diseño de personajes " },
  { id: 8, title: "Diseño de escenarios y portadas" },
  { id: 9, title: "Creacion de Stroryboards" },
  { id: 9, title: "Conocimientos de diseño de anatomia, teoria del color, perspectivas y puntos de vision" },
  { id: 10, title: "Programacion en HTML Y CSS" },
  { id: 11, title: "Programacion en Java, C++ y C#" },
  { id: 12, title: "Creacion de estructuras de datos en SQL Y MongoDB" },
  { id: 13, title: "Nivel intermedio en excel" },
  { id: 14, title: "Ingles nivel B1" },
];

const Skills = () => {
  const skillItemRef = useRef([]);
  const skillTextRef = useRef([]);
  const skillItem2Ref = useRef([]);
  const skillText2Ref = useRef([]);

  useSkillLineReveal(skillItemRef.current);
  useSkillLineReveal(skillItem2Ref.current);
  useSkillTextReveal(skillItemRef.current);
  useSkillTextReveal(skillItem2Ref.current);

  return (
    <div className='skills container mx-auto mt-40' id='skills'>
      <SectionTitle title={"My Skills"} />
      <div className='skills-wrapper grid grid-cols-1 sm:grid-cols-2 mt-40 gap-10 sm:gap-20'>
        <ul className='skills-left flex flex-col gap-10'>
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className='skill-item overflow-hidden'
                ref={(el) => (skillItemRef.current[i] = el)}
              >
                <div
                  className='flex gap-10 items-baseline'
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className='skill-number text-white/50'>
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className='skill-title'>{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className='skills-right flex flex-col gap-10'>
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className='skill-item overflow-hidden'
                ref={(el) => (skillItem2Ref.current[i] = el)}
              >
                <div
                  className='flex gap-10 items-baseline'
                  ref={(el) => (skillText2Ref.current[i] = el)}
                >
                  <span className='skill-number text-white/50'>
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className='skill-title'>{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
