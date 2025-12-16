import React from "react";

const Instalation = () => {
  return (
    <section
      id="installation"
      className="bg-slate-50 border-y border-slate-200"
    >
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Get started in seconds
          </h2>
          <p className="text-lg text-slate-600">
            Install the CLI and start generating form components.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border-2 border-slate-300 bg-white p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-slate-900">
                  Install the package
                </h3>
                <div className="bg-slate-900 text-white rounded-lg px-4 py-3 font-mono text-sm">
                  <span className="text-slate-400">$</span>{" "}
                  <span className="text-slate-300">npm install</span>{" "}
                  <span className="text-blue-400">app-form</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 border-slate-300 bg-white p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-slate-900">
                  List available components
                </h3>
                <div className="bg-slate-900 text-white rounded-lg px-4 py-3 font-mono text-sm mb-3">
                  <span className="text-slate-400">$</span>{" "}
                  <span className="text-blue-400">app-form</span>{" "}
                  <span className="text-slate-300">list</span>
                </div>
                <div className="bg-slate-50 rounded-lg px-4 py-3 text-sm text-slate-700 font-mono border border-slate-200">
                  app-form{"\n"}
                  app-input-field{"\n"}
                  app-checkbox{"\n"}
                  app-select-item{"\n"}
                  app-file-uploader
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 border-slate-300 bg-white p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-slate-900">
                  Add components as needed
                </h3>
                <div className="bg-slate-900 text-white rounded-lg px-4 py-3 font-mono text-sm mb-2">
                  <span className="text-slate-400">$</span>{" "}
                  <span className="text-blue-400">app-form</span>{" "}
                  <span className="text-slate-300">add</span>{" "}
                  <span className="text-green-400">app-input-field</span>
                </div>
                <p className="text-sm text-slate-600">
                  Or install everything at once with{" "}
                  <code className="bg-slate-100 px-2 py-0.5 rounded text-blue-600 font-mono">
                    app-form init
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instalation;
