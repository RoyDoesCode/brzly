import { Logo } from "@/components/logo";
import { useTranslations } from "next-intl";
import {
    BiLogoInstagramAlt,
    BiLogoTiktok,
    BiLogoYoutube,
    BiLogoLinkedin,
    BiLogoWhatsapp,
    BiEnvelope,
} from "react-icons/bi";
import {
    TbBrandInstagramFilled,
    TbBrandTiktokFilled,
    TbBrandYoutubeFilled,
    TbBrandLinkedinFilled,
    TbBrandWhatsappFilled,
    TbMailFilled,
} from "react-icons/tb";

import Link from "next/link";
import LocaleSwitch from "./locale-switch";

export default function Footer() {
    const t = useTranslations("Footer");

    const links = [
        { title: t("items.services"), href: "/services" },
        { title: t("items.about"), href: "/about" },
        { title: t("items.howItWorks"), href: "/#how-it-works" },
        { title: t("items.faqs"), href: "/#faqs" },
        { title: t("items.contact"), href: "/contact" },
        { title: t("items.privacy"), href: "/policy/privacy" },
    ];

    const socials = [
        { icon: TbBrandInstagramFilled, href: "https://www.instagram.com/brzlyai" },
        { icon: TbBrandTiktokFilled, href: "https://www.tiktok.com/@brzlyai" },
        { icon: TbBrandYoutubeFilled, href: "https://www.youtube.com/@brzlyai" },
        { icon: TbBrandLinkedinFilled, href: "https://www.linkedin.com/in/brzlyai" },
        { icon: TbBrandWhatsappFilled, href: "https://wa.me/972527088558" },
        { icon: TbMailFilled, href: "mailto:roy@brzly.com" },
    ];

    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div dir="ltr" className="flex items-center mx-auto size-fit gap-4">
                    <Link href="/" aria-label="go home">
                        <Logo />
                    </Link>
                    <LocaleSwitch />
                </div>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150"
                        >
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {socials.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary block"
                        >
                            <item.icon className="h-6 w-auto" />
                        </Link>
                    ))}
                </div>
                <span className="text-muted-foreground block text-center text-sm">
                    {" "}
                    © {new Date().getFullYear()} {t("rights")}
                </span>
            </div>
        </footer>
    );
}
