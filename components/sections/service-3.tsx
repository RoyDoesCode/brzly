import { ChartLine, LayoutGrid, Users, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const icons = [Zap, Users, ChartLine, LayoutGrid];

export default function Service3() {
    const t = useTranslations("ServicesPage.Service3");
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">{t("title")}</h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p className="text-body">{t("description")}</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            {icons.map((Icon, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Icon className="size-4" />
                                        <h3 className="text-sm font-medium">{t(`points.${index}.title`)}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">{t(`points.${index}.description`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                        <div
                            aria-hidden
                            className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% rtl:bg-linear-to-r md:block"
                        ></div>
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                            <Image
                                src="/assets/charts.webp"
                                className="hidden rounded-[12px] dark:block"
                                alt="payments illustration dark"
                                width={1207}
                                height={929}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
