import { TiHtml5 } from "react-icons/ti";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiPostgresql,
} from 'react-icons/di';
import {
    SiCss3, 
    SiRedux, 
    SiGithub,
    SiVisualstudiocode,
    SiPostman,
    SiVercel,
    SiRailway
} from 'react-icons/si';

const techStack = [
    { icon: TiHtml5, name: "HTML" },
    { icon: SiCss3, name: "CSS" },
    { icon: DiJavascript1, name: "JavaScript" },
    { icon: DiNodejs, name: "node.js" },
    { icon: DiMongodb, name: "MongoDB" },
    { icon: DiReact, name: "React" },
    { icon: SiRedux, name: "Redux" },
    { icon: DiGit, name: "Git" },
    { icon: DiPostgresql, name: "Postgresql" }
]

const toolStack = [
    { icon: SiGithub, name: "GitHub" },
    { icon: SiVisualstudiocode, name: "VS-Code" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiVercel, name: "Vercel" },
    { icon: SiRailway, name: "Railway" },
]

export { techStack, toolStack }