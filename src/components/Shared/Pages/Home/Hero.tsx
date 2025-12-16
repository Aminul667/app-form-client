import { ArrowRight, Terminal, Zap } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen bg-linear-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-8">
            <Zap className="h-3.5 w-3.5" />
            <span>Type-safe forms with React Hook Form + Zod</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance text-slate-900">
            Reusable form components.{" "}
            <span className="text-blue-600">Built for developers.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
            A CLI for generating type-safe, reusable form components using React
            Hook Form, Zod, Tailwind CSS, and shadcn/ui.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="#installation"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-6 py-3 text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#examples"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white text-slate-700 px-6 py-3 text-base font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              View Examples
            </Link>
          </div>
          <div className="inline-flex items-center gap-3 bg-slate-900 text-white rounded-lg px-5 py-3 text-sm font-mono shadow-xl">
            <Terminal className="h-4 w-4 text-slate-400" />
            <span className="text-slate-300">npm install</span>
            <span className="text-blue-400 font-semibold">app-form</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
