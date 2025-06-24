import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ReactNode } from "react";

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
                    <Link href="#">
                        <span>{t("cta")}</span>
                        <ChevronRight className="size-2 rtl:hidden" />
                        <ChevronLeft className="size-2 ltr:hidden" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
            {children}
        </div>
    </div>
);
