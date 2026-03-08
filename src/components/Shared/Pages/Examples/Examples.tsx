"use client";

import { Code2, Package } from "lucide-react";
import { useState } from "react";
import LoginExample from "./LoginExample";
import LoginExampleCode from "./LoginExampleCode";
import BasicFunction from "./BasicFunction";
import BasicFunctionCode from "./BasicFunctionCode";
import WatchFunction from "./WatchFunction";
import WatchFunctionCode from "./WatchFunctionCode";
import InputFieldArrayExample from "./InputFieldArrayExample";
import InputFieldArrayExampleCode from "./InputFieldArrayExampleCode";

const Examples = () => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [activeExample, setActiveExample] = useState(0);

  const examples = [
    {
      title: "Basic Form",
      description: "Simple form without any UI components",
      preview: <LoginExample />,
      code: <LoginExampleCode />,
    },
    {
      title: "Basic Functions",
      description: "Basic functions from react-hook-form",
      preview: <BasicFunction />,
      code: <BasicFunctionCode />,
    },
    {
      title: "Advanced Functionality",
      description: "Advance functions from react-hook-form",
      preview: <WatchFunction />,
      code: <WatchFunctionCode />,
    },
    {
      title: "Input Field Array",
      description: "Dynamic array field with text and numbers",
      preview: <InputFieldArrayExample />,
      code: <InputFieldArrayExampleCode />,
    },
  ];

  const currentExample = examples[activeExample];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3 border border-slate-200 rounded-lg p-4">
            <div className="sticky top-24">
              <h2 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">
                Examples
              </h2>
              <div className="space-y-1">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExample(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      activeExample === index
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div className="font-semibold">{example.title}</div>
                    <div
                      className={`text-xs mt-0.5 ${
                        activeExample === index
                          ? "text-blue-100"
                          : "text-slate-500"
                      }`}
                    >
                      {example.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Tab Buttons */}
            <div className="flex items-center gap-2 mb-6 border-b border-slate-200">
              <button
                onClick={() => setActiveTab("preview")}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === "preview"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                <Package className="h-4 w-4" />
                Preview
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === "code"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                <Code2 className="h-4 w-4" />
                Code
              </button>
            </div>

            {/* Tab Content */}
            <div className="rounded-xl border-2 border-slate-200 bg-white overflow-hidden shadow-lg">
              {activeTab === "preview" ? (
                <div className="p-8 min-h-125 bg-slate-50">
                  {currentExample.preview}
                </div>
              ) : (
                <div className="p-6 bg-slate-900 overflow-x-auto min-h-125">
                  <pre className="text-sm leading-relaxed">
                    <code className="text-slate-300 font-mono">
                      {currentExample.code}
                    </code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Examples;
