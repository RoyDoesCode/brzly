"use client";
import DottedMap from "dotted-map";
import { Activity, FastForward, GlobeLock } from "lucide-react";
import { useTranslations } from "next-intl";
import { Area, AreaChart, CartesianGrid } from "recharts";

import { Logo } from "@/components/logo";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export default function Benefits() {
    const t = useTranslations("HomePage.Benefits");

    return (
        <section id="benefits" className="px-4 py-16 md:py-32">
            <div className="mx-auto max-w-2xl text-center space-y-6 mb-10">
                <h2 className="text-4xl font-medium">{t("title")}</h2>
                <h3>{t("description")}</h3>
            </div>
            <div className="mx-auto grid max-w-5xl border md:grid-cols-2">
                <div>
                    <div className="p-6 sm:p-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <GlobeLock className="size-4" />
                            {t("benefits.private.tag")}
                        </span>

                        <p className="mt-8 text-2xl font-semibold">{t("benefits.private.title")}</p>
                    </div>

                    <div aria-hidden className="relative">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <div className="rounded-(--radius) bg-background z-1 dark:bg-muted relative flex size-fit w-fit items-center gap-2 border px-3 py-1 text-xs font-medium shadow-md shadow-zinc-950/5">
                                <span className="text-lg">🇨🇩</span> {t("benefits.private.subtitle")}
                            </div>
                            <div className="rounded-(--radius) bg-background absolute inset-2 -bottom-2 mx-auto border px-3 py-4 text-xs font-medium shadow-md shadow-zinc-950/5 dark:bg-zinc-900"></div>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="bg-radial z-1 to-background absolute inset-0 from-transparent to-75%"></div>
                            <Map />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
                    <div className="relative z-10">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <FastForward className="size-4" />
                            {t("benefits.efficient.tag")}
                        </span>

                        <p className="my-8 text-2xl font-semibold">{t("benefits.efficient.title")}</p>
                    </div>
                    <div aria-hidden className="flex flex-col gap-8">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="flex size-5 rounded-full border">
                                    <Logo className="m-auto size-3" />
                                </span>
                                <span className="text-muted-foreground text-xs">Sat 22 Feb</span>
                            </div>
                            <div className="rounded-(--radius) bg-background mt-1.5 w-3/5 border p-3 text-xs">
                                {t("benefits.efficient.msg1")}
                            </div>
                        </div>

                        <div>
                            <div className="rounded-(--radius) mb-1 ms-auto w-3/5 bg-blue-600 p-3 text-xs text-white">
                                {t("benefits.efficient.msg2")}
                            </div>
                            <span className="text-muted-foreground block text-end text-xs">Now</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-full border-y p-12">
                    <p className="text-center text-4xl font-semibold lg:text-7xl">{t("benefits.tailored.title")}</p>
                </div>
                <div className="relative col-span-full">
                    <div className="absolute z-10 left-0 text-left max-w-xl px-6 pe-12 pt-6 md:px-12 md:pt-12">
                        <span className="text-muted-foreground flex items-center rtl:justify-end gap-2">
                            <Activity className="size-4" />
                            {t("benefits.simple.tag")}
                        </span>

                        <p className="my-8 text-2xl font-semibold">
                            {t("benefits.simple.title1")}{" "}
                            <span className="text-muted-foreground"> {t("benefits.simple.title2")}</span>
                        </p>
                    </div>
                    <MonitoringChart />
                </div>
            </div>
        </section>
    );
}

const map = new DottedMap({ height: 55, grid: "diagonal" });

const points = map.getPoints();

const svgOptions = {
    backgroundColor: "var(--color-background)",
    color: "currentColor",
    radius: 0.15,
};

const Map = () => {
    const viewBox = `0 0 120 60`;
    return (
        <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle key={index} cx={point.x} cy={point.y} r={svgOptions.radius} fill={svgOptions.color} />
            ))}
        </svg>
    );
};

const chartConfig = {
    desktop: {
        label: "DMs",
        color: "#2563eb",
    },
    mobile: {
        label: "Emails",
        color: "#60a5fa",
    },
} satisfies ChartConfig;

const chartData = [
    { month: "May", desktop: 56, mobile: 224 },
    { month: "June", desktop: 56, mobile: 224 },
    { month: "January", desktop: 126, mobile: 252 },
    { month: "February", desktop: 205, mobile: 410 },
    { month: "March", desktop: 200, mobile: 126 },
    { month: "April", desktop: 400, mobile: 800 },
];

const MonitoringChart = () => {
    return (
        <ChartContainer className="h-120 aspect-auto md:h-96" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}
            >
                <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip active cursor={false} content={<ChartTooltipContent className="dark:bg-muted" />} />
                <Area
                    strokeWidth={2}
                    dataKey="mobile"
                    type="stepBefore"
                    fill="url(#fillMobile)"
                    fillOpacity={0.1}
                    stroke="var(--color-mobile)"
                    stackId="a"
                />
                <Area
                    strokeWidth={2}
                    dataKey="desktop"
                    type="stepBefore"
                    fill="url(#fillDesktop)"
                    fillOpacity={0.1}
                    stroke="var(--color-desktop)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    );
};
