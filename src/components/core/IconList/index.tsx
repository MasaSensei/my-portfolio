import {
  SiNextdotjs,
  SiMysql,
  SiExpress,
  SiTailwindcss,
  SiNestjs,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoBootstrap } from "react-icons/bi";

export const IconList = [
  {
    name: "Javascript",
    icon: <SiJavascript />,
    className: "text-yellow-300",
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    className: "text-blue-500",
  },
  {
    name: "Next.Js",
    icon: <SiNextdotjs />,
    className: "text-white",
  },
  {
    name: "React.Js",
    icon: <FaReact />,
    className: "text-blue-500",
  },
  {
    name: "Boostrap",
    icon: <BiLogoBootstrap />,
    className: "text-purple-500",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    className: "text-blue-500",
  },
  {
    name: "Express.Js",
    icon: <SiExpress />,
    className: "text-neutral-500",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    className: "text-blue-600",
  },
  {
    name: "Nest.Js",
    icon: <SiNestjs />,
    className: "text-red-600",
  },
  {
    name: "Node.Js",
    icon: <FaNodeJs />,
    className: "text-green-500",
  },
];
