import { Calendar, DollarSign, Heart, TrendingUp, Users } from "lucide-react";

// Dummy data
const stats = [
  {
    title: "Total Members",
    value: "1,247",
    change: "+12%",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Monthly Donations",
    value: "$45,280",
    change: "+8%",
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    title: "Upcoming Events",
    value: "8",
    change: "+2",
    icon: Calendar,
    color: "bg-purple-500",
  },
  {
    title: "Active Groups",
    value: "24",
    change: "+3",
    icon: Heart,
    color: "bg-pink-500",
  },
];

const recentActivities = [
  {
    id: 1,
    name: "Sarah Johnson",
    action: "joined Prayer Group",
    time: "2 hours ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    action: "registered for Bible Study",
    time: "5 hours ago",
  },
  { id: 3, name: "Emily Davis", action: "donated $500", time: "1 day ago" },
  {
    id: 4,
    name: "David Wilson",
    action: "volunteered for Youth Ministry",
    time: "1 day ago",
  },
  {
    id: 5,
    name: "Grace Martinez",
    action: "completed Discipleship Course",
    time: "2 days ago",
  },
];

const upcomingEvents = [
  {
    id: 1,
    name: "Sunday Worship Service",
    date: "Nov 24, 2025",
    time: "10:00 AM",
    attendees: 450,
  },
  {
    id: 2,
    name: "Youth Fellowship",
    date: "Nov 25, 2025",
    time: "6:00 PM",
    attendees: 85,
  },
  {
    id: 3,
    name: "Bible Study Group",
    date: "Nov 26, 2025",
    time: "7:00 PM",
    attendees: 32,
  },
  {
    id: 4,
    name: "Community Outreach",
    date: "Nov 27, 2025",
    time: "9:00 AM",
    attendees: 120,
  },
];

const ministryGroups = [
  { id: 1, name: "Prayer Ministry", members: 156, active: true },
  { id: 2, name: "Youth Ministry", members: 234, active: true },
  { id: 3, name: "Worship Team", members: 45, active: true },
  { id: 4, name: "Outreach Ministry", members: 89, active: true },
  { id: 5, name: "Children's Ministry", members: 178, active: true },
  { id: 6, name: "Seniors Fellowship", members: 67, active: false },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Dashboard
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Welcome back! Here's what's happening in your faith community.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {stat.title}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-green-600 dark:text-green-400">
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`rounded-full p-3 ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Upcoming Events
                </h2>
                <Calendar className="h-5 w-5 text-zinc-400" />
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between border-b border-zinc-100 pb-4 last:border-0 dark:border-zinc-800"
                  >
                    <div>
                      <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                        {event.name}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {event.date} • {event.time}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div>
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Recent Activities
                </h2>
                <TrendingUp className="h-5 w-5 text-zinc-400" />
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                        {activity.name}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {activity.action}
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-500">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ministry Groups */}
          <div className="lg:col-span-3">
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Ministry Groups
                </h2>
                <Heart className="h-5 w-5 text-zinc-400" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {ministryGroups.map((group) => (
                  <div
                    key={group.id}
                    className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                        {group.name}
                      </h3>
                      <span
                        className={`h-2 w-2 rounded-full ${
                          group.active ? "bg-green-500" : "bg-zinc-400"
                        }`}
                      />
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <Users className="h-4 w-4" />
                      <span>{group.members} members</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
