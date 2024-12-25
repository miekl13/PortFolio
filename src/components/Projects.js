import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "Poster y escena de accion ",
    image1:
      "assets/images/Arte2D/poster.jpg",
    image2:
      "assets/images/Arte2D/EscenaAccion.png",
    description:
      "Proyecto de universidad aun en desarrollo que consistia en hacer un supuesto DLC del Sead of Star, se utilizaron principalmente el Procreate para crear el diseño del poster y de la escena accion  ",
    tools: [
      "Procreate",
      "Adobe IndieDesign",
    ],
    frontEndLink: "",
    backEndLink: "",
  },
  {
    id: 2,
    title: "Concepts de personajes femenino",
    image1:
      "assets/images/Arte2D/conceptChica.jpg",
    image2:
      "assets/images/Arte2D/conceptChica2.jpg",
    description:
      "Concepts de personaje femenino ",
    tools: [
      "Procreate",
      "Adobe IndieDesign",
    ],
    frontEndLink: "",
    backEndLink: "",
  },
  {
    id: 3,
    title: "Concepts de personajes masculino",
    image1:
      "/assets/images/Arte2D/concpetsChico2.jpg",
    image2:
      "/assets/images/Arte2D/concpetsChico.jpg",
    description:
      "Concepts de personaje masculino  ",
    tools: [
      "Procreate",
      "Adobe IndieDesign",
    ],
    frontEndLink: "",
    backEndLink: "",
  },
  {
    id: 4,
    title: "Personajes finalizados ",
    image1:
      "assets/images/Arte2D/PersonajeGral.png",
    image2:
      "assets/images/Arte2D/personajeSeai.jpg",
    description:
      "Proyecto de universidad que consistia en hacer un supuesto DLC del Sead of Star, se utilizaron principalmente el Procreate para crear el diseño del poster y de la escena accion  ",
    tools: [
      "Procreate",
      "Adobe IndieDesign",
    ],
    frontEndLink: "",
    backEndLink: "",
  },
  {
    id: 5,
    title: "Concepts de armas",
    image1:
      "assets/images/Arte2D/conceptsarma2.jpg",
    image2:
      "assets/images/Arte2D/conceptsarma.jpg",
    description:
      "Bocetos de armas para el trabajo de universida ",
    tools: ["Procreate"],
  },
  {
    id: 6,
    title: "Stroyboard del juego ",
    image1:
      "assets/images/Arte2D/stroyboard.jpg",
    image2:
      "assets/images/Arte2D/escenario.png",
    description:
      "Stroyboard que consiste en el primer encuentro entre los dos personajes ",
    tools: [" Procreate"],
  },
  {
    id: 7,
    title: "Interfaces del juego",
    image1:
      "assets/images/Arte2D/Menuinicio.jpg",
    image2:
      "assets/images/Arte2D/viajeRapido.png",
    description:
      "Interfaz del menu de inicio y del viaje rapido",
    tools: [" Procreate, Photoshop"],
  },

  {
    id: 8,
    title: "Personaje mas escenario western",
    image1:
      "assets/images/Arte2D/vaquero.png",
    image2:
      "assets/images/Arte2D/EscenarioConceptart.png",
    description:
      "Trabajo que consitia en hacer un personaje y un escenario con la misma tematica, en mi caso hice un escenario western  ",
    tools: ["Photoshop, Procreate"],
  },
  {
    id: 9,
    title: "Concepts de escenario western",
    image1:
      "assets/images/Arte2D/cowboy5.png",
    image2:
      "assets/images/Arte2D/cowboy7.png",
    description:
      "Mas concept de personajes ",
    tools: ["Photoshop"],
  },
  {
    id: 10,
    title: "Personaje animado mas Caratula",
    image1:
      "assets/images/Arte2D/Max.png",
    image2:
      "assets/images/Arte2D/Caratula_FINAL.png",
    description:
      "Trabajo el cual se tenia que animar un personaje en Adobe Animation mas hacer una caratula aprendiendo las tecnicas de photobasing",
    tools: ["Photoshop"],
  },
  {
    id: 11,
    title: "Concept art de personajes de Game Jam",
    image1:
      "assets/images/Arte2D/rico.png",
    image2:
      "assets/images/Arte2D/Personajebotijo.png",
    description:
      "Personaje que realice para una GameJam, la cual consistia en hacer personajes que tenian que estar bien definidos.El videokiegos quedo segundo haciendo que fueramos a prenetarlo en la IndieDevDay",
    tools: ["Procreate", "Photoshop"],
  },
  {
    id: 12,
    title: "Diseño de personajes estilizados",
    image1:
      "assets/images/Arte2D/taxista.png",
    image2:
      "assets/images/Arte2D/caratulas.jpg",
    description:
      "Personaje que realice para una GameJam, la cual consistia en hacer personajes que tenian que estar bien definidos.El videokiegos quedo segundo haciendo que fueramos a prenetarlo en la IndieDevDay",
    tools: ["Procreate", "Photoshop"],
  },
  {
    id: 13,
    title: "Diseño de personaje fantaticos",
    image1:
      "assets/images/Arte2D/fenix.jpg",
    image2:
      "assets/images/Arte2D/zombie.png",
    description:
      "Personaje que realice para una GameJam, la cual consistia en hacer personajes que tenian que estar bien definidos.El videokiegos quedo segundo haciendo que fueramos a prenetarlo en la IndieDevDay",
    tools: ["Procreate", "Photoshop"],
  },
  {
    id: 14,
    title: "Modelado de personajes ",
    image1:
      "assets/images/Arte3D/personaje3Dkarateca.jpg",
    image2:
      "assets/images/Arte3D/personaje3Dkarateca2.png",
    description:
      "Modelado de personajes 3D utilizando el programa 3DMAX y texturizado de Substance Painter ",
    tools: ["3D max", "Phothosho, Subtance Painter"],
  },
  {
    id: 15,
    title: "Unwrap de karateca",
    image1:
      "assets/images/Arte3D/texturaKarateca.jpg",
    image2:
      "assets/images/Arte3D/personaje3Dkarateca.jpg",
    description:
      "Unwrap del karate implementado en photoshop consiguiendo el resultado anteriormente visto ",
    tools: ["3D max", "Phothoshop"],
  },
  {
    id: 16,
    title: "Texturizado de katana en Substance Painter mas render de escenario",
    image1:
      "assets/images/Arte3D/katana.jpg",
    image2:
      "assets/images/Arte3D/enfrentamientopoblado.png",
    description:
      "Texturizado en Substance Painter de un modelo de una katana mas el renderizado del escenario con ella ",
    tools: ["3D max", "Phothoshop"],
  },
  {
    id: 17,
    title: "Renders de escenario japones ",
    image1:
      "assets/images/Arte3D/dojo.jpg",
    image2:
      "assets/images/Arte3D/escenario3Djapones.png",
    description:
      "Modelado de un escenario hecho en 3D Max para un trabajo de universidad estos son los resultados de la renderizacion  ",
    tools: ["3D max", "Phothoshop"],
  },
  {
    id: 18,
    title: "Mas renders de escenario Japones",
    image1:
      "assets/images/Arte3D/lagobambu.jpg",
    image2:
      "assets/images/Arte3D/poblado.png",
    description:
      "Mas render del escenaio con el lago bambu y del poblado ",
    tools: ["3D max", "Phothoshop"],
  },
  {
    id: 19,
    title: "Modelado de vaquero",
    image1:
      "assets/images/Arte3D/vaqueroTexturas.jpg",
    image2:
      "assets/images/Arte3D/vaquerosinTexturas.png",
    description:
      "Modelado de vaquero en 3D Max y texturizado en subtance Painter, se puede ver el modelo con las texturas puestas y sin ellas ",
    tools: ["3D max", "SubstancePainter"],
  },
  {
    id: 20,
    title: "Unwrap del vaquero mas resultado conseguido ",
    image1:
      "assets/images/Arte3D/unwrapvaquero.jpg",
    image2:
    "assets/images/Arte3D/vaqueroTexturas.jpg",
    description:
      "Unwrap del vaquero para pasarlo al subtancePainter consiguiendo este resultado",
    tools: ["3D max", "SubstancePainter"],
  },
  {
    id: 21,
    title: "Expresiones de caras",
    image1:
      "assets/images/Arte3D/carasvaquero.png",
    image2:
      "assets/images/Arte3D/carasvaquero.png",
    description:
      "Expresiones de Cara para animarlo en Unity en el que se puede ver ditintas expresiones como sorpendido enfadado o feliz entre otras mas  ",
    tools: ["3D max"],
  },
  {
    id: 22,
    title: "Modelado western implementado en unity mas modelado de scorpion ",
    image1:
      "assets/images/Arte3D/escenarioUnity.jpg",
    image2:
      "assets/images/Arte3D/escorpion.jpg",
    description:
      "Modelado de escenario wester y exportado en Unity",
    tools: ["3D max", "Unity","Blender","SubstancePainter"],
  },
  {
    id: 23,
    title: "Modelos de Albatrosh y CargoQueen ",
    image1:
      "assets/images/Arte3D/AlbatrossAvatar.jpg",
    image2:
      "assets/images/Arte3D/CargoQueenAVATAR.png",
    description:
      "Modelado  y texturizado de naves para el juego Space CombatRush 3D que esta en itchio",
    tools: ["Blender"],
  },
  


];


const Projects = () => {
  return (
    <div className='projects container mx-auto mt-40' id='projects'>
      <SectionTitle title={"My Projects"} />
      <div className='projects-wrapper mt-40 flex flex-col gap-10'>
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
