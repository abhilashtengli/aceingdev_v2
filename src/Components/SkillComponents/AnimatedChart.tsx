import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { TrendingUp } from "lucide-react";
import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { cn, type ClassNameProp } from "@/lib/utils";

// Change it to your needs
const animationConfig = {
  glowWidth: 300,
};

const chartData = [
  { month: "January", desktop: 420, mobile: 310 },
  { month: "February", desktop: 890, mobile: 520 },
  { month: "March", desktop: 440, mobile: 420 },
  { month: "April", desktop: 610, mobile: 480 },
  { month: "May", desktop: 320, mobile: 590 },
  { month: "June", desktop: 860, mobile: 670 },
  { month: "July", desktop: 510, mobile: 390 },
  { month: "August", desktop: 930, mobile: 720 },
  { month: "September", desktop: 670, mobile: 510 },
  { month: "October", desktop: 580, mobile: 460 },
  { month: "November", desktop: 920, mobile: 690 },
  { month: "December", desktop: 350, mobile: 260 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function AnimatedHighlightedAreaChart({ className }: ClassNameProp) {
  const [xAxis, setXAxis] = React.useState<number | null>(null);

  return (
    <Card className={cn("bg-white", className)}>
      <CardHeader>
        <CardTitle className="text-neutral-700">
          Highlighted Area Chart
          <Badge
            variant="outline"
            className="ml-2 border-none bg-red-400/10 text-green-400"
          >
            <TrendingUp className="h-4 w-4" />
            <span>9.8%</span>
          </Badge>
        </CardTitle>
        <CardDescription>
          Traffic trends from the last 3 Quarters
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            onMouseMove={(e) => setXAxis(e.chartX as number)}
            onMouseLeave={() => setXAxis(null)}
            className=""
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient
                id="animated-highlighted-mask-grad"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="white" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient
                id="animated-highlighted-grad-desktop"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#0d47a1" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#0d47a1" stopOpacity={0} />
              </linearGradient>
              <linearGradient
                id="animated-highlighted-grad-mobile"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0}
                />
              </linearGradient>
              {xAxis && (
                <mask id="animated-highlighted-mask">
                  <rect
                    x={xAxis - animationConfig.glowWidth / 2}
                    y={0}
                    width={animationConfig.glowWidth}
                    height="100%"
                    fill="url(#animated-highlighted-mask-grad)"
                  />
                </mask>
              )}
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill={"url(#animated-highlighted-grad-mobile)"}
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
              strokeWidth={0.8}
              mask="url(#animated-highlighted-mask)"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill={"url(#animated-highlighted-grad-desktop)"}
              fillOpacity={0.4}
              stroke="#0d47a1"
              stackId="a"
              strokeWidth={0.8}
              mask="url(#animated-highlighted-mask)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
