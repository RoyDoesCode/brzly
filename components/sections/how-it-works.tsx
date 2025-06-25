"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function HowItWorks() {
    const t = useTranslations("HomePage.HowItWorks");

    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div id="how-it-works" className="w-full font-sans md:px-10" ref={containerRef}>
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">{t("title")}</h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                    {t("description")}
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex justify-start not-first:pt-10 not-first:md:pt-40 md:gap-10">
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 right-auto rtl:right-3 rtl:md:right-3 rtl:left-auto w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:ps-20 md:text-4xl">
                                {t(`steps.${index}.title`)}
                            </h3>
                        </div>

                        <div className="relative ps-20 pe-4 md:pe-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-start">{t(`steps.${index}.title`)}</h3>
                            <div>
                                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                                    {t(`steps.${index}.description`)}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <Image
                                        src="https://assets.aceternity.com/templates/startup-1.webp"
                                        alt="startup template"
                                        width={500}
                                        height={500}
                                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                                    />
                                    <Image
                                        src="https://assets.aceternity.com/templates/startup-2.webp"
                                        alt="startup template"
                                        width={500}
                                        height={500}
                                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                                    />
                                    <Image
                                        src="https://assets.aceternity.com/templates/startup-3.webp"
                                        alt="startup template"
                                        width={500}
                                        height={500}
                                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                                    />
                                    <Image
                                        src="https://assets.aceternity.com/templates/startup-4.webp"
                                        alt="startup template"
                                        width={500}
                                        height={500}
                                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 right-auto rtl:right-8 rtl:left-auto top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
