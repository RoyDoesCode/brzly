import { getTranslations } from "next-intl/server";
import React from "react";

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
    phone?: string;
    website?: string;
}

export function AdminEmailTemplate({ name, email, message, phone, website }: EmailTemplateProps) {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6, color: "#333", padding: "20px" }}>
            <h1 style={{ fontSize: "20px", marginBottom: "20px" }}>New Contact Form Submission</h1>
            <p>
                <strong>Name:</strong> {name}
            </p>
            <p>
                <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
            </p>
            {phone && (
                <p>
                    <strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a>
                </p>
            )}
            {website && (
                <p>
                    <strong>Website:</strong> <a href={website}>{website}</a>
                </p>
            )}
            <div style={{ marginTop: "20px" }}>
                <strong>Message:</strong>
                <div
                    style={{
                        border: "1px solid #ccc",
                        padding: "15px",
                        backgroundColor: "#f9f9f9",
                        marginTop: "5px",
                        whiteSpace: "pre-wrap",
                    }}
                >
                    {message}
                </div>
            </div>
        </div>
    );
}

interface SenderEmailTemplateProps {
    name: string;
}

export async function SenderEmailTemplate({ name }: SenderEmailTemplateProps) {
    const t = await getTranslations("ContactPage.SenderEmailTemplate");

    return (
        <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6, color: "#333", padding: "20px" }}>
            <h1 style={{ fontSize: "20px", marginBottom: "20px" }}>
                {t("h1")}, {name}!
            </h1>

            <p>{t("p1")}</p>

            <p>
                {t("p2")} <a href="https://wa.me/972527088557">+972-527-088-557</a>
            </p>

            <p style={{ marginTop: "30px" }}>
                {t("regards")},
                <br />
                {t("team")}
            </p>
        </div>
    );
}
