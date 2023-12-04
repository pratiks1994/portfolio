"use client"
import { motion } from "framer-motion";
import React from "react";

export default function Divider() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{delay:0.3}}
            className="bg-gray-200 my-24 h-16 w-1 dark:bg-gray-700 rounded-full hidden sm:block"></motion.div>
    );
}
