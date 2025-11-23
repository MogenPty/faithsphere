import Link from "next/link";
import {
  Users,
  Globe,
  Shield,
  BarChart3,
  MessageSquare,
  Calendar,
  Building2,
  Heart,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: Users,
    title: "Member Management",
    description:
      "Complete profiles, family relations, membership status, and attendance tracking in one unified system.",
  },
  {
    id: 2,
    icon: Building2,
    title: "Multi-Tenant Architecture",
    description:
      "Hierarchical structure from international to branch level with complete data isolation and security.",
  },
  {
    id: 3,
    icon: Shield,
    title: "Role-Based Access Control",
    description:
      "Customizable permissions at every level ensuring data security while enabling appropriate oversight.",
  },
  {
    id: 4,
    icon: MessageSquare,
    title: "Unified Communication",
    description:
      "Messaging and notifications across all levels of your organization, keeping everyone connected.",
  },
  {
    id: 5,
    icon: Calendar,
    title: "Event Management",
    description:
      "Schedule, track, and manage events, meetings, and activities at every organizational level.",
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Insights & Reporting",
    description:
      "Customized dashboards and analytics providing real-time insights for data-driven decisions.",
  },
];

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
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-purple-600 dark:text-purple-400" />
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

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-zinc-950" />
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              <Globe className="h-4 w-4" />
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
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="rounded-full border border-zinc-300 px-8 py-4 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-purple-600 dark:text-purple-400">
                10,000+
              </div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Active Organizations
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-purple-600 dark:text-purple-400">
                50+
              </div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Countries Worldwide
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-purple-600 dark:text-purple-400">
                99.9%
              </div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Uptime Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-zinc-900 dark:text-zinc-50">
              Everything You Need to Thrive
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Comprehensive tools designed specifically for faith-based
              organizations
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-purple-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-700"
              >
                <div className="mb-4 inline-flex rounded-lg bg-purple-100 p-3 dark:bg-purple-900/30">
                  <feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
