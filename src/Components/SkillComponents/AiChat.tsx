"use client";

import type React from "react";

import { useState } from "react";
import { Card } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Bot, Send, User } from "lucide-react";
import { cn, type ClassNameProp } from "@/lib/utils";
import { Button } from "@/Components/ui/button";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const sampleMessages: Message[] = [
  {
    id: "1",
    content: "Hello! I'm your AI assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: "2",
    content: "Can you help me with my project?",
    sender: "user",
    timestamp: new Date(Date.now() - 240000),
  },
  {
    id: "3",
    content:
      "Of course! I'd be happy to help with your project. What specific area would you like assistance with?",
    sender: "bot",
    timestamp: new Date(Date.now() - 180000),
  },
];

export function AiChatWidget({ className }: ClassNameProp) {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thanks for your message! I'm processing your request...",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card
      className={cn(
        "bg-card mx-auto w-full max-w-xs border-0 shadow-lg",
        className,
      )}
    >
      {/* Header */}
      <div className="border-border flex items-center gap-2 rounded-t-lg border-b bg-gradient-to-r from-blue-50 to-purple-50 p-3 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
          <Bot className="h-3 w-3 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-foreground text-sm font-semibold">AI Assistant</h3>
        <div className="ml-auto">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="bg-muted/20 h-56 space-y-3 overflow-y-auto p-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex max-w-[85%] gap-1.5",
              message.sender === "user"
                ? "ml-auto flex-row-reverse"
                : "mr-auto",
            )}
          >
            <div
              className={cn(
                "mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full",
                message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-purple-100 dark:bg-purple-900/30",
              )}
            >
              {message.sender === "user" ? (
                <User className="h-2.5 w-2.5" />
              ) : (
                <Bot className="h-2.5 w-2.5 text-purple-600 dark:text-purple-400" />
              )}
            </div>
            <div
              className={cn(
                "rounded-xl px-2.5 py-1.5 text-xs leading-relaxed",
                message.sender === "user"
                  ? "rounded-br-sm bg-blue-600 text-white"
                  : "dark:bg-card border-border text-foreground rounded-bl-sm border bg-white",
              )}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-border bg-background border-t p-3">
        <div className="flex gap-1.5">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="border-border flex-1 rounded-xl text-xs focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
          <Button
            onClick={handleSendMessage}
            size="sm"
            className="rounded-xl bg-blue-600 px-2.5 text-white hover:bg-blue-700"
            disabled={!inputValue.trim()}
          >
            <Send className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
