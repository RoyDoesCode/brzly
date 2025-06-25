import { BadgeDollarSign, Cpu, FastForward, GlobeLock } from "lucide-react";
import { useTranslations } from "next-intl";

const icons = [GlobeLock, FastForward, BadgeDollarSign, Cpu];

export default function Service1() {
    const t = useTranslations("ServicesPage.Service1");

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">{t("title")}</h2>
                    <p>{t("description")}</p>
                </div>

                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    {icons.map((Icon, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Icon className="size-4" />
                                <h3 className="text-sm font-medium">{t(`points.${index}.title`)}</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">{t(`points.${index}.description`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
