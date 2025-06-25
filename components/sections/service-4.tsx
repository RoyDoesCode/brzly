import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Service4() {
    const t = useTranslations("ServicesPage.Service4");
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container flex flex-col items-center mx-auto max-w-5xl px-6 gap-10">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{t("title")}</h2>
                    <p className="mt-4 max-w-2xl mx-auto">{t("description")}</p>
                </div>
                <Button asChild variant="secondary" size="sm" className="gap-1 pe-1.5">
                    <Link href="/contact">
                        <span>{t("cta")}</span>
                        <ChevronRight className="size-2 rtl:hidden" />
                        <ChevronLeft className="size-2 ltr:hidden" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
