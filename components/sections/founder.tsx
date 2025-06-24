import { useTranslations } from "next-intl";
import Image from "next/image";
import { Logo } from "../logo";

export default function Founder() {
    const t = useTranslations("AboutPage.Founder");

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">{t("title")}</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-1 dark:from-zinc-700">
                            <Image
                                src="/assets/roy.jpg"
                                className="rounded-[15px] object-cover saturate-0"
                                alt="payments illustration dark"
                                width={1276}
                                height={1276}
                            />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">{t("description")}</p>

                        <div className="pt-6">
                            <blockquote className="border-s-4 ps-4">
                                <p>{t("quote")}</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">{t("name")}</cite>
                                    <Logo />
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
