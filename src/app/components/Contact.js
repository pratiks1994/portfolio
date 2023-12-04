"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import useSectionInView from "./hooks/useInViewHook";
import { motion } from "framer-motion";
import { sendMail } from "../../../actions/sendMail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
    const animationVariant = {
        initial: {
            opacity: 0,
        },
        animate: (idx) => ({
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        }),
    };

    const action = async (formData) => {
        const { data, error } = await sendMail(formData);

        if (error) {
            toast.error(error);
            return;
        }
        
        toast.success("Email sent successfully");
    };

    const ref = useSectionInView("Contact", 0.5);

    return (
        <motion.section
            variants={animationVariant}
            initial="initial"
            whileInView="animate"
            ref={ref}
            id="contact"
            className="scroll-mt-32 mb-20 sm:mb-22 w-[min(100%,38rem)] text-center">
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-gray-700 dark:text-white/60 -mt-6 text-sm">
                Please contact me at{" "}
                <a
                    className="underline"
                    href="mailto:pratiksavaliya071994@gmail.com">
                    pratiksavaliya071994@gmail.com{" "}
                </a>{" "}
            </p>
            <form
                className="mt-10 flex flex-col dark:text-black"
                action={action}>
                <input
                    className="h-12 p-4 rounded-lg border border-black/10 dark:bg-white/80 "
                    type="email"
                    required
                    name="senderEmail"
                    placeholder="Your Email"
                />
                <textarea
                    required
                    className="h-48 p-4 my-3 border border-black/10 rounded-lg dark:bg-white/80"
                    placeholder="Message"
                    name="message"
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
}
