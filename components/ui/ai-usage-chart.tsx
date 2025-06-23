"use client";

import * as React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { ChartContainer, ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useTranslations } from "next-intl";

type DataPoint = { date: string; value: number };

const data: DataPoint[] = [
    { date: "2023-06-01", value: 55 },
    { date: "2023-09-01", value: 59 },
    { date: "2023-12-01", value: 63 },
    { date: "2024-03-01", value: 67 },
    { date: "2024-06-01", value: 72 },
    { date: "2024-09-01", value: 74 },
    { date: "2024-12-01", value: 76 },
    { date: "2025-03-01", value: 77 },
    { date: "2025-06-01", value: 78 },
];

const chartConfig: ChartConfig = {
    value: {
        label: "%",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig;

export function AIUsageChart() {
    const t = useTranslations("HomePage.ContentSection");

    return (
        <div className="relative mt-10">
            <div className="bg-linear-to-b max-w-[500px] relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                <div className="bg-background rounded-[15px] p-4">
                    <h1 className="font-medium">{t("chartTitle")}</h1>
                    <h2 className="text-sm mb-4">{t("chartDescription")}</h2>
                    <ChartContainer config={chartConfig}>
                        <LineChart data={data} margin={{ left: -40, right: 12 }} accessibilityLayer>
                            <CartesianGrid vertical={false} strokeDasharray="3 3" />
                            <XAxis
                                dataKey="date"
                                tickFormatter={(d) => new Date(d).toLocaleDateString("en-US", { month: "short" })}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis tick={false} axisLine={false} domain={[50, "auto"]} />
                            <ChartTooltip content={<ChartTooltipContent nameKey="value" />} />
                            <Line type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={2} />
                        </LineChart>
                    </ChartContainer>
                </div>
            </div>
        </div>
    );
}
