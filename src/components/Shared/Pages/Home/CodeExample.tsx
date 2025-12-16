import React from "react";

const CodeExample = () => {
  return (
    <section id="examples" className="bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Simple, powerful API
          </h2>
          <p className="text-lg text-slate-600">
            Define your schema with Zod, generate type-safe forms in seconds.
          </p>
        </div>
        <div className="rounded-xl border border-slate-300 bg-white overflow-hidden shadow-2xl">
          <div className="border-b border-slate-200 px-4 py-3 flex items-center gap-2 bg-slate-50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-slate-500 ml-2 font-medium">
              login-form.tsx
            </span>
          </div>
          <div className="p-6 overflow-x-auto bg-slate-900">
            <pre className="text-sm leading-relaxed font-mono">
              <code>
                <span className="text-purple-400">{"import"}</span>{" "}
                <span className="text-slate-300">{"{"}</span>{" "}
                <span className="text-blue-300">AppForm</span>{" "}
                <span className="text-slate-300">{"}"}</span>{" "}
                <span className="text-purple-400">{"from"}</span>{" "}
                <span className="text-green-400">
                  {'"@/components/app-form/app-form"'}
                </span>
                {"\n"}
                <span className="text-purple-400">{"import"}</span>{" "}
                <span className="text-slate-300">{"{"}</span>{" "}
                <span className="text-blue-300">AppInputField</span>{" "}
                <span className="text-slate-300">{"}"}</span>{" "}
                <span className="text-purple-400">{"from"}</span>{" "}
                <span className="text-green-400">
                  {'"@/components/app-form/app-input-field"'}
                </span>
                {"\n"}
                <span className="text-purple-400">{"import"}</span>{" "}
                <span className="text-slate-300">{"{"}</span>{" "}
                <span className="text-blue-300">z</span>{" "}
                <span className="text-slate-300">{"}"}</span>{" "}
                <span className="text-purple-400">{"from"}</span>{" "}
                <span className="text-green-400">{'"zod"'}</span>
                {"\n\n"}
                <span className="text-purple-400">{"const"}</span>{" "}
                <span className="text-blue-300">loginSchema</span>{" "}
                <span className="text-slate-300">{"="}</span>{" "}
                <span className="text-blue-300">z</span>.
                <span className="text-yellow-300">object</span>
                {"({\n"}
                {"  "}
                <span className="text-blue-300">email</span>
                {": "}
                <span className="text-blue-300">z</span>.
                <span className="text-yellow-300">string</span>().
                <span className="text-yellow-300">email</span>(),{"\n"}
                {"  "}
                <span className="text-blue-300">password</span>
                {": "}
                <span className="text-blue-300">z</span>.
                <span className="text-yellow-300">string</span>().
                <span className="text-yellow-300">min</span>(
                <span className="text-orange-400">6</span>),{"\n"}
                {"})\n\n"}
                <span className="text-purple-400">
                  {"export function"}
                </span>{" "}
                <span className="text-yellow-300">LoginForm</span>
                {"() {\n"}
                {"  "}
                <span className="text-purple-400">{"return"}</span> {"(\n"}
                {"    "}
                <span className="text-slate-300">{"<"}</span>
                <span className="text-pink-400">AppForm</span>{" "}
                <span className="text-blue-300">schema</span>
                {"={"}
                <span className="text-yellow-300">loginSchema</span>
                {"} "}
                <span className="text-blue-300">onSubmit</span>
                {"={"}
                <span className="text-yellow-300">handleSubmit</span>
                {"}>\n"}
                {"      {({ "}
                <span className="text-blue-300">register</span>
                {", "}
                <span className="text-blue-300">formState</span>
                {" }) => (\n"}
                {"        "}
                <span className="text-slate-300">{"<>"}</span>
                {"\n"}
                {"          "}
                <span className="text-slate-300">{"<"}</span>
                <span className="text-pink-400">AppInputField</span>{" "}
                <span className="text-blue-300">name</span>
                {"="}
                <span className="text-green-400">{'"email"'}</span>{" "}
                <span className="text-blue-300">label</span>
                {"="}
                <span className="text-green-400">{'"Email"'}</span>
                {" />\n"}
                {"          "}
                <span className="text-slate-300">{"<"}</span>
                <span className="text-pink-400">AppInputField</span>{" "}
                <span className="text-blue-300">name</span>
                {"="}
                <span className="text-green-400">{'"password"'}</span>{" "}
                <span className="text-blue-300">type</span>
                {"="}
                <span className="text-green-400">{'"password"'}</span>
                {" />\n"}
                {"        "}
                <span className="text-slate-300">{"</>"}</span>
                {"\n"}
                {"      )}\n"}
                {"    "}
                <span className="text-slate-300">{"</"}</span>
                <span className="text-pink-400">AppForm</span>
                <span className="text-slate-300">{">"}</span>
                {"\n"}
                {"  )\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
