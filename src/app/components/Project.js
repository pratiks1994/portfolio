"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export default function Project({ title, description, tags, imageUrl }) {
    const tilesRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: tilesRef,
        offset: ["0 1", "1.33 1"],
    });

    const scaleFactor = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityFactor = useTransform(scrollYProgress, [0, 1], [0.3, 1]);


    return (    
        <motion.div
            ref={tilesRef}
            style={{
                scale: scaleFactor,
                opacity: opacityFactor,
          
            }}
            className="group mb-3 sm:mb-8 ">
            <section className="group bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 max-w-[42rem] sm:h-[20rem] rounded-md border border-black/5 overflow-hidden relative sm:group-even:pl-8 hover:bg-gray-200 transition">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:w-1/2 flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
                        {description}
                    </p>
                    <ul className="flex flex-wrap gap-2 mt-5 ">
                        {tags.map((tag, idx) => {
                            return (
                                <li
                                    key={idx}
                                    className=" bg-black/[0.7] py-1 text-[0.7rem] tex uppercase tracking-wider rounded-full px-2 font-normal text-white ">
                                    {tag}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <Image
                    src={imageUrl}
                    alt={title}
                    quality={90}
                    className="absolute top-8 hidden sm:block -right-40 w-[28.25rem]  object-cover rounded-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:scale-[1.03] group-hover:translate-y-3 group-hover:-rotate-2 transition group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
                />
            </section>
        </motion.div>
    );
}
