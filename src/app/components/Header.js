"use client";
import React, { useContext } from "react";
import { links } from "../lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { activeLinkContext } from "../context/activeLinkContext";

export default function Header() {
    const { activeLink, setActiveLink, timeOfLastClick, setTimeOfLastClick } =
        useContext(activeLinkContext);

    return (
        <div className="z-50 relative">
            <motion.div
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50", opacity: 1 }}
                transition={{
                    type: "spring",
                    duration: 0.3,
                    delay: 0.1,
                }}
                className="fixed top-0 left-1/2 w-full h-[4.5rem] bg-white dark:bg-gray-950 dark:bg-opacity-70 dark:border-black/40 bg-opacity-60 backdrop-blur-md shadow-lg shadow-black/[0.03] rounded-none border-white border-opacity-40 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"></motion.div>
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link) => (
                        <motion.li
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                duration: 0.3,
                                delay: 0.1,
                            }}
                            className="h-3/4 flex items-center justify-center"
                            key={link.hash}
                            onClick={() => {
                                setActiveLink(link.name);
                                setTimeOfLastClick(Date.now());
                            }}>
                            <Link
                                className={`w-full flex relative items-center justify-center my-1 px-3 py-2 hover:text-gray-950 hover:dark:text-gray-300 transition-all ${
                                    activeLink === link.name
                                        ? "text-gray-950 dark:text-gray-200"
                                        : null
                                }`}
                                href={link.hash}>
                                {link.name}
                                {activeLink === link.name && (
                                    <motion.span
                                        className="bg-gray-300 rounded-full absolute inset-0 -z-10 dark:bg-gray-600"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
