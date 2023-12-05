"use client";
import React, { useContext, useEffect } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { themeContext } from "../context/themeContext";
import { IoIosMoon } from "react-icons/io";

import { AnimatePresence, motion } from "framer-motion";

export default function ThemeSwitch() {
    const { theme, setTheme } = useContext(themeContext);

    useEffect(() => {
        const theme = localStorage.getItem("theme");

        if (theme) {
            setTheme(theme);
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme : dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");

        }
    });

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    // console.log(theme);
    const animationVariant = {
        initial: {
            opacity: 0,
            scale: 0,
        },
        animate: (idx) => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
            },
        }),
    };

    return (
        <button
            className="fixed bottom-7 right-7 w-10 h-10 grid place-items-center bg-white rounded-full bg-opacity-70 border transition-all border-white border-opacity-50 hover:scale-125 backdrop-blur-md shadow-2xl dark:bg-gray-800/50 dark:border-gray-900"
            onClick={() => toggleTheme()}>
            {/* <AnimatePresence initial={true}> */}
            {theme === "light" && (
                <motion.div
                    layoutId="theme"
                    variants={animationVariant}
                    initial="initial"
                    animate="animate"
                    exit="initial">
                    <IoSunnyOutline className="text-lg" />
                </motion.div>
            )}
            {theme === "dark" && (
                <motion.div
                    layoutId="theme"
                    variants={animationVariant}
                    initial="initial"
                    animate="animate"
                    exit="initial">
                    {" "}
                    <IoIosMoon className="text-lg" />
                </motion.div>
            )}
            {/* </AnimatePresence> */}
        </button>
    );
}
