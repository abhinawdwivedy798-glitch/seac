import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import TeamSection from './sections/TeamSection';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EventPopup from './components/EventPopup';

gsap.registerPlugin(ScrollTrigger);

function AppContent() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    gsap.set('html', { scrollBehavior: 'smooth' });
    ScrollTrigger.refresh();

    const hasSeenPopup = sessionStorage.getItem('hasSeenEventPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('hasSeenEventPopup', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const nextEvent = {
    title: 'Brain Wired',
    description:
      'A fun and enjoyable freshers event for the club, filled with exciting games, challenges, and opportunities to meet fellow tech enthusiasts.',
    date: '2025-09-14',
    time: '10:00 AM',
    location: 'Ramappa Hall Complex',
    formLink: 'https://forms.google.com/your-form-link',
  };

  return (
    <div className="font-inter bg-white dark:bg-gray-900 transition-colors duration-300">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Activities />
        <TeamSection />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      {showPopup && (
        <EventPopup event={nextEvent} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
