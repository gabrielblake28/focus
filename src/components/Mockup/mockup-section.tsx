import React from "react";

function MockupSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-gray">
            See Your Progress in
            <span className="block text-primary-blue">Real Time</span>
          </h2>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
            Beautiful visualizations that make productivity tracking actually
            enjoyable. Watch your rings fill up as you build better work habits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl shadow-large border border-gray-200">
              <div className="bg-white p-6 rounded-2xl shadow-medium">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-dark-gray mb-1">
                    Today's Progress
                  </h3>
                  <p className="text-sm text-neutral-gray">Tuesday, March 12</p>
                </div>

                <div className="relative flex justify-center mb-8">
                  <svg
                    width="280"
                    height="280"
                    viewBox="0 0 280 280"
                    className="transform -rotate-90"
                  >
                    {/* Background rings */}
                    <circle
                      cx="140"
                      cy="140"
                      r="120"
                      fill="none"
                      stroke="#f3f4f6"
                      strokeWidth="14"
                    />
                    <circle
                      cx="140"
                      cy="140"
                      r="95"
                      fill="none"
                      stroke="#f3f4f6"
                      strokeWidth="12"
                    />
                    <circle
                      cx="140"
                      cy="140"
                      r="70"
                      fill="none"
                      stroke="#f3f4f6"
                      strokeWidth="10"
                    />

                    {/* Productive Apps Ring (outer) */}
                    <circle
                      cx="140"
                      cy="140"
                      r="120"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="14"
                      strokeDasharray="754"
                      strokeDashoffset="150"
                      strokeLinecap="round"
                    />

                    {/* Focus Sessions Ring (middle) */}
                    <circle
                      cx="140"
                      cy="140"
                      r="95"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="12"
                      strokeDasharray="597"
                      strokeDashoffset="120"
                      strokeLinecap="round"
                    />

                    {/* Deep Work Ring (inner) */}
                    <circle
                      cx="140"
                      cy="140"
                      r="70"
                      fill="none"
                      stroke="#7c3aed"
                      strokeWidth="10"
                      strokeDasharray="440"
                      strokeDashoffset="176"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-dark-gray">
                        6.5h
                      </div>
                      <div className="text-sm text-neutral-gray">
                        productive time
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ring legend */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-primary-blue rounded-full"></div>
                      <span className="text-sm font-medium text-dark-gray">
                        Productive Apps
                      </span>
                    </div>
                    <span className="text-sm font-bold text-dark-gray">
                      5.2h / 6h
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-accent-green rounded-full"></div>
                      <span className="text-sm font-medium text-dark-gray">
                        Focus Sessions
                      </span>
                    </div>
                    <span className="text-sm font-bold text-dark-gray">
                      4 / 5 sessions
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-accent-purple rounded-full"></div>
                      <span className="text-sm font-medium text-dark-gray">
                        Deep Work
                      </span>
                    </div>
                    <span className="text-sm font-bold text-dark-gray">
                      2.5h / 4h
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating achievement */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-medium border border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏆</span>
                <div>
                  <div className="text-xs font-bold text-dark-gray">
                    Achievement!
                  </div>
                  <div className="text-xs text-neutral-gray">
                    Focus Streak: 7 days
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4">
                Three Simple Rings, Infinite Motivation
              </h3>
              <p className="text-neutral-gray leading-relaxed mb-6">
                Just like your Apple Watch tracks movement, Focus tracks your
                productive time. Close your rings every day and watch your
                productivity habits transform.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-blue text-xl">📊</span>
                </div>
                <div>
                  <h4 className="font-bold text-dark-gray mb-1">
                    Productive Apps Ring
                  </h4>
                  <p className="text-sm text-neutral-gray">
                    Tracks time in coding, design, writing, and other productive
                    applications
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-green text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="font-bold text-dark-gray mb-1">
                    Focus Sessions Ring
                  </h4>
                  <p className="text-sm text-neutral-gray">
                    Counts completed focus blocks with distractions blocked
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-purple text-xl">🧠</span>
                </div>
                <div>
                  <h4 className="font-bold text-dark-gray mb-1">
                    Deep Work Ring
                  </h4>
                  <p className="text-sm text-neutral-gray">
                    Measures uninterrupted work periods of 25+ minutes
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-primary-blue text-white font-semibold py-3 px-6 rounded-xl hover:bg-dark-blue transition-all duration-300 shadow-soft">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MockupSection;
