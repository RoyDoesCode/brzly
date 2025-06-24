import { NextRequest, NextResponse } from "next/server";

import { PhoneEmailTemplate } from "@/components/email-templates";
import resend from "@/lib/resend";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        if (!data.phone) {
            return new NextResponse("Phone number missing", { status: 400 });
        }

        const response = await resend.emails.send({
            from: `BRZLY <website@brzly.com>`,
            to: ["roy@brzly.com", "kfir@brzly.com"],
            subject: "New Phone Number Submition From brzly.com",
            react: PhoneEmailTemplate(data),
        });

        if (response.error) {
            return new NextResponse(
                `Something went wrong when trying to send the admin email: ${JSON.stringify(response.error)}`,
                {
                    status: 500,
                }
            );
        }

        return NextResponse.json(response.data);
    } catch (error) {
        return new NextResponse(`Internal Server Error: ${JSON.stringify(error)}`, { status: 500 });
    }
}
