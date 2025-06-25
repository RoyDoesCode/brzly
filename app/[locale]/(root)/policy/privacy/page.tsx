import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const icons = [Zap, Cpu, Lock, Sparkles];

export default function PrivacyPolicyPage() {
    const t = useTranslations("PrivacyPolicyPage");

    return (
        <section className="py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-16 pb-16 border-b">
                <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">{t("title")}</h2>
                    <p>{t("description")}</p>
                </div>

                <h3 className="text-center text-3xl font-medium lg:text-4xl">{t("points.title")}</h3>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    {icons.map((Icon, index) => (
                        <div key={index} className="space-y-2 text-center">
                            <div className="flex justify-center items-center gap-2">
                                <Icon className="size-4" />
                                <h3 className="text-sm font-medium">{t(`points.${index}.title`)}</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">{t(`points.${index}.description`)}</p>
                        </div>
                    ))}
                </div>

                <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-3xl font-medium lg:text-4xl">{t("title2")}</h2>
                    <p>{t("description2")}</p>
                </div>
            </div>

            {/*  */}
            <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-16">
                <div id="full-privacy-policy" className="mt-16 pt-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">{t("policy.headline")}</h2>
                    <p className="text-lg mb-8 leading-relaxed">
                        {t("policy.description")
                            .split("https://brzly.com")
                            .map((part, index) =>
                                index === 0 ? (
                                    part
                                ) : (
                                    <React.Fragment key={index}>
                                        <a href="https://brzly.com" className="text-blue-500 hover:underline">
                                            https://brzly.com
                                        </a>
                                        {part}
                                    </React.Fragment>
                                )
                            )}
                    </p>

                    <div className="space-y-8">
                        <section>
                            <h3 className="text-2xl font-semibold mb-3">{t("policy.section1.headline")}</h3>
                            <p className="text-lg mb-4 leading-relaxed">{t("policy.section1.description")}</p>
                            <ul className="list-disc pl-6 space-y-2 text-lg">
                                <li>
                                    <strong>{t("policy.section1.list.0.title")}</strong>
                                    <ul className="list-circle pl-6 space-y-1">
                                        <li>{t("policy.section1.list.0.items.0")}</li>
                                        <li>{t("policy.section1.list.0.items.1")}</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t("policy.section1.list.1.title")}</strong>
                                    <ul className="list-circle pl-6 space-y-1">
                                        <li>{t("policy.section1.list.1.items.0")}</li>
                                        <li>{t("policy.section1.list.1.items.1")}</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold mb-3">{t("policy.section2.headline")}</h3>
                            <p className="text-lg mb-4 leading-relaxed">{t("policy.section2.description")}</p>
                            <ul className="list-disc pl-6 space-y-2 text-lg">
                                <li>{t("policy.section2.list.0")}</li>
                                <li>{t("policy.section2.list.1")}</li>
                                <li>{t("policy.section2.list.2")}</li>
                                <li>{t("policy.section2.list.3")}</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold mb-3">{t("policy.section3.headline")}</h3>
                            <p className="text-lg mb-4 leading-relaxed">{t("policy.section3.description")}</p>
                            <ul className="list-disc pl-6 space-y-2 text-lg">
                                <li>{t("policy.section3.list.0")}</li>
                                <li>{t("policy.section3.list.1")}</li>
                                <li>{t("policy.section3.list.2")}</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold mb-3">{t("policy.section4.headline")}</h3>
                            <p className="text-lg mb-4 leading-relaxed">{t("policy.section4.paragraph1")}</p>
                            <p className="text-lg mb-4 leading-relaxed">{t("policy.section4.paragraph2")}</p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold mb-3">{t("policy.section5.headline")}</h3>
                            <p className="text-lg mb-4 leading-relaxed">{t("policy.section5.description")}</p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold mb-3">{t("policy.section6.headline")}</h3>
                            <p className="text-lg mb-4 leading-relaxed">{t("policy.section6.description")}</p>
                            <ul className="list-disc pl-6 space-y-2 text-lg">
                                <li>
                                    <strong>{t("policy.section6.list.0")}</strong>
                                </li>
                                <li>
                                    <strong>{t("policy.section6.list.1")}</strong>
                                </li>
                                <li>
                                    <strong>{t("policy.section6.list.2")}</strong>
                                </li>
                                <li>
                                    <strong>{t("policy.section6.list.3")}</strong>
                                </li>
                            </ul>
                            <p className="text-lg mb-4 leading-relaxed">{t("policy.section6.instruction")}</p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold mb-3">{t("policy.section7.headline")}</h3>
                            <p className="text-lg mb-4 leading-relaxed">{t("policy.section7.description")}</p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold mb-3">{t("policy.section8.headline")}</h3>
                            <p className="text-lg mb-4 leading-relaxed">{t("policy.section8.description")}</p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold mb-3">{t("policy.section9.headline")}</h3>
                            <p className="text-lg mb-4 leading-relaxed">{t("policy.section9.description")}</p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-semibold mb-3">{t("policy.section10.headline")}</h3>
                            <p className="text-lg mb-4 leading-relaxed">{t("policy.section10.description")}</p>
                            <p className="text-lg mb-4 leading-relaxed">
                                <strong>{t("policy.section10.companyName")}</strong>
                                <br />
                                {t("policy.section10.emailLabel")}{" "}
                                <a dir="ltr" href="mailto:roy@brzly.com" className="text-blue-500 hover:underline">
                                    {t("policy.section10.email")}
                                </a>
                                <br />
                                {t("policy.section10.phoneLabel")}{" "}
                                <a
                                    dir="ltr"
                                    href="https://wa.me/972527088557"
                                    className="text-blue-500 hover:underline"
                                >
                                    {t("policy.section10.phone")}
                                </a>
                            </p>
                            <p className="text-lg mb-4 leading-relaxed">
                                {t("policy.section10.effectiveDateLabel")} {t("policy.section10.effectiveDate")}
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}
