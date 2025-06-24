import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { AIUsageChart } from "@/components/ui/ai-usage-chart";
import { Button } from "@/components/ui/button";

export default function Opportunity() {
    const t = useTranslations("HomePage.Opportunity");

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-10 md:grid-cols-2 md:gap-16">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-medium">{t("title")}</h2>
                        <AIUsageChart />
                    </div>
                    <div className="space-y-6 place-content-center">
                        <p>{t("description")}</p>
                        <h3 className="text-2xl font-medium">{t("tagline")}</h3>
                        <p>{t("body")}</p>
                        <Button asChild variant="secondary" size="sm" className="gap-1 pe-1.5">
                            <Link href="/#benefits">
                                <span>{t("cta")}</span>
                                <ChevronRight className="size-3 rtl:hidden" />
                                <ChevronLeft className="size-3 ltr:hidden" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
