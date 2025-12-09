import {
  BarChart3,
  Building2,
  Calendar,
  MessageSquare,
  Shield,
  Users,
} from "lucide-react";
import Feature from "./feature";

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

const Features = () => {
  return (
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
            <Feature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
