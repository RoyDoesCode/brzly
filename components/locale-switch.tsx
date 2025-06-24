"use client";

import React, { useMemo } from "react";
import { Button } from "./ui/button";
import { useParams, useRouter } from "next/navigation";
import { usePathname } from "@/i18n/navigation";

const locales = ["en", "he"];

export default function LocaleSwitch() {
    const router = useRouter();
    const pathname = usePathname();
    const { locale } = useParams();

    const nextLocale = useMemo(() => locales[(locales.indexOf(locale as string) + 1) % locales.length], [locale]);

    return (
        <Button variant="link" onClick={() => router.push(`/${nextLocale}${pathname}`)} className="uppercase mt-1">
            {nextLocale}
        </Button>
    );
}
