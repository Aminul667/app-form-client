import { Package } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-slate-900"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600">
                <Package className="h-5 w-5 text-white" />
              </div>
              <span>app-form</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link
                href="#features"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#installation"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Installation
              </Link>
              <Link
                href="/examples"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Examples
              </Link>
              <Link
                href="https://github.com"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
          <Link
            href="#installation"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
