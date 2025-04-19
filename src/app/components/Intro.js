"use client";
import Image from "next/image";
import React from "react";
import profilePic from "@/app/lib/profile.jpeg";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

import Link from "next/link";
import useSectionInView from "./hooks/useInViewHook";

export default function Intro() {
    const ref = useSectionInView("Home");

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex flex-col justify-center items-center mt-5">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.3,
                    }}
                >
                    <Image
                        src={profilePic}
                        quality={90}
                        priority
                        className="w-16 border-2 border-white shadow-xl h-16 object-cover rounded-full"
                        alt="profile pic"
                    />
                </motion.div>
                <motion.h1
                    className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="font-bold">Hello, I&apos;m Pratik.</span> I&apos;m a{" "}
                    <span className="font-bold">full-stack developer</span> with <span className="font-bold">2.5 years</span> of experience
                    in <span className="underline">React/Next.js</span>. and <span className="font-bold">1.5 years</span> of experience in
                    <span className="underline"> Node/express.</span> I enjoy building <span className="italic">sites & apps.</span>
                </motion.h1>
                <div className="flex flex-wrap justify-center items-center gap-3 my-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.3,
                            delay: 0.2,
                        }}
                    >
                        <Link
                            href="#contact"
                            className="group flex justify-center items-center gap-4 shadow-lg bg-gray-950 text-white rounded-full px-7 py-2 font-semibold text-sm hover:scale-[1.02] transition dark:bg-gray-100 dark:text-gray-950"
                        >
                            Contact me <FaArrowRightLong className="group-hover:translate-x-1 transition" />
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.3,
                            delay: 0.2,
                        }}
                    >
                        <a
                            href="/CV.pdf"
                            download
                            className="flex font-semibold justify-center items-center gap-4 shadow-lg bg-white dark:bg-white/10 rounded-full px-7 py-2 text-sm hover:scale-[1.02] cursor-pointer transition "
                        >
                            Download CV <IoDownloadOutline />
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.3,
                            delay: 0.2,
                        }}
                    >
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/pratik-savaliya-655108ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            className="flex font-semibold hover:scale-[1.03] dark:bg-white/10 transition justify-center cursor-pointer items-center shadow-lg bg-white rounded-full text-[1.1rem] w-9 h-9"
                        >
                            <FaLinkedin />
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.3,
                            delay: 0.2,
                        }}
                    >
                        <a
                            target="_blank"
                            href="https://github.com/pratiks1994"
                            className="flex hover:scale-[1.03] cursor-pointer dark:bg-gray-200/10 font-semibold justify-center items-center shadow-lg bg-white rounded-full text-[1.1rem] w-9 h-9"
                        >
                            <FaGithub />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
