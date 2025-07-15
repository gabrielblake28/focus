import React from "react";
import {
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";
import {
  LuTarget,
  LuTrendingUp,
  LuTrophy,
  LuStar,
  LuUsers,
  LuZap,
} from "react-icons/lu";

function FeaturesSection() {
  const features = [
    {
      icon: HiOutlineChartBar,
      title: "Smart App Tracking",
      description:
        "Automatically detect and categorize your productive apps. No manual timers or complex setup required.",
      highlight: "Set & forget automation",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: LuTarget,
      title: "Focus Sessions",
      description:
        "Block distractions and stay in the zone. Get gentle reminders and track your deep work streaks.",
      highlight: "Proven focus techniques",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: LuTrendingUp,
      title: "Beautiful Progress Rings",
      description:
        "Watch your productivity grow with stunning visualizations inspired by Apple Watch rings. Celebrate daily wins.",
      highlight: "Motivating visuals",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: LuTrophy,
      title: "Achievement System",
      description:
        "Unlock achievements as you build better habits. From 'First Focus Hour' to 'Week Warrior' streaks.",
      highlight: "Gamified progress",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: HiOutlineDevicePhoneMobile,
      title: "Native Performance",
      description:
        "Lightweight desktop app that runs smoothly in the background without slowing down your computer.",
      highlight: "Zero performance impact",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Privacy First",
      description:
        "Your data stays on your device. We track productivity patterns, not personal content or keystrokes.",
      highlight: "Complete data privacy",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
  ];

  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-gray">
            Everything You Need to
            <span className="block text-primary-blue">Boost Productivity</span>
          </h2>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
            Simple tools that work together to help you understand and improve
            how you spend your time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent
                      size={32}
                      className={`${feature.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                </div>
                <div className="inline-block bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {feature.highlight}
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-gray group-hover:text-primary-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-neutral-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-neutral-gray mb-6">
            Designed for ambitious professionals
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-neutral-gray">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-50 rounded-lg flex items-center justify-center">
                <LuStar size={20} className="text-yellow-600" />
              </div>
              <span>Premium quality</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                <LuUsers size={20} className="text-indigo-600" />
              </div>
              <span>Professional-grade</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                <LuZap size={20} className="text-orange-600" />
              </div>
              <span>2x productivity potential</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
