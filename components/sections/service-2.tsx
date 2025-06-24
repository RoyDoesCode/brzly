import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Service2() {
    const t = useTranslations("ServicesPage.Service2");
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">{t("title")}</h2>
                    <div className="space-y-6">
                        <p>{t("description")}</p>
                        <Button asChild variant="secondary" size="sm" className="gap-1 pe-1.5">
                            <Link href="/#faqs">
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
