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
      "Experience a transformative online learning journey with Learnify. Explore a diverse range of courses, engage with interactive lessons, and embrace a seamless user experience. With Learnify, acquiring new skills and knowledge has never been easier. Join us today and unlock the full potential of your learning endeavors.",
    tools: [
      "Next.js",
      "React.js",
      "MongoDB",
      "Stripe",
      "Prisma",
      "GCP",
      "Tailwind CSS",
      "AOS",
    ],
    liveLink: "https://learnify-pro.vercel.app",
    fullStackLink: "https://github.com/masudranashawon/learnify",
    frontEndLink: "",
    backEndLink: "",
  },
  {
    id: 2,
    title: "Proxima: Project Management Web Application",
    image1:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1679669817/Personal%20Portfolio/proxima-one_rzufpn.png",
    image2:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1679669817/Personal%20Portfolio/proxima-two_zrwmos.png",
    description:
      "Proxima is a project management application built using the MERN stack. It allows users to create, update, and delete their projects with ease. Proxima emphasizes high-level security, featuring robust JWT authentication and front-end route protection to ensure user data safety.",
    tools: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    liveLink: "https://proxima-application.netlify.app",
    fullStackLink: "",
    frontEndLink: "https://github.com/masudranashawon/proxima-client",
    backEndLink: "https://github.com/masudranashawon/proxima-server",
  },
  {
    id: 3,
    title: "Tech Alpha: Online Electronics Accessories Store",
    image1:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615229/Personal%20Portfolio/tech-alpha-1_lgzxvt.png",
    image2:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615227/Personal%20Portfolio/tech-alpha-2_tlagyh.png",
    description:
      "Tech Alpha offers the latest electronic accessories through a seamless online shopping experience. Built using Redux.js, it features modern design, robust shopping functionality, and easy navigation. Data is served via JSON server and fetched using Axios.",
    tools: ["React.js", "Tailwind CSS", "Redux.js", "Redux Toolkit", "Axios"],
    liveLink: "https://tech-alpha-masud.netlify.app",
    fullStackLink: "",
    frontEndLink: "https://github.com/masudranashawon/tech-alpha",
    backEndLink: "https://github.com/masudranashawon/tech-alpha-server",
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
    liveLink: "https://food-verse-masud.netlify.app/",
    fullStackLink: "",
    frontEndLink: "https://github.com/masudranashawon/foodverse",
    backEndLink: "",
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
