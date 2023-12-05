"use client";
import React, { useContext } from "react";
import SectionHeading from "./SectionHeading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";
import useSectionInView from "./hooks/useInViewHook";
import { themeContext } from "../context/themeContext";

export default function Experiance() {

    const ref = useSectionInView("Experience")
    const { theme } = useContext(themeContext);
    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>Experiance</SectionHeading>
            <VerticalTimeline
                lineColor=""
                className="vertical-timeline-element--work">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background:
                                    theme === "light"
                                        ? "#f3f4f6"
                                        : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.4rem solid #9ca3af"
                                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                border: "2px",
                                background:
                                    theme === "light"
                                        ? "white"
                                        : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}>
                            <h3 className="font-semibold capitalize">
                                {item.title}
                            </h3>
                            <p className="font-sm text-xs text-gray-400 !mt-0">{item.location}</p>
                            <p className="!mt-2 !font-normal text-gray-700 dark:text-white/70">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}
