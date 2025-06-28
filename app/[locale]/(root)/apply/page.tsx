"use client";

import { Loader2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function ApplyPage() {
    const t = useTranslations("ApplyPage");
    const containerRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const locale = useLocale();

    useEffect(() => {
        const s = document.createElement("script");
        s.src = "https://embed.ycb.me";
        s.async = true;
        s.setAttribute("data-domain", `brzly-${locale}`);
        s.setAttribute("data-content", "all");
        s.setAttribute("data-displaymode", "dark");
        s.onload = () => setTimeout(() => setLoading(false), 2000);

        containerRef.current?.appendChild(s);

        return () => {
            containerRef.current?.removeChild(s);
            setLoading(true);
        };
    }, [locale]);

    return (
        <section className="pt-24 md:pt-40">
            <div className="mx-auto space-y-8 px-6 md:space-y-12">
                <div className="mx-auto max-w-3xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-3xl font-medium lg:text-4xl">{t("title")}</h2>
                </div>
                <div ref={containerRef} className="overflow-hidden rounded-xl" />
                {loading && <Loader2 className="animate-spin mx-auto" />}
            </div>
        </section>
    );
}
