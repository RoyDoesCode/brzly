"use client";

import axios from "axios";
import { Loader2, SendHorizonal } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters long")
        .max(100, "Name can't exceed 100 characters")
        .regex(/^[A-Za-zא-ת]+([\s'-][A-Za-zא-ת]+)*$/, "Please enter a valid full name in English"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
        .string()
        .optional()
        .refine((val) => !val || /^(\+?\d{1,3})?[\s.-]?\(?\d{1,4}?\)?[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/.test(val), {
            message: "Please enter a valid phone number",
        }),
    website: z
        .string()
        .optional()
        .refine(
            (val) => {
                if (!val) return true;
                try {
                    new URL(val);
                    return true;
                } catch {
                    return false;
                }
            },
            { message: "Invalid website URL" }
        ),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters long")
        .max(2000, "Message is too long (2000 max)"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
    const t = useTranslations("ContactPage.Contact");
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            website: "",
            message: "",
        },
    });

    const { mutate: send, isPending } = useMutation({
        mutationKey: ["send-email"],
        mutationFn: async (data: FormValues) => (await axios.post("/api/send", data)).data,
        onError: () => toast(t("form.error"), { className: "bg-destructive" }),
        onSuccess: () => {
            toast(t("form.success"));
            form.reset();
        },
    });

    return (
        <section className="py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">{t("title")}</h1>

                <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h2 className="mb-3 text-lg font-semibold">{t("founder")}</h2>
                            <Link
                                href="mailto:roy@brzly.com"
                                className="text-lg text-blue-600 hover:underline dark:text-blue-400"
                            >
                                roy@brzly.com
                            </Link>
                            <Link href="https://wa.me/972527088557">
                                <p dir="ltr" className="mt-3 text-sm w-fit">
                                    +972 527 088 557
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h3 className="mb-3 text-lg font-semibold">{t("coFounder")}</h3>
                            <Link
                                href="mailto:kfir@brzly.com"
                                className="text-lg text-blue-600 hover:underline dark:text-blue-400"
                            >
                                kfir@brzly.com
                            </Link>
                            <Link href="https://wa.me/972522990048">
                                <p dir="ltr" className="mt-3 text-sm w-fit">
                                    +972 522 990 048
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit((d) => send(d))} className="border px-4 py-12 lg:px-0 lg:py-24">
                        <Card className="mx-auto max-w-xl p-8 sm:p-16">
                            <h3 className="text-xl font-semibold">{t("formTitle")}</h3>
                            <p className="mt-4 text-sm">{t("formDescription")}</p>

                            <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t("form.name.label")} *</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t("form.email.label")} *</FormLabel>
                                            <FormControl>
                                                <Input type="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t("form.phone.label")}</FormLabel>
                                            <FormControl>
                                                <PhoneInput {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="website"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t("form.website.label")}</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t("form.message.label")} *</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder={t("form.message.placeholder")}
                                                    className="h-32"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" disabled={isPending}>
                                    {t("form.submit")}
                                    <SendHorizonal
                                        className={cn("my-auto size-3 rtl:rotate-180", isPending && "hidden")}
                                        strokeWidth={2}
                                    />
                                    <Loader2 className={cn("animate-spin size-3", !isPending && "hidden")} />
                                </Button>
                            </div>
                        </Card>
                    </form>
                </Form>
            </div>
        </section>
    );
}
