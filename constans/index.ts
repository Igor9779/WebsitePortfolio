import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
    RxHome,
    RxPerson,
    RxDashboard,
} from "react-icons/rx";
import { SiCypress, SiTypescript } from "react-icons/si";

export const Socials = [
  {
    name: "LinkedIn",
    src: "/assets/linkedin.svg",
    link: "http://linkedin.com/in/igor-bondarenko-7a2966269",
  },
  {
    name: "GitHub",
    src: "/assets/github.svg",
    link: "https://github.com/Igor9779",
  },
  {
    name: "Telegram",
    src: "/assets/telegram.svg",
    link: "https://t.me/DarthHoit",
  },
];

export const NavLinks = [
  {
    name: "Home",
    icon: RxHome,
    link: "/",
  },
  {
    name: "About me",
    icon: RxPerson,
    link: "/about-me",
  },
  {
    name: "Projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
];

export const ProImages = [
  {
    src: "/assets/projects/clock-shop.jpg",
  },
  {
    src: "/assets/projects/4Cooking.jpg",
  },
  {
    src: "/assets/projects/power-pulse.jpg",
  },
  {
    src: "/assets/projects/n-code.jpg",
  },
];

export const ProImages2 = [
  {
    src: "/assets/projects/Orange1.jpeg",
  },
  {
    src: "/assets/projects/Orange2.jpeg",
  },
  {
    src: "/assets/projects/Orange3.jpeg",
  },
  {
    src: "/assets/projects/Orange4.jpeg",
  },
];

export const ServiceData = [
  {
    icon: FaHtml5,
    title: "HTML",
    content: "I learned how to layout simple websites from header to footer, and I can also create forms and tables.",
    backgroundImage: "/assets/space/SpaceCity7.jpeg",
  },
  {
    icon: FaCss3Alt,
    title: "CSS",
    content: "I can style websites, learned to use Flexbox, and can create attractive sliders and radio buttons. I am also somewhat familiar with Tailwind CSS.",
    backgroundImage: "/assets/space/SpaceCity9.jpeg",
  },
  {
    icon: FaJs,
    title: "JavaScript",
    content: "I am proficient in DOM manipulation methods for creating dynamic and interactive web pages. I am skilled in using modern language features such as arrow functions, destructuring, template literals, and modules. I have experience with external APIs using Fetch and Axios for retrieving and sending data.",
    backgroundImage: "/assets/space/SpaceCity1.jpg",
  },
  {
    icon: FaReact,
    title: "React.js",
    content: "I am skilled at creating components for developing modular and reusable parts of the interface. I have experience using hooks (useState, useEffect) for managing state and component lifecycle. I can style components using CSS-in-JS solutions such as Styled Components.",
    backgroundImage: "/assets/space/SpaceCity6.jpeg",
  },
  {
    icon: SiTypescript,
    title: "TypeScript",
    content: "I have experience using static typing to enhance code reliability and readability. I can create and use interfaces and types to define data structures. I have experience using TypeScript with popular libraries and frameworks such as React.js.",
    backgroundImage: "/assets/space/SpaceCity5.jpeg",
  },
  {
    icon: SiCypress,
    title: "Cypress",
    content: "Experience using Cypress for automating web application testing. Ability to write clean and efficient tests using Cypress. Writing tests for various functional scenarios, including user interactions and data validation. Ability to debug tests and analyze errors during test scenario execution.",
    backgroundImage: "/assets/space/SpaceCity8.jpeg",
  },
];