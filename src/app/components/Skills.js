"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "../lib/data";
import useSectionInView from "./hooks/useInViewHook";
import { animate, motion } from "framer-motion";

export default function Skills() {
    const ref = useSectionInView("Skills");

    const animationVariant = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (idx) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * idx,
            },
        }),
    };

    return (
        <section
            ref={ref}
            id="skills"
            className="scroll-mt-32 max-w-[53rem] text-center mb-28 sm:mb-40">
            <SectionHeading>skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 test-lg text-gray-800">
                {skillsData.map((skill, idx) => {
                    return (
                        <motion.li
                            variants={animationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={idx}
                            key={idx}
                            className="px-5 bg-white dark:bg-white/10 dark:text-white/80 rounded-xl border-black/[0.3] py-3 shadow-md">
                            {skill}
                        </motion.li>
                    );
                })}
            </ul>
        </section>
    );
}
