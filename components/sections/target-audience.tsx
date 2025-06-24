import { Activity, DraftingCompass, Mail, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const icons = [Mail, Zap, Activity, DraftingCompass, DraftingCompass];

export default function TargetAudience() {
    const t = useTranslations("HomePage.TargetAudience");

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-center place-items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pe-6 lg:pe-0">
                            <h2 className="text-4xl font-semibold lg:text-5xl">{t("title")}</h2>
                            <p className="mt-6">{t("description")}</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            {icons.map((Icon, index) => (
                                <li key={index}>
                                    <Icon className="size-5" />
                                    {t(`audience.${index}`)}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="border-border/50 max-w-[500px] relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-1 dark:from-zinc-700">
                            <Image
                                src="/assets/roy.jpg"
                                className="rounded-[15px] h-full object-cover saturate-0"
                                alt="Roy Barzilay"
                                width={1276}
                                height={1276}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
