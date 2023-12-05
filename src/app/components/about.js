"use client";
import React, { useContext, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { motion, useInView } from "framer-motion";
import { activeLinkContext } from "../context/activeLinkContext";
import useSectionInView from "./hooks/useInViewHook";

export default function About() {
    const ref = useSectionInView("About");

    const animationVariant = {
        initial: {
            opacity: 0,

            scale: 0.3,
        },
        animate: (idx) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.1,
                duration: 0.25,
            },
        }),
    };

    return (
        <div className="max-w-[45rem] scroll-mt-32" id="about" ref={ref}>
            <motion.section
                variants={animationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className=" leading-8 mb-28 items-center text-center sm:mb-40">
                <SectionHeading>About me</SectionHeading>
                <p className="mb-3">
                    After graduating with a degree in{" "}
                    <span className="font-medium">Mechanical Engineering </span>
                    and clearing the GATE, I began working as subject matter
                    expert in chegg and coursehero. I embarked on my {" "}
                    <span className="font-medium">
                        full-stack web development{" "}
                    </span>{" "}
                    journey in 2022 and joined{" "}
                    <span className="font-medium">Emerging coders</span> as
                    full-stack web developer. {" "}
                    <span className="italic">
                        My favorite part of programming
                    </span>{" "}
                    is the problem-solving process. I enjoy learning New
                    technologies and solve problems the most optimized way. My
                    core stack includes{" "}
                    <span className="font-medium">
                        React, Next.js, Node.js, and electron
                    </span>
                    . I am also proficient in TypeScript and SQL. I am always
                    eager to take on new challenges. I am currently looking for
                    a <span className="font-medium">full-time position</span> as
                    a software developer.
                </p>

                <p>
                    Outside of coding, I find pleasure in{" "}
                    <span className="font-medium">photography</span> and
                    watching movies.<br/> Additionally, I have a passion for learning
                    new things and am currently exploring the realm of video
                    editing.
                </p>
            </motion.section>
        </div>
    );
}
