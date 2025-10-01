import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Satellite, Radio, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(titleRef.current, {
        duration: 1.4,
        y: 100,
        opacity: 0,
        scale: 0.9,
        ease: 'power4.out'
      })
      .from(subtitleRef.current, {
        duration: 1.2,
        y: 60,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.9')
      .from(ctaRef.current, {
        duration: 1,
        y: 40,
        opacity: 0,
        scale: 0.9,
        ease: 'back.out(1.7)'
      }, '-=0.7')
      .from('.stat-card', {
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out'
      }, '-=0.5');

      gsap.to('.floating-element', {
        y: -30,
        rotation: 360,
        duration: 4,
        ease: 'power2.inOut',
        stagger: 0.7,
        repeat: -1,
        yoyo: true
      });

      gsap.to('.hero-bg-layer', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div className="hero-bg-layer absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.15),transparent_50%)]"></div>
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>

      {/* Floating Elements with enhanced animation */}
      <div className="absolute inset-0 pointer-events-none">
        <Satellite className="floating-element absolute top-32 left-[10%] h-12 w-12 text-blue-400 opacity-40 drop-shadow-lg" />
        <Radio className="floating-element absolute top-48 right-[15%] h-10 w-10 text-cyan-400 opacity-40 drop-shadow-lg" />
        <Zap className="floating-element absolute bottom-1/3 left-[15%] h-11 w-11 text-blue-300 opacity-40 drop-shadow-lg" />
        <div className="floating-element absolute top-2/3 right-[20%] w-4 h-4 bg-blue-400 rounded-full opacity-50 shadow-lg shadow-blue-500/50"></div>
        <div className="floating-element absolute bottom-1/4 right-[35%] w-3 h-3 bg-cyan-400 rounded-full opacity-50 shadow-lg shadow-cyan-500/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1
          ref={titleRef}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="inline-block animate-pulse-slow">Satellite & Electronics</span>
          <span className="block mt-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent animate-gradient">
            Amateur Club
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-10 text-xl sm:text-2xl md:text-3xl text-gray-200 mb-14 max-w-5xl mx-auto leading-relaxed font-light"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Exploring the frontiers of space communication and electronics.
          <span className="block mt-3 text-blue-200">Join our community of innovators, experimenters, and technology enthusiasts.</span>
        </p>

        <button
          ref={ctaRef}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xl font-bold rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-blue-500/50 hover:shadow-cyan-500/60 group relative overflow-hidden"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="relative z-10">Start Your Journey</span>
          <ArrowRight className="ml-3 h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>

        {/* Stats */}
        <div ref={statsRef} className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="stat-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
            <div
              className="text-5xl lg:text-6xl font-black bg-gradient-to-br from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              500+
            </div>
            <div className="text-gray-200 text-lg font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Active Members</div>
          </div>
          <div className="stat-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
            <div
              className="text-5xl lg:text-6xl font-black bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              50+
            </div>
            <div className="text-gray-200 text-lg font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Projects Completed</div>
          </div>
          <div className="stat-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
            <div
              className="text-5xl lg:text-6xl font-black bg-gradient-to-br from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              15
            </div>
            <div className="text-gray-200 text-lg font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Years of Excellence</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-cyan-400/50 rounded-full flex justify-center shadow-lg shadow-cyan-500/30">
          <div className="w-1.5 h-4 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
