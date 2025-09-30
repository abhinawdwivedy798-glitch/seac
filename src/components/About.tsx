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
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-blue-400">SEAC</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The Satellite & Electronics Amateur Club is a vibrant community of students and professionals 
            passionate about space technology, electronics, and amateur radio.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What We Do</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our activities are designed to provide hands-on experience and foster a deep understanding of technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

        {/* Core Values Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-lg mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
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
