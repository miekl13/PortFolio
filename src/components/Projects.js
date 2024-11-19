import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "Poster y escena de accion ",
    image1:
      "/assets/images/Arte2D/poster.jpg",
    image2:
      "/assets/images/Arte2D/EscenaAccion.png",
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
    id: 2,
    title: "Concepts de personajes",
    image1:
      "/assets/images/Arte2D/PersonajeGral.png",
    image2:
      "/assets/images/Arte2D/personajeSeai.jpg",
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
    id: 3,
    title: "Personaje mas escenario western",
    image1:
      "/assets/images/Arte2D/vaquero.png",
    image2:
      "/assets/images/Arte2D/EscenarioConceptart.png",
    description:
      "Trabajo que consitia en hacer un personaje y un escenario con la misma tematica, en mi caso hice un escenario western  ",
    tools: ["Photoshop, Procreate"],
  },
  {
    id: 4,
    title: "Concepts de escenario western",
    image1:
      "/assets/images/Arte2D/cowboy5.png",
    image2:
      "/assets/images/Arte2D/cowboy7.png",
    description:
      "Mas concept de personajes ",
    tools: ["Photoshop"],
  },
  {
    id: 5,
    title: "Personaje animado mas Caratula",
    image1:
      "/assets/images/Arte2D/Max.png",
    image2:
      "/assets/images/Arte2D/Caratula_FINAL.png",
    description:
      "Trabajo el cual se tenia que animar un personaje en Adobe Animation mas hacer una caratula aprendiendo las tecnicas de photobasing",
    tools: ["Photoshop"],
  },
  {
    id: 6,
    title: "Concept art de personajes de Game Jam",
    image1:
      "/assets/images/Arte2D/rico.png",
    image2:
      "/assets/images/Arte2D/Personajebotijo.png",
    description:
      "Personaje que realice para una GameJam, la cual consistia en hacer personajes que tenian que estar bien definidos.El videokiegos quedo segundo haciendo que fueramos a prenetarlo en la IndieDevDay",
    tools: ["Procreate", "Photoshop"],
  },
  {
    id: 7,
    title: "Diseño de personajes estilizados",
    image1:
      "/assets/images/Arte2D/taxista.png",
    image2:
      "/assets/images/Arte2D/caratulas.jpg",
    description:
      "Personaje que realice para una GameJam, la cual consistia en hacer personajes que tenian que estar bien definidos.El videokiegos quedo segundo haciendo que fueramos a prenetarlo en la IndieDevDay",
    tools: ["Procreate", "Photoshop"],
  },
  {
    id: 8,
    title: "Diaseño de personaje fantaticos",
    image1:
      "/assets/images/Arte2D/fenix.jpg",
    image2:
      "/assets/images/Arte2D/zombie.png",
    description:
      "Personaje que realice para una GameJam, la cual consistia en hacer personajes que tenian que estar bien definidos.El videokiegos quedo segundo haciendo que fueramos a prenetarlo en la IndieDevDay",
    tools: ["Procreate", "Photoshop"],
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
