import pos from "@/app/lib/pos.jpg"
import flowmeter from "@/app/lib/flowmeter.png"
import portfolio from "@/app/lib/portfolio.png"
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ]

  export const projectsData = [
    {
      title: "POS",
      description:
        "Created a full-stack POS application for restaurants, managing real-time online and offline orders across multiple systems connected via LAN.",
      tags: ["React", "Electron", "Express", "Bootstrap", "SocketIO","Sqllite","Framer motion","tanstack query"],
      imageUrl: pos,
    },
    {
      title: "Flow meter",
      description:
        "A fluid mechanics calculator app for faculties, capable of computing and storing experimental data of students across different semesters.",
      tags: ["React", "Electron", "TanStack Table", "Tailwind", "Redux"],
      imageUrl: flowmeter,
    },
    {
      title: "Portfolio",
      description:
      "A personal portfolio with Next.js featuring both dark and light modes, adorned with captivating animations.",
      tags: ["Next.js", "framer motion", "Tailwind", "contextAPI"],
      imageUrl: portfolio,
    },
  ]

  export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "Tailwind",
    "bootstap",
    "SQLlite",
    "Electron",
    "TanstakTable",
    "Redux",
    "SocketIO",
    "Express",
    "TanstakQuery",
    "Framer Motion",
  ]

  export const experiencesData = [
    {
      title: "Mechanical engineer",
      location: "Gujarat Technological University",
      description:
        "Attained a Mechanical Engineering degree with Distinction from GTU and qualified in GATE.",
      icon: React.createElement(LuGraduationCap),
      date: "2015",
    },
    {
      title: "Subject matter expert",
      location: "Rajkot,Gujarat",
      description:
        "I worked as a subject matter expert in Chegg and coursehero.",
      icon: React.createElement(CgWorkAlt),
      date: "2016 - 2022",
    },
    {
      title: "Full-Stack Developer",
      location: "Emerging Coders",
      description:
        "Currently employed as a Full-stack Web Developer with expertise in React, Electron, Node, Express.js, Next.js, Tailwind, SQL.",
      icon: React.createElement(FaReact),
      date: "2022 - present",
    },
  ] 