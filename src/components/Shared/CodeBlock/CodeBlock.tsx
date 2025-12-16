"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

type CodeBlockProps = {
  code: string;
  language?: string;
};

const CodeBlock = ({ code, language = "text" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const markdown = `\`\`\`${language}\n${code}\n\`\`\``;

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 text-xs text-slate-400">
        <span className="uppercase">{language}</span>
        <button
          onClick={copy}
          className="rounded bg-slate-800 px-2 py-1 text-xs hover:bg-slate-700"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre: ({ children }) => (
            <pre className="overflow-x-auto p-4 text-sm">{children}</pre>
          ),
          code: ({ children }) => (
            <code className="font-mono text-slate-100">{children}</code>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default CodeBlock;
