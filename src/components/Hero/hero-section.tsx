function HeroSection() {
  return (
    <section className="bg-gradient-primary text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            🚀 Join the Waitlist
          </span>
        </div>

        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white/90 mb-2">
            Tempono
          </h1>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Turn Screen Time Into
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Productive Power
          </span>
        </h2>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Finally see where your time actually goes. Track productive apps,
          measure focus sessions, and watch your productivity grow with
          beautiful Apple Watch-style rings.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="https://tally.so/r/w4l4VA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-blue font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-large text-lg"
          >
            Join Waitlist
          </a>
        </div>

        <div className="mb-6 text-white/80 text-sm">
          <span className="font-semibold text-yellow-300">
            Early Access Special:
          </span>{" "}
          Get 50% off when you join the waitlist
        </div>

        <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-success-green rounded-full"></span>
            Early access pricing
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-success-green rounded-full"></span>
            Premium productivity tools
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-success-green rounded-full"></span>
            Works on Mac & Windows
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
