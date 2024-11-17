import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "Trabajos y proyectos 2D",
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
    title: "Trabajos y proyectos 2D",
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
    title: "Tech Alpha: Online Electronics Accessories Store",
    image1:
      "/assets/images/Arte2D/vaquero.png",
    image2:
      "/assets/images/Arte2D/EscenarioConceptart.png",
    description:
      "Tech Alpha offers the latest electronic accessories through a seamless online shopping experience. Built using Redux.js, it features modern design, robust shopping functionality, and easy navigation. Data is served via JSON server and fetched using Axios.",
    tools: ["React.js", "Tailwind CSS", "Redux.js", "Redux Toolkit", "Axios"],

  },
  {
    id: 4,
    title: "Foodverse: A Recipe Finder Web Application",
    image1:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615230/Personal%20Portfolio/foodverse-1_mkf88w.png",
    image2:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615230/Personal%20Portfolio/foodvarse-2_qekgne.png",
    description:
      "Foodverse is a recipe finder app where users can search for recipes, view ingredient details, and save their favorites locally. Recipes cater to various dietary preferences, offering something for everyone.",
    tools: ["React.js", "React Router", "Tailwind CSS"],
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
