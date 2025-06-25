"use client";

import axios from "axios";
import { Loader2, SendHorizonal } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";

import { PhoneInput } from "../ui/phone-input";

export default function CallToAction() {
    const t = useTranslations("HomePage.CallToAction");
    const [phone, setPhone] = useState("");

    const { mutate: send, isPending } = useMutation({
        mutationKey: ["send-email"],
        mutationFn: async () => (await axios.post("/api/send/phone", { phone })).data,
        onError: () => toast(t("error"), { className: "bg-destructive" }),
        onSuccess: () => {
            toast(t("success"));
            setPhone("");
        },
    });

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{t("title")}</h2>
                    <p className="mt-4">{t("description")}</p>

                    <form
                        dir="ltr"
                        onSubmit={(e) => {
                            e.preventDefault();
                            send();
                        }}
                        className="mx-auto mt-10 max-w-sm lg:mt-12"
                    >
                        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-xl border pe-1 pt-px shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                            <FaWhatsapp className="text-caption pointer-events-none absolute inset-y-0 left-3 right-auto my-auto size-5" />

                            <PhoneInput
                                className="[&_>_*]:border-none [&_>_*]:rounded-none [&_>_*]:!bg-transparent py-1 pl-7 [&_>_*]:focus-visible:ring-0"
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                            />

                            <div className="md:pe-1.5 lg:pe-0">
                                <Button type="submit" disabled={isPending} className="rounded-(--radius)">
                                    <span className={cn("hidden md:block", isPending && "md:hidden")}>{t("cta")}</span>
                                    <SendHorizonal
                                        className={cn(
                                            "relative mx-auto size-5 md:hidden rtl:rotate-180",
                                            isPending && "hidden"
                                        )}
                                        strokeWidth={2}
                                    />
                                    <Loader2 className={cn("animate-spin size-3 mx-3", !isPending && "hidden")} />
                                </Button>
                            </div>
                        </div>
                    </form>
                    <p className="mt-8 text-sm max-w-sm mx-auto">{t("ctaLine")}</p>
                </div>
            </div>
        </section>
    );
}
