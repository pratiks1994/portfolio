"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "../lib/data";
import Project from "./Project";
import useSectionInView from "./hooks/useInViewHook";

export default function Projects() {
    const ref = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id="projects" className="scroll-mt-36 mb-28">
            <SectionHeading>my projects</SectionHeading>
            <div>
                {projectsData.map((project) => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}
