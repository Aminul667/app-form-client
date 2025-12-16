import { Check, Code2, Package, Puzzle, Terminal, Zap } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-slate-900">
            Everything you need to build forms fast
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            Built with developer experience in mind. Install only what you need,
            when you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Check,
              title: "React Hook Form + Zod",
              description:
                "Built on industry-standard libraries for type-safe validation and optimal performance.",
            },
            {
              icon: Puzzle,
              title: "Reusable Components",
              description:
                "Input, Select, Checkbox, File Upload and more. Each component is fully customizable.",
            },
            {
              icon: Terminal,
              title: "Smart CLI",
              description:
                "Install components one-by-one (shadcn-style) or all at once. Your choice.",
            },
            {
              icon: Package,
              title: "Dependency Aware",
              description:
                "Automatically installs internal dependencies and warns about required packages.",
            },
            {
              icon: Code2,
              title: "Full TypeScript",
              description:
                "Complete type safety from schema to form submission. Catch errors at compile time.",
            },
            {
              icon: Zap,
              title: "Next.js Ready",
              description:
                'Works seamlessly with Next.js App Router with "use client" support out of the box.',
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group rounded-xl border-2 border-slate-200 bg-white p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="rounded-lg bg-blue-50 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
