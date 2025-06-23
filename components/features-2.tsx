import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

const challengesIcons = [Zap, Settings2, Sparkles];
const solutionsIcons = [Zap, Settings2, Sparkles];

export default function Features() {
    const t = useTranslations("HomePage.Features");

    return (
        <section className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{t("title")}</h2>
                    <p className="mt-4">{t("description1")}</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
                    {challengesIcons.map((Icon, index) => (
                        <Card key={index} className="group bg-transparent border-0 shadow-none">
                            <CardHeader className="pb-3">
                                <CardDecorator1>
                                    <Icon className="size-6" aria-hidden />
                                </CardDecorator1>

                                <h3 className="mt-6 font-medium">{t(`challenges.${index}.title`)}</h3>
                            </CardHeader>

                            <CardContent>
                                <p className="text-sm">{t(`challenges.${index}.description`)}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center">
                    <p className="mt-8">{t("description2")}</p>
                </div>
                <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-12 bg-transparent py-0">
                    {challengesIcons.map((Icon, index) => (
                        <div key={index} className="group shadow-zinc-950/5 py-6">
                            <CardHeader className="pb-3">
                                <CardDecorator2>
                                    <Icon className="size-6" aria-hidden />
                                </CardDecorator2>

                                <h3 className="mt-6 font-medium">{t(`solutions.${index}.title`)}</h3>
                            </CardHeader>

                            <CardContent>
                                <p className="text-sm">{t(`solutions.${index}.description`)}</p>
                            </CardContent>
                        </div>
                    ))}
                </Card>
            </div>
        </section>
    );
}

const CardDecorator1 = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="dark:bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t bg-white">
            {children}
        </div>
    </div>
);

const CardDecorator2 = ({ children }: { children: ReactNode }) => (
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
