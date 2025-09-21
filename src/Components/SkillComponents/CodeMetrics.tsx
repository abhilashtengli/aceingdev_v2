import { Card, CardContent } from "@/Components/ui/card";
import type { ClassNameProp } from "@/lib/utils";
import { IconCode, IconTrendingUp } from "@tabler/icons-react";



export function CodeMetricsCard({ className = "" }: ClassNameProp) {
  return (
    <Card className={`h-36 w-[20.5rem] overflow-hidden ${className}`}>
      <CardContent className="flex h-full flex-col justify-between overflow-hidden p-3 pt-4">
        <div className="flex items-center gap-2">
          <IconCode className="h-4 w-4 flex-shrink-0 text-blue-500" />
          <span className="text-foreground truncate text-sm font-medium">
            Code Metrics
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="text-foreground text-lg font-bold">12.5K</div>
            <div className="text-muted-foreground text-xs">Lines</div>
          </div>
          <div className="text-center">
            <div className="text-foreground text-lg font-bold">247</div>
            <div className="text-muted-foreground text-xs">Commits</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">94%</div>
            <div className="text-muted-foreground text-xs">Coverage</div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-green-600">
          <IconTrendingUp className="h-3 w-3" />
          <span className="text-xs">+8% this week</span>
        </div>
      </CardContent>
    </Card>
  );
}
