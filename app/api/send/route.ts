import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";
import { AdminEmailTemplate, SenderEmailTemplate } from "@/components/email-templates";
import { getTranslations } from "next-intl/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        if (!data.name || !data.email || !data.message) {
            return new NextResponse("Insufficient data", { status: 400 });
        }

        const adminEmail = await resend.emails.send({
            from: `${data.name} <website@brzly.com>`,
            to: ["roy@brzly.com", "kfir@brzly.com"],
            subject: "New Form Submition From brzly.com",
            react: AdminEmailTemplate(data),
        });

        if (adminEmail.error) {
            return new NextResponse(
                `Something went wrong when trying to send the admin email: ${JSON.stringify(adminEmail.error)}`,
                {
                    status: 500,
                }
            );
        }

        const t = await getTranslations("ContactPage.SenderEmailTemplate");
        const senderEmail = await resend.emails.send({
            from: `BRZLY Team <noreply@brzly.com>`,
            to: [data.email],
            subject: t("subjectLine"),
            react: SenderEmailTemplate({ name: data.name.split(" ")[0] }),
        });

        if (senderEmail.error) {
            return new NextResponse(
                `Something went wrong when trying to send the sender email: ${JSON.stringify(senderEmail.error)}`,
                {
                    status: 500,
                }
            );
        }

        return NextResponse.json({ admin: adminEmail.data, sender: senderEmail.data });
    } catch (error) {
        return new NextResponse(`Internal Server Error: ${JSON.stringify(error)}`, { status: 500 });
    }
}
