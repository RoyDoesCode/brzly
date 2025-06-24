import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function About() {
    const t = useTranslations("AboutPage.About");

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <img
                    className="rounded-(--radius) invert-100"
                    src="/assets/visual-banner.jpg"
                    alt="team image"
                    height=""
                    width=""
                    loading="lazy"
                />

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">{t("title")}</h2>
                    <div className="space-y-6">
                        <p>{t("description")}</p>

                        <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>{t("cta")}</span>
                                <ChevronRight className="size-2 rtl:hidden" />
                                <ChevronLeft className="size-2 ltr:hidden" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
