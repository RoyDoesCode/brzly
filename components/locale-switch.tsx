"use client";

import { useLocale } from "next-intl";
import React, { useMemo } from "react";

import { usePathname } from "@/i18n/navigation";

import { Button } from "./ui/button";

const locales = ["en", "he"];

export default function LocaleSwitch() {
    const pathname = usePathname();
    const locale = useLocale();

    const nextLocale = useMemo(() => locales[(locales.indexOf(locale as string) + 1) % locales.length], [locale]);

    return (
        <Button
            variant="link"
            onClick={() => (window.location.href = `/${nextLocale}${pathname}`)}
            className="uppercase mt-1"
        >
            {nextLocale}
        </Button>
    );
}
