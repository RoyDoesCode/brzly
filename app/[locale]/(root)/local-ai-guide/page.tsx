import React from "react";

export default function LocalAIGuidePage() {
    return (
        <section className="pb-16 pt-32 md:pb-32 md:pt-48">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                {/* title */}
                <header className="space-y-2">
                    <h3 className="text-3xl font-bold">מדריך: להפעיל AI מקומי בקלי-קלות</h3>
                    <p className="italic">
                        BRZLY | רועי ברזילי <small>30.06.2025</small>
                    </p>
                    <hr className="border-gray-700" />
                </header>

                {/* 0 */}
                <section className="space-y-5">
                    <h2 className="text-2xl font-bold">0. מה זה בכלל "מודל" ולמה צריך אותו?</h2>
                    <p>
                        דמיינו קובץ שהוא <strong>מוח מלאכותי</strong>. כמו ספר גדול עם המון עמודים:
                    </p>
                    <ul className="list-disc list-inside space-y-1 rtl:text-right">
                        <li>
                            <strong>עמודים = "פרמטרים"</strong>. יותר עמודים ← המוח יודע יותר דברים, אבל גם שוקל יותר.
                        </li>
                        <li>המודל יושב על המחשב שלכם ומחכה שתשאלו שאלות.</li>
                    </ul>
                    <p>
                        אתם לא צריכים להבין מה יש בתוך העמודים - רק להוריד את הקובץ ולהפעיל אותו, כמו שמריצים סרט או
                        משחק.
                    </p>
                </section>

                <hr className="border-gray-700" />

                {/* 1 */}
                <section className="space-y-5">
                    <h2 className="text-2xl font-bold">1. האם המחשב שלי מספיק חזק?</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-700 text-right rtl:text-right">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-2 font-bold">אם יש לכם…</th>
                                    <th className="px-4 py-2 font-bold">זה יספיק ל-90 % מהמשימות</th>
                                    <th className="px-4 py-2 font-bold">למה?</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                <tr>
                                    <td className="px-4 py-2 font-semibold">מחשב נייד / שולחני שנקנה אחרי 2022</td>
                                    <td className="px-4 py-2">כן</td>
                                    <td className="px-4 py-2">יש לכם לפחות 8 GB זיכרון ומעבד מודרני.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-semibold">Mac עם שבב M1 / M2 / M3</td>
                                    <td className="px-4 py-2">כן, ואפילו מהר יותר</td>
                                    <td className="px-4 py-2">השבב כולל מעבד-על ל-AI.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-semibold">מחשב ישן מ-2015</td>
                                    <td className="px-4 py-2">יעבוד, רק קצת לאט</td>
                                    <td className="px-4 py-2">נבחר מודל קטן.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm italic">*(הטבלה מבוססת על מחקר עמוק באינטרנט)*</p>
                    <blockquote className="border-r-4 border-gray-500 pr-4 text-right">
                        <strong>כלל אצבע:</strong> אם המחשב שלכם מריץ Zoom בלי להשתעל - הוא יריץ גם מודל קטן.
                    </blockquote>
                </section>

                <hr className="border-gray-700" />

                {/* 2 */}
                <section className="space-y-5">
                    <h2 className="text-2xl font-bold">2. שתי דרכים להתחיל - ללא "חורים שחורים" טכניים</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-700 text-right rtl:text-right">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-2 font-bold">הכלי</th>
                                    <th className="px-4 py-2 font-bold">למה הוא הכי ידידותי?</th>
                                    <th className="px-4 py-2 font-bold">איך מתקינים?</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                <tr>
                                    <td className="px-4 py-2 font-semibold">GPT4All</td>
                                    <td className="px-4 py-2">
                                        אשף התקנה בעברית-כמעט-מלאה. לוחצים "Next" 4 פעמים וזהו.
                                    </td>
                                    <td className="px-4 py-2">הורדה מהאתר gpt4all.io ← מפעילים קובץ Setup.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-semibold">LM Studio</td>
                                    <td className="px-4 py-2">
                                        חלון יפה: "בחר מודל ולחץ Play". תומך Windows, macOS, Linux.
                                    </td>
                                    <td className="px-4 py-2">
                                        הורדה מ-lmstudio.ai ← לגרור לאפליקציות (Mac) או "Next" (Win).
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <blockquote className="border-r-4 border-gray-500 pr-4 text-right">
                        <strong>שאלה נפוצה:</strong> *"מה עם טרמינל?"* - שוכחים ממנו בשלב הזה. נשתמש רק בעכבר.
                    </blockquote>
                </section>

                <hr className="border-gray-700" />

                {/* 3 */}
                <section className="space-y-5">
                    <h2 className="text-2xl font-bold">3. הורדה והפעלה - צעד אחר צעד (ללא קוד)</h2>
                    <ol className="list-decimal list-inside space-y-1 rtl:text-right">
                        <li>פותחים את GPT4All או LM Studio.</li>
                        <li>האפליקציה מציעה רשימת "מודלים". בחרו "mistral-7b" (שם קצר ונחמד).</li>
                        <li>
                            לחצו <strong>Download</strong>. יירד קובץ של \~4 GB - כמו סרט HD.
                        </li>
                        <li>
                            כפתור <strong>Chat</strong> או <strong>Play</strong> נדלק. לחצו.
                        </li>
                        <li>תשאלו בעברית: "מה מכינים מארבעה תפוחי אדמה?" - וקבלו תשובה!</li>
                    </ol>
                    <p>
                        <strong>*אין אינטרנט?*</strong> ברגע שהקובץ ירד, אפשר לנתק Wi-Fi - זה רץ מקומית.
                    </p>
                </section>

                <hr className="border-gray-700" />

                {/* 4 */}
                <section className="space-y-5">
                    <h2 className="text-2xl font-bold">4. מילון מושגים קטנטן (בלי מתמטיקה)</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-700 text-right rtl:text-right">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-4 py-2 font-bold">מושג</th>
                                    <th className="px-4 py-2 font-bold">הסבר של גן חובה</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                <tr>
                                    <td className="px-4 py-2 font-semibold">מודל</td>
                                    <td className="px-4 py-2">מוח מלאכותי שמבין טקסט.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-semibold">פרמטרים / B</td>
                                    <td className="px-4 py-2">
                                        מספר העמודים בספר-המוח. 7 B ≈ ספר דק; 70 B ≈ אנציקלופדיה.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-semibold">RAM</td>
                                    <td className="px-4 py-2">
                                        הזיכרון הזמני של המחשב. מודל גדול צריך יותר "שולחן עבודה" לפרוס עליו דפים.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-semibold">GPU</td>
                                    <td className="px-4 py-2">"שרירי-על" לציורים ומשחקים; עוזרים גם ל-AI לרוץ מהר.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-semibold">כיווץ Q4/Q5</td>
                                    <td className="px-4 py-2">
                                        כמו קובץ ZIP - מקטין את המודל בלי לפגוע יותר מדי באיכות.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <hr className="border-gray-700" />

                {/* 5 */}
                <section className="space-y-5">
                    <h2 className="text-2xl font-bold">5. שאלות נפוצות בקלי קלות</h2>
                    <ol className="list-decimal list-inside space-y-4 rtl:text-right">
                        <li>
                            <p className="font-semibold">כמה מקום זה תופס?</p>
                            מודל קטן ← 4 GB, מודל גדול ← 25 GB. תמיד אפשר למחוק ולהתקין אחר.
                        </li>
                        <li>
                            <p className="font-semibold">זה יקר?</p>
                            אפס שקלים אחרי שהורדתם. התשלום היחיד הוא חשמל כמו בכל תוכנה.
                        </li>
                        <li>
                            <p className="font-semibold">האם זה בטוח?</p>
                            כל מה שאתם כותבים נשמר רק אצלכם. אין ענן, אין ריגול.
                        </li>
                        <li>
                            <p className="font-semibold">המחשב מתחמם?</p>
                            עברו למודל קטן יותר או השאירו מאוורר פתוח; זה זמני בזמן חישוב כבד.
                        </li>
                    </ol>
                </section>

                <hr className="border-gray-700" />

                {/* 6 */}
                <section className="space-y-5">
                    <h2 className="text-2xl font-bold">6. התקדמות עדינה למתקדמים (כשתרגישו נוח)</h2>
                    <ul className="list-disc list-inside space-y-2 rtl:text-right">
                        <li>
                            <strong>Ollama</strong> - כלי טרמינל קצר: התקנה בלחיצה ←{" "}
                            <code className="bg-gray-800 px-1 py-0.5 rounded">ollama run mistral</code>. (שווה למי שלא
                            מפחד להעתיק-הדבק שורה אחת).
                        </li>
                        <li>
                            <strong>OpenWebUI</strong> - נותן ממשק בדפדפן עם טאבים, היסטוריית צ’אט וחברים.
                        </li>
                    </ul>
                    <p className="italic">*לא חובה לגעת בזה עד שתרגישו סקרנים.*</p>
                </section>

                <hr className="border-gray-700" />

                {/* 7 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">7. סיכום ב-20 מילים</h2>
                    <p>
                        הורידו GPT4All או LM Studio ← לחצו Download על מודל קטן ← לחצו Chat ← תשאלו כל שאלה. זהו, יש לכם
                        AI פרטי בבית!
                    </p>
                    <p>בהצלחה, ותרגישו חופשי לשאול אם משהו עדיין מבלבל 😊</p>
                </section>
            </div>
        </section>
    );
}
