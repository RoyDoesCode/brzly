import { useTranslations } from "next-intl";

export default function FAQs() {
    const t = useTranslations("HomePage.FAQs");

    return (
        <section id="faqs" className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <div className="relative text-center lg:text-start">
                        <div className="sticky top-42">
                            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">{t("title")}</h2>
                            <p>{t("description")}</p>
                        </div>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="py-6">
                                <h3 className="font-medium">{t(`items.${index}.q`)}</h3>
                                <p className="text-muted-foreground mt-4">{t(`items.${index}.a`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
