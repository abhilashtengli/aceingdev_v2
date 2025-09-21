import { useState } from "react";
import { Card } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Bot, Send, User } from "lucide-react";
import { cn, type ClassNameProp } from "@/lib/utils";
import { Button } from "../ui/button";

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
        "bg-card mx-auto w-full max-w-sm border-0 shadow-lg",
        className,
      )}
    >
      {/* Header */}
      <div className="border-border flex items-center gap-3 rounded-t-lg border-b bg-gradient-to-r from-blue-50 to-purple-50 p-4 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
          <Bot className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-foreground font-semibold">AI Assistant</h3>
        <div className="ml-auto">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="bg-muted/20 h-80 space-y-4 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex max-w-[85%] gap-2",
              message.sender === "user"
                ? "ml-auto flex-row-reverse"
                : "mr-auto",
            )}
          >
            <div
              className={cn(
                "mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full",
                message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-purple-100 dark:bg-purple-900/30",
              )}
            >
              {message.sender === "user" ? (
                <User className="h-3 w-3" />
              ) : (
                <Bot className="h-3 w-3 text-purple-600 dark:text-purple-400" />
              )}
            </div>
            <div
              className={cn(
                "rounded-xl px-3 py-2 text-sm leading-relaxed",
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
      <div className="border-border bg-background border-t p-4">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="border-border flex-1 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
          <Button
            onClick={handleSendMessage}
            size="sm"
            className="rounded-xl bg-blue-600 px-3 text-white hover:bg-blue-700"
            disabled={!inputValue.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
