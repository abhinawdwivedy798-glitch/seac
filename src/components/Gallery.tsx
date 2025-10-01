import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const dummyImages = [
  {
    id: '1',
    title: 'Satellite Tracking Station',
    description: 'Our main satellite tracking station with multiple antennas',
    image_url: 'https://images.pexels.com/photos/586095/pexels-photo-586095.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'equipment',
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'PCB Design Workshop',
    description: 'Students learning PCB design techniques',
    image_url: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'workshops',
    created_at: '2024-01-10T14:30:00Z'
  },
  {
    id: '3',
    title: 'Amateur Radio Setup',
    description: 'HF radio station configuration',
    image_url: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-159045.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'equipment',
    created_at: '2024-01-08T16:20:00Z'
  },
  {
    id: '4',
    title: 'CubeSat Project Team',
    description: 'Team working on CubeSat development',
    image_url: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'projects',
    created_at: '2024-01-05T11:15:00Z'
  },
  {
    id: '5',
    title: 'Soldering Workshop',
    description: 'Hands-on soldering techniques training',
    image_url: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'workshops',
    created_at: '2024-01-03T13:45:00Z'
  },
  {
    id: '6',
    title: 'Annual Tech Fair',
    description: 'SEAC booth at the annual technology fair',
    image_url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'events',
    created_at: '2023-12-20T09:30:00Z'
  },
  {
    id: '7',
    title: 'Antenna Testing',
    description: 'Testing new antenna designs for satellite communication',
    image_url: 'https://images.pexels.com/photos/586019/pexels-photo-586019.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'projects',
    created_at: '2023-12-15T15:20:00Z'
  },
  {
    id: '8',
    title: 'Electronics Lab Session',
    description: 'Students working on circuit analysis',
    image_url: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'workshops',
    created_at: '2023-12-10T12:00:00Z'
  },
  {
    id: '9',
    title: 'Field Day Setup',
    description: 'Annual amateur radio field day preparation',
    image_url: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'events',
    created_at: '2023-12-05T08:45:00Z'
  },
];

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    { id: 'all', name: 'All', count: dummyImages.length },
    { id: 'workshops', name: 'Workshops', count: dummyImages.filter(img => img.category === 'workshops').length },
    { id: 'projects', name: 'Projects', count: dummyImages.filter(img => img.category === 'projects').length },
    { id: 'equipment', name: 'Equipment', count: dummyImages.filter(img => img.category === 'equipment').length },
    { id: 'events', name: 'Events', count: dummyImages.filter(img => img.category === 'events').length }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        duration: 0.8,
        y: 40,
        opacity: 0,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const filteredImages = activeCategory === 'all'
    ? dummyImages
    : dummyImages.filter(img => img.category === activeCategory);

  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 4);

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="gallery" ref={sectionRef} className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Gallery</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Explore moments from our events, workshops, and club activities
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setShowAll(false);
                }}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category.name}
                {activeCategory === category.id && (
                  <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Gallery Grid - Single Row with 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white dark:bg-gray-800"
                onClick={() => handleImageClick(image)}
              >
                <div className="relative aspect-square">
                  <img
                    src={image.image_url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg mb-2">
                            {image.title}
                          </h3>
                          <p className="text-gray-200 text-sm mb-3">
                            {image.description}
                          </p>
                          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                            {categories.find(c => c.id === image.category)?.name}
                          </span>
                        </div>
                        <ZoomIn className="text-white h-6 w-6 ml-4 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {filteredImages.length > 4 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                {showAll ? 'Show Less' : `View All ${filteredImages.length} Photos`}
                <svg
                  className={`ml-2 h-5 w-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Photos Found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                No photos available for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={handleCloseLightbox}
        >
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 z-10 group"
            aria-label="Close"
          >
            <X className="h-6 w-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>
          <div
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image_url}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-8 rounded-b-lg">
              <h3 className="text-white font-bold text-2xl mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {selectedImage.description}
              </p>
              <div className="flex items-center gap-4">
                <span className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-full inline-block">
                  {categories.find(c => c.id === selectedImage.category)?.name}
                </span>
                <span className="text-gray-400 text-sm">
                  {new Date(selectedImage.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
