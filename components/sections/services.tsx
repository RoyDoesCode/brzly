import { Gemini, Replit, MagicUI, VSCodium, MediaWiki, GooglePaLM } from "@/components/logos";
import { LogoIcon } from "@/components/logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
    const t = useTranslations("ServicesPage.Services");

    return (
        <section>
            <div className="py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="relative mx-auto w-fit">
                        <div
                            role="presentation"
                            className="bg-radial to-transparent dark:to-background absolute inset-0 z-10 from-transparent to-75%"
                        ></div>
                        <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
                            <IntegrationCard>
                                <Image src="/assets/logos/slack.png" alt="slack" width={256} height={256} />
                            </IntegrationCard>
                            <IntegrationCard>
                                <Image
                                    src="/assets/logos/ollama.png"
                                    alt="ollama"
                                    width={256}
                                    height={256}
                                    className="!h-9"
                                />
                            </IntegrationCard>
                        </div>
                        <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                            <IntegrationCard>
                                <Image src="/assets/logos/deepseek.png" alt="deepseek" width={256} height={256} />
                            </IntegrationCard>
                            <IntegrationCard
                                borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                                className="dark:bg-white/10"
                            >
                                <LogoIcon />
                            </IntegrationCard>
                            <IntegrationCard>
                                <Image src="/assets/logos/n8n.png" alt="n8n" width={256} height={256} />
                            </IntegrationCard>
                        </div>

                        <div className="mx-auto flex w-fit justify-center gap-2">
                            <IntegrationCard>
                                <Image src="/assets/logos/openwebui.png" alt="openwebui" width={256} height={256} />
                            </IntegrationCard>

                            <IntegrationCard>
                                <Image src="/assets/logos/lmstudio.png" alt="lmstudio" width={256} height={256} />
                            </IntegrationCard>
                        </div>
                    </div>
                    <div className="mx-auto mt-6 max-w-lg space-y-6 text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">{t("title")}</h2>
                        <p className="text-muted-foreground">{t("description")}</p>

                        <Button variant="outline" size="sm" asChild>
                            <Link href="/contact">{t("cta")}</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

const IntegrationCard = ({
    children,
    className,
    borderClassName,
}: {
    children: React.ReactNode;
    className?: string;
    borderClassName?: string;
}) => {
    return (
        <div className={cn("bg-background relative flex size-20 rounded-xl dark:bg-transparent", className)}>
            <div
                role="presentation"
                className={cn(
                    "absolute inset-0 rounded-xl border border-black/20 dark:border-white/25",
                    borderClassName
                )}
            />
            <div className="relative z-20 m-auto size-fit *:h-8 *:w-auto">{children}</div>
        </div>
    );
};
