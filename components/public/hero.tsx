import { ArrowRightIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";
import Stats from "../shared/stats";

const PublicHero = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-zinc-950" />
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            <GlobeIcon className="h-4 w-4" />
            Trusted by faith communities worldwide
          </div>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
            Empower Your Faith
            <br />
            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Community
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            FaithSphere is a comprehensive multi-tenant SaaS platform designed
            for churches, mosques, temples, spiritual centers, and faith-based
            organizations of all traditions. Manage your global community with
            ease.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg"
            >
              Start Free Trial
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <button
              type="button"
              className="rounded-full border border-zinc-300 px-8 py-4 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 sm:grid-cols-3">
          <Stats title="10,000+" subTitle="Active Organizations" />
          <Stats title="50+" subTitle="Countries Worldwide" />
          <Stats title="99.9%" subTitle="Uptime Guarantee" />
        </div>
      </div>
    </section>
  );
};

export default PublicHero;
