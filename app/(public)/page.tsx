import { ArrowRight, CheckCircle2, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import Features from "@/components/public/features";
import PublicHero from "@/components/public/hero";

const hierarchyLevels = [
  "International",
  "Continental",
  "Country",
  "State/Province",
  "Municipality",
  "Branch",
  "Location",
];

const benefits = [
  {
    id: 1,
    text: "Mobile-first design optimized for any device",
  },
  {
    id: 2,
    text: "Secure cloud-based infrastructure",
  },
  {
    id: 3,
    text: "Real-time data synchronization",
  },
  {
    id: 4,
    text: "Scalable from single branch to global operations",
  },
  {
    id: 5,
    text: "API-first architecture for seamless integrations",
  },
  {
    id: 6,
    text: "Inclusive of all faith traditions and spiritual organizations",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <PublicHero />

      {/* Features Section */}
      <Features />

      {/* Hierarchy Section */}
      <section className="bg-zinc-50 px-4 py-20 dark:bg-zinc-900/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                Built for Global Organizations
              </h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                FaithSphere supports complex hierarchical structures, from
                international headquarters to individual locations, with
                complete data isolation and appropriate oversight at every
                level.
              </p>
              <div className="mt-8 space-y-3">
                {hierarchyLevels.map((level, index) => (
                  <div key={level} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                      {index + 1}
                    </div>
                    <span className="text-zinc-900 dark:text-zinc-50">
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="mb-6 font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Key Benefits
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600 dark:text-green-400" />
                    <span className="text-zinc-700 dark:text-zinc-300">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusive Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-linear-to-r from-purple-600 to-pink-600 px-8 py-16 text-center text-white sm:px-16">
            <Heart className="mx-auto mb-6 h-16 w-16" />
            <h2 className="font-serif text-4xl font-bold">
              Inclusive by Design
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-purple-100">
              FaithSphere welcomes all faith traditions—Christianity, Islam,
              Hinduism, Buddhism, Judaism, African spiritual traditions, and
              more. Our platform adapts to your unique needs while respecting
              your sacred practices.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Ready to Transform Your Community?
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Join thousands of faith organizations already using FaithSphere to
            connect, grow, and serve their communities better.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg"
            >
              Start Your Free Trial
              <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="rounded-full border border-zinc-300 px-8 py-4 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900">
              Schedule a Demo
            </button>
          </div>
          <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50 px-4 py-12 dark:border-zinc-800 dark:bg-zinc-900/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <span className="font-serif text-xl font-bold text-zinc-900 dark:text-zinc-50">
                FaithSphere
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © 2025 FaithSphere. Empowering faith communities worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
