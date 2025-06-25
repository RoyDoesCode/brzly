import type { Metadata } from "next";

import "../globals.css";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";

import BGGradient from "@/components/ui/bg-gradient";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import QueryProvider from "@/providers/query-provider";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations("Meta");

    return { title: t("title"), description: t("description") };
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <html lang={locale} dir={locale === "he" ? "rtl" : "ltr"} className="dark" suppressHydrationWarning>
            <Script
                src="https://cdn.userway.org/widget.js"
                data-language={locale}
                data-color="#212121"
                data-widget_layout="full"
                data-account="pBMlEOnXjR"
                strategy="afterInteractive"
            />
            <body className="antialiased">
                <NextIntlClientProvider>
                    <QueryProvider>
                        {children}
                        <BGGradient />
                        <Toaster />
                    </QueryProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
