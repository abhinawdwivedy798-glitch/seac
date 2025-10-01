import React from 'react';
import { Target, Eye, Zap, Users, Award, Globe, Rocket, Sparkles, Code } from 'lucide-react';

const About: React.FC = () => {
  const missionVision = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To foster innovation and learning in satellite communication, electronics, and amateur radio technologies among students and enthusiasts.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading platform for space technology education and hands-on experience in satellite and electronics systems.'
    },
  ];

  const whatWeDo = [
    {
      icon: Code,
      title: 'Projects',
      description: 'We develop real-world projects, from building amateur radio equipment to designing and tracking CubeSats.'
    },
    {
      icon: Rocket,
      title: 'Workshops',
      description: 'We host regular workshops on topics like embedded systems, RF design, and antenna theory to build practical skills.'
    },
    {
      icon: Sparkles,
      title: 'Competitions',
      description: 'Our members participate and win in national and international space and electronics competitions.'
    },
  ];

  const coreValues = [
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive network of tech enthusiasts and fostering collaborative innovation.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Pursuing the highest standards in every project and educational activity we undertake.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Pushing boundaries in space and electronics technology with creative solutions.'
    },
  ];
  
  const teamMembers = [
    { name: 'Jane Doe', role: 'President', image: 'https://placehold.co/400x400/94a3b8/e2e8f0?text=Jane' },
    { name: 'John Smith', role: 'Vice President', image: 'https://placehold.co/400x400/94a3b8/e2e8f0?text=John' },
    { name: 'Alice Johnson', role: 'Treasurer', image: 'https://placehold.co/400x400/94a3b8/e2e8f0?text=Alice' },
    { name: 'Bob Williams', role: 'Technical Lead', image: 'https://placehold.co/400x400/94a3b8/e2e8f0?text=Bob' },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            About <span className="text-blue-600 dark:text-blue-400">SEAC</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            The Satellite & Electronics Amateur Club is a vibrant community of students and professionals
            passionate about space technology, electronics, and amateur radio.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
          {missionVision.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <item.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* What We Do Section */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">What We Do</h3>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Our activities are designed to provide hands-on experience and foster a deep understanding of technology.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {whatWeDo.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <item.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Core Values Section - Enhanced */}
        <div className="relative overflow-hidden rounded-3xl mb-20">
          {/* Gradient Background with Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700"></div>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Our Core Values</h3>
            <p className="text-blue-100 text-center mb-12 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {coreValues.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/30 shadow-xl">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">{value.title}</h4>
                  <p className="text-blue-50 leading-relaxed text-base">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Team Section
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are a group of passionate individuals dedicated to our shared vision.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
              />
              <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;
