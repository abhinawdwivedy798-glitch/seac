import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Satellite, Radio, Cpu, Wrench, Users, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Activities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.activity-card', {
        duration: 1,
        y: 60,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activities = [
    {
      icon: Satellite,
      title: 'Satellite Tracking',
      description: 'Learn to track and communicate with satellites using ground station equipment and software-defined radio.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time tracking', 'Data reception', 'Orbital mechanics']
    },
    {
      icon: Radio,
      title: 'Amateur Radio',
      description: 'Explore the world of ham radio, from basic operations to advanced digital modes and emergency communications.',
      color: 'from-green-500 to-teal-500',
      features: ['License preparation', 'HF/VHF operations', 'Digital modes']
    },
    {
      icon: Cpu,
      title: 'Electronics Design',
      description: 'Design and build electronic circuits, PCBs, and embedded systems for various amateur radio and space applications.',
      color: 'from-purple-500 to-pink-500',
      features: ['PCB design', 'Microcontrollers', 'RF circuits']
    },
    {
      icon: Wrench,
      title: 'Hands-on Workshops',
      description: 'Regular workshops covering soldering, antenna building, software-defined radio, and modern test equipment.',
      color: 'from-orange-500 to-red-500',
      features: ['Practical skills', 'Tool usage', 'Project building']
    },
    {
      icon: Users,
      title: 'Group Projects',
      description: 'Collaborative projects including CubeSat development, ground station building, and emergency communication systems.',
      color: 'from-indigo-500 to-blue-500',
      features: ['Team collaboration', 'Real applications', 'Skill development']
    },
    {
      icon: Trophy,
      title: 'Competitions',
      description: 'Participate in national and international contests, hackathons, and technical competitions in electronics and RF.',
      color: 'from-yellow-500 to-orange-500',
      features: ['Contest participation', 'Skill testing', 'Recognition']
    }
  ];

  return (
    <section id="activities" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Club <span className="text-blue-600 dark:text-blue-400">Activities</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the exciting world of satellite communication and electronics through our diverse 
            range of activities designed for all skill levels.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card group">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full">
                {/* Icon */}
                <div className={`bg-gradient-to-r ${activity.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {activity.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {activity.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Activities;