import { SparklesIcon } from "lucide-react";
import Link from "next/link";

const PublicNavigation = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <SparklesIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <span className="font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              FaithSphere
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavigation;
