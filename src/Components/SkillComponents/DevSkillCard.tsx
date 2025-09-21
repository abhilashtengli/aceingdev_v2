"use client";
import { useState } from "react";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { cn } from "@/lib/utils";

export function DevStatusCard({ className }: { className?: string }) {
  const [selectedRepo, setSelectedRepo] = useState("main-app");

  const repos = [
    {
      id: "main-app",
      name: "Main App",
      branch: "feature/auth-system",
      status: "review",
      commits: 12,
    },
    {
      id: "api-service",
      name: "API Service",
      branch: "hotfix/security-patch",
      status: "merged",
      commits: 3,
    },
    {
      id: "mobile-app",
      name: "Mobile App",
      branch: "develop",
      status: "building",
      commits: 8,
    },
  ];

  const currentRepo =
    repos.find((repo) => repo.id === selectedRepo) || repos[0];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "review":
        return "text-amber-600 bg-amber-50 border-amber-200";
      case "merged":
        return "text-green-600 bg-green-50 border-green-200";
      case "building":
        return "text-blue-600 bg-blue-50 border-blue-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "review":
        return (
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        );
      case "merged":
        return (
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        );
      case "building":
        return (
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Card
      className={cn(
        "bg-background/80 h-fit w-full max-w-md border-0 shadow-lg backdrop-blur-sm",
        className,
      )}
    >
      <CardHeader className="flex-shrink-0 space-y-2 text-center">
        <div className="mb-2 flex items-center justify-center">
          <div className="bg-primary/10 rounded-full p-2">
            <svg
              className="text-primary h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">Code Review</CardTitle>
        <CardDescription>
          Track your development progress and code reviews
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-6 overflow-y-auto">
        {/* Repository Selector */}
        <div className="space-y-2">
          <label className="text-muted-foreground text-sm font-medium">
            Repository
          </label>
          <div className="bg-muted flex rounded-lg p-1">
            {repos.map((repo) => (
              <button
                key={repo.id}
                type="button"
                onClick={() => setSelectedRepo(repo.id)}
                className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all ${
                  selectedRepo === repo.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {repo.name}
              </button>
            ))}
          </div>
        </div>

        {/* Current Branch Info */}
        <div className="space-y-4">
          <div className="bg-muted/50 flex items-center justify-between rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <svg
                className="text-muted-foreground h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="text-sm font-medium">{currentRepo.branch}</p>
                <p className="text-muted-foreground text-xs">
                  {currentRepo.commits} commits
                </p>
              </div>
            </div>
            <div
              className={`flex items-center space-x-1 rounded-full border px-2 py-1 text-xs font-medium ${getStatusColor(currentRepo.status)}`}
            >
              {getStatusIcon(currentRepo.status)}
              <span className="capitalize">{currentRepo.status}</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-green-600">+247</div>
              <div className="text-muted-foreground text-xs">Lines Added</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-red-600">-89</div>
              <div className="text-muted-foreground text-xs">Lines Removed</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-blue-600">12</div>
              <div className="text-muted-foreground text-xs">Files Changed</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button className="w-full">
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              View Pull Request
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm">
                <svg
                  className="mr-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Diff
              </Button>
              <Button variant="outline" size="sm">
                <svg
                  className="mr-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v1a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7H3a1 1 0 01-1-1V5a1 1 0 011-1h4z"
                  />
                </svg>
                Tests
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
