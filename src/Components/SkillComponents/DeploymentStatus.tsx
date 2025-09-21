"use client";

import { Card, CardContent } from "@/Components/ui/card";
import type { ClassNameProp } from "@/lib/utils";
import { IconRocket, IconCheck, IconClock } from "@tabler/icons-react";



export function DeploymentStatusCard({
  className = "",
}: ClassNameProp) {
  return (
    <Card className={`h-36 w-[20.5rem] overflow-hidden ${className}`}>
      <CardContent className="flex h-full flex-col justify-between overflow-hidden p-3 pt-5">
        <div className="flex items-center gap-2">
          <IconRocket className="h-4 w-4 flex-shrink-0 text-purple-500" />
          <span className="text-foreground truncate text-sm font-medium">
            Deployments
          </span>
        </div>

        <div className="space-y-1">
          <div className="mt-1 flex items-center justify-between">
            <span className="text-muted-foreground text-sm">Production</span>
            <div className="flex items-center gap-1">
              <IconCheck className="h-3 w-3 text-green-500" />
              <span className="text-sm text-green-600">v2.1.4</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">Staging</span>
            <div className="flex items-center gap-1">
              <IconClock className="h-3 w-3 text-yellow-500" />
              <span className="text-sm text-yellow-600">v2.1.5</span>
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
