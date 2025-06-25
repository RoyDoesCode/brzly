import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

type Testimonial = {
    name: string;
    role: string;
    image: string;
    quote: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Jonathan Yombo",
        role: "Business Owner",
        image: "/assets/default-profile.jpg",
        quote: "BRZLY's local AI  are truly exceptional and incredibly practical. A genuine game-changer for businesses prioritizing data security and efficiency.",
    },
    {
        name: "איתי לוי",
        role: "בעל עסק",
        image: "/assets/man-6.jpg",
        quote: "גם ללא ידע מוקדם ב-AI, הטמעה בעסק שלי הייתה פשוטה ומהירה להפליא. התוצאות ניכרות מיד.",
    },
    {
        name: "Yucel Faruksahan",
        role: "Small Business Owner",
        image: "/assets/man-7.jpg",
        quote: "BRZLY's local AI solutions are a revelation. This is precisely what small and medium businesses need to leverage AI securely and effectively.",
    },
    {
        name: "שירה כהן",
        role: "מנהלת פיתוח עסקי",
        image: "/assets/default-profile.jpg",
        quote: "כבעלת עסק שחיפשה פתרון AI ללא סיכוני ענן, החברה פה היו התשובה המושלמת. בניגוד לפתרונות אחרים שדרשו ידע טכני או היו יקרים, ברזילי סיפקה פשטות, שליטה מלאה בנתונים וחיסכון בעלויות. היכולת להתאים את הפתרון לצרכים הספציפיים שלי, תוך שמירה על פרטיות מוחלטת, הייתה קריטית עבורי והפכה את התהליך לנגיש ויעיל.",
    },
    {
        name: "Shekinah Tshiokufila",
        role: "Head of Operations",
        image: "/assets/man-4.jpg",
        quote: "They are setting a new benchmark for AI in business. Their local solutions offer an incredibly easy and efficient path for companies seeking to boost productivity without compromising on data security. Truly a remarkable innovation.",
    },
    {
        name: "Oketa Fred",
        role: "IT Manager",
        image: "/assets/man-2.jpg",
        quote: "I'm thoroughly impressed with you! Your on-premise AI solutions are incredibly user-friendly and ensure maximum data security making business operations smoother and more reliable.",
    },
    {
        name: "נועם גולן",
        role: 'מנכ"ל חברה',
        image: "/assets/default-profile.jpg",
        quote: "ברזילי העניקה לנו כוח AI עצום, תוך שמירה על פשטות תפעולית וביטחון מידע מוחלט. זהו השילוב האידיאלי המאפשר לעסק שלנו ליהנות מיתרונות הבינה המלאכותית, כשהנתונים נשארים תמיד אצלנו.",
    },
    {
        name: "Joseph Kitheka",
        role: "Head of Technology",
        image: "/assets/man-9.jpg",
        quote: "The team have revolutionized how we approach AI in our business. Their on-premise solutions offer unparalleled flexibility and customization, ensuring our data remains private while significantly boosting efficiency. It's truly a game-changer for secure, modern business AI.",
    },
    {
        name: "אורי שקד",
        role: "מנהל טכנולוגיות",
        image: "/assets/man-10.jpg",
        quote: "ברזילי מציעה פתרונות AI מקומיים שהם לא רק יעילים אלא גם קלים להטמעה. זה איפשר לנו להתחיל במהירות וליהנות מביצועים מעולים, תוך שמירה על אבטחת המידע.",
    },
    {
        name: "Rodrigo Aguilar",
        role: "Business Owner",
        image: "/assets/default-profile.jpg",
        quote: "I highly recommend these guys :). Their on-premise AI solutions are incredibly user-friendly and ensure all our sensitive data remains securely within our own systems. It's the perfect way to enhance business operations with complete peace of mind.",
    },
    {
        name: "Eric Ampire",
        role: "Operations Director",
        image: "/assets/man-12.jpg",
        quote: "BRZLY's solutions are ideal for any business aiming to integrate AI seamlessly, even without prior technical expertise. The systems are intuitive, highly adaptable, and their dedicated support team ensures a smooth experience. I wholeheartedly recommend BRZLY for secure and effective business AI.",
    },
    {
        name: "ליאור חסון",
        role: "מנהל מערכות מידע",
        image: "/assets/man-13.jpg",
        quote: "הפתרונות של ברזילי מתוכננים בצורה כזו שגם עם ידע מינימלי ב-AI, ניתן להשיג תוצאות מדהימות. הם מאפשרים לעסק שלי ליהנות מבינה מלאכותית מתקדמת, בבטחה ובקלות.",
    },
];

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3));

export default function Testimonials() {
    const t = useTranslations("HomePage.Testimonials");

    return (
        <section id="testimonials">
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-title text-3xl font-semibold">{t("title")}</h2>
                        <p className="text-body mt-6">{t("description")}</p>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="space-y-3">
                                {chunk.map(({ name, role, quote, image }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage
                                                    alt={name}
                                                    src={image}
                                                    loading="lazy"
                                                    width="120"
                                                    height="120"
                                                />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-muted-foreground block text-sm tracking-wide">
                                                    {role}
                                                </span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
