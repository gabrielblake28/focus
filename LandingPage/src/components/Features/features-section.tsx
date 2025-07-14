import React from "react";

function FeaturesSection() {
  const features = [
    {
      icon: "📊",
      title: "Smart App Tracking",
      description:
        "Automatically detect and categorize your productive apps. No manual timers or complex setup required.",
      highlight: "Set & forget automation",
    },
    {
      icon: "🎯",
      title: "Focus Sessions",
      description:
        "Block distractions and stay in the zone. Get gentle reminders and track your deep work streaks.",
      highlight: "Proven focus techniques",
    },
    {
      icon: "📈",
      title: "Beautiful Progress Rings",
      description:
        "Watch your productivity grow with stunning visualizations inspired by Apple Watch rings. Celebrate daily wins.",
      highlight: "Motivating visuals",
    },
    {
      icon: "🏆",
      title: "Achievement System",
      description:
        "Unlock achievements as you build better habits. From 'First Focus Hour' to 'Week Warrior' streaks.",
      highlight: "Gamified progress",
    },
    {
      icon: "📱",
      title: "Native Performance",
      description:
        "Lightweight desktop app that runs smoothly in the background without slowing down your computer.",
      highlight: "Zero performance impact",
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description:
        "Your data stays on your device. We track productivity patterns, not personal content or keystrokes.",
      highlight: "Complete data privacy",
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
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
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
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-neutral-gray mb-6">
            Join thousands of professionals already using Focus
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-neutral-gray">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.8/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span>500+ beta users</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span>2x productivity increase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
