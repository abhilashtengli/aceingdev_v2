import { Card, CardContent } from "@/Components/ui/card";
import type { ClassNameProp } from "@/lib/utils";
import { IconCode, IconTrendingUp } from "@tabler/icons-react";

export function CodeMetricsCard({ className = "" }: ClassNameProp) {
  return (
    <Card className={`h-24 w-60 overflow-hidden ${className}`}>
      <CardContent className="flex h-full flex-col justify-between overflow-hidden p-2 pt-3">
        <div className="flex items-center gap-2">
          <IconCode className="h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
          <span className="text-foreground truncate text-xs font-medium">
            Code Metrics
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="text-foreground text-base font-bold">12.5K</div>
            <div className="text-muted-foreground text-[10px]">Lines</div>
          </div>
          <div className="text-center">
            <div className="text-foreground text-base font-bold">247</div>
            <div className="text-muted-foreground text-[10px]">Commits</div>
          </div>
          <div className="text-center">
            <div className="text-base font-bold text-green-600">94%</div>
            <div className="text-muted-foreground text-[10px]">Coverage</div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-green-600">
          <IconTrendingUp className="h-2.5 w-2.5" />
          <span className="text-[10px]">+8% this week</span>
        </div>
      </CardContent>
    </Card>
  );
}
