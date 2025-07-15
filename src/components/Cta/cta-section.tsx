function CtaSection() {
  return (
    <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <div className="mb-6">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            🔥 Limited Early Access
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to 2x Your
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Productive Hours?
          </span>
        </h2>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Be among the first to experience a revolutionary approach to
          productivity tracking. Secure your spot for exclusive early access
          pricing.
        </p>

        <div className="bg-white/20 rounded-xl p-4 mb-6 backdrop-blur-sm border border-white/30">
          <div className="text-lg font-semibold mb-2">
            🎯 Limited Time: Early Access Pricing
          </div>
          <div className="text-sm text-white/90">
            Join waitlist to lock in{" "}
            <span className="font-bold text-yellow-300">50% off</span> our
            launch price
          </div>
          <div className="text-sm text-white/90">
            {/* <span className="font-bold text-yellow-300">
              Only 150 spots remaining this month
            </span> */}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="https://tally.so/r/w4l4VA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-blue font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-large text-lg w-full sm:w-auto"
          >
            Join Waitlist
          </a>
        </div>

        {/* Value propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-white/90">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-sm">Setup in under 60 seconds</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">💎</span>
            <span className="text-sm">Premium productivity suite</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="text-sm">See results in first week</span>
          </div>
        </div>

        {/* Social proof */}
        {/* <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold">
                Productivity Innovation
              </div>
              <div className="text-xs text-white/80">
                Designed for modern professionals
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="text-center md:text-left">
              <div className="font-semibold mb-1">
                "This is exactly what I've been looking for!"
              </div>
              <div className="text-white/80">- Sarah, Product Manager</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-semibold mb-1">
                "The approach to productivity tracking is brilliant."
              </div>
              <div className="text-white/80">- Michael, Software Developer</div>
            </div>
          </div>
        </div> */}

        {/* Urgency */}
        {/* <div className="mt-6 text-white/80 text-sm">
          <span className="font-semibold text-yellow-300">
            ⏰ Early access spots filling fast:
          </span>{" "}
          Only 150 spots remaining this month
        </div> */}
      </div>
    </section>
  );
}

export default CtaSection;
