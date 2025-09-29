"use client";

import { Card, CardContent } from "@/Components/ui/card";
import type { ClassNameProp } from "@/lib/utils";
import { IconRocket, IconCheck, IconClock } from "@tabler/icons-react";

export function DeploymentStatusCard({ className = "" }: ClassNameProp) {
  return (
    <Card className={`h-24 w-60 overflow-hidden ${className}`}>
      <CardContent className="flex h-full flex-col justify-between overflow-hidden p-2 pt-3">
        <div className="flex items-center gap-2">
          <IconRocket className="h-3.5 w-3.5 flex-shrink-0 text-purple-500" />
          <span className="text-foreground truncate text-xs font-medium">
            Deployments
          </span>
        </div>

        <div className="space-y-0.5">
          <div className="mt-1 flex items-center justify-between">
            <span className="text-muted-foreground text-xs">Production</span>
            <div className="flex items-center gap-1">
              <IconCheck className="h-2.5 w-2.5 text-green-500" />
              <span className="text-xs text-green-600">v2.1.4</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-xs">Staging</span>
            <div className="flex items-center gap-1">
              <IconClock className="h-2.5 w-2.5 text-yellow-500" />
              <span className="text-xs text-yellow-600">v2.1.5</span>
            </div>
          </div>
        </div>

        {/* <div className="text-muted-foreground text-xs">
          Last deployed 2 minutes ago
        </div> */}
      </CardContent>
    </Card>
  );
}
