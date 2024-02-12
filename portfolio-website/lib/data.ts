import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import socialmedia from "@/public/social-media.png"
import idealog from "@/public/idealog.png";
import textutils from "@/public/textutils.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Social Media",
    description:
        "A feature-rich full stack MERN application showcasing strong proficiency in modern web technologies.Key highlights include: JWT authentication, likes functionality and dark mode.",
    tags: ["React", "Node.js", "MongoDB", "Material UI"],
    imageUrl:socialmedia,
  },
  {
    title: "Idealog",
    description:
      "Used MERN STACK and JWT authentication.User can create the profile, write, upload and delete the notes.",
    tags: ["React", "MongoDB", "Node.js"],
    imageUrl: idealog,
  },
  {
    title: "TextUtils",
    description:
      "A versatile text editor built with React, offering a responsive and user-friendly interface for seamless text editing experiences.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: textutils,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
] as const;
