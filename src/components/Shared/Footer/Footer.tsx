import { Package } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-blue-600">
              <Package className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold">app-form</span>
            <span className="mx-2 text-slate-600">•</span>
            <span className="text-slate-400">ISC License</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/#features"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#installation"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Installation
            </Link>
            <Link
              href="/examples"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Examples
            </Link>
            <Link
              href="https://github.com/Aminul667/app-form"
              className="text-slate-400 hover:text-white transition-colors"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
