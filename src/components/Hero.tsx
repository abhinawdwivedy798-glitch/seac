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
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(titleRef.current, {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: 'power4.out'
      })
      .from(subtitleRef.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.8')
      .from(ctaRef.current, {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.6');

      gsap.to('.floating-element', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        stagger: 0.5,
        repeat: -1,
        yoyo: true
      });

      gsap.to('.hero-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        <Satellite className="floating-element absolute top-32 left-10 md:left-20 h-8 w-8 text-blue-400 opacity-60" />
        <Radio className="floating-element absolute top-48 right-10 md:right-32 h-6 w-6 text-cyan-400 opacity-60" />
        <Zap className="floating-element absolute bottom-48 left-10 md:left-32 h-7 w-7 text-blue-300 opacity-60" />
        <div className="floating-element absolute top-2/3 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        <div className="floating-element absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-8 leading-[1.1] tracking-tight"
          style={{ fontFamily: "'Space Grotesk', 'Orbitron', 'Exo 2', sans-serif" }}
        >
          Satellite & Electronics
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent font-black" style={{ letterSpacing: '0.02em' }}>
            Amateur Club
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          style={{ fontFamily: "'Inter', 'Montserrat', sans-serif" }}
        >
          Exploring the frontiers of space communication and electronics.
          <span className="block mt-2">Join our community of innovators, experimenters, and technology enthusiasts.</span>
        </p>

        <button
          ref={ctaRef}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg md:text-xl font-bold rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 group"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Start Your Journey
          <ArrowRight className="ml-3 h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-200" />
        </button>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div
              className="text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              500+
            </div>
            <div className="text-gray-200 text-base lg:text-lg font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Active Members</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div
              className="text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              50+
            </div>
            <div className="text-gray-200 text-base lg:text-lg font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Projects Completed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div
              className="text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              15
            </div>
            <div className="text-gray-200 text-base lg:text-lg font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Years of Excellence</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
