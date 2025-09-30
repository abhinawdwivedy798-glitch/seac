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
    <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        <Satellite className="floating-element absolute top-20 left-10 h-8 w-8 text-blue-400 opacity-60" />
        <Radio className="floating-element absolute top-40 right-20 h-6 w-6 text-cyan-400 opacity-60" />
        <Zap className="floating-element absolute bottom-40 left-20 h-7 w-7 text-blue-300 opacity-60" />
        <div className="floating-element absolute top-60 right-10 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        <div className="floating-element absolute bottom-60 right-40 w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
      </div>

      {/* Content */}
      <div className="mt-5 relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
          Satellite & Electronics
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Amateur Club
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-8 text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Exploring the frontiers of space communication and electronics.
          Join our community of innovators, experimenters, and technology enthusiasts.
        </p>

        <button
          ref={ctaRef}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-semibold rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 group"
        >
          Start Your Journey
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
        </button>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-gray-300 text-sm lg:text-base">Active Members</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-gray-300 text-sm lg:text-base">Projects Completed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">15</div>
            <div className="text-gray-300 text-sm lg:text-base">Years of Excellence</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
