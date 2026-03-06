"use client";

import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

const proseClasses =
  "prose prose-neutral max-w-none prose-headings:text-primary prose-headings:font-bold prose-p:leading-relaxed prose-ul:my-4 prose-ol:my-4 prose-li:my-1";

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  if (!content?.trim()) return null;

  return (
    <div className={cn(proseClasses, className)}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-primary mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-primary mt-8 mb-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-bold text-primary mt-6 mb-3">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-foreground/80 leading-relaxed mb-4">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 my-4 text-foreground/80">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 my-4 text-foreground/80">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-bold text-foreground">{children}</strong>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary hover:text-gold-accent underline transition-colors"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) =>
            src ? (
              <span className="block my-6">
                <Image
                  src={src}
                  alt={alt ?? ""}
                  width={800}
                  height={500}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </span>
            ) : null,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
