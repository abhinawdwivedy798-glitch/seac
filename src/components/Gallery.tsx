import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Dummy gallery data
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
    image_url: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'events',
    created_at: '2023-12-20T09:30:00Z'
  },
  {
    id: '7',
    title: 'Antenna Testing',
    description: 'Testing new antenna designs for satellite communication',
    image_url: 'https://images.pexels.com/photos/586095/pexels-photo-586095.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'projects',
    created_at: '2023-12-15T15:20:00Z'
  },
  {
    id: '8',
    title: 'Electronics Lab Session',
    description: 'Students working on circuit analysis',
    image_url: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'workshops',
    created_at: '2023-12-10T12:00:00Z'
  },
  {
    id: '9',
    title: 'Field Day Setup',
    description: 'Annual amateur radio field day preparation',
    image_url: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-159045.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'events',
    created_at: '2023-12-05T08:45:00Z'
  },
  {
    id: '10',
    title: 'Microcontroller Programming',
    description: 'Workshop on embedded systems programming',
    image_url: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'workshops',
    created_at: '2023-11-28T14:15:00Z'
  },
  {
    id: '11',
    title: 'Satellite Communication Demo',
    description: 'Live demonstration of satellite communication',
    image_url: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'events',
    created_at: '2023-11-20T10:30:00Z'
  },
  {
    id: '12',
    title: 'RF Measurement Equipment',
    description: 'Professional RF testing and measurement tools',
    image_url: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-159045.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'equipment',
    created_at: '2023-11-15T16:45:00Z'
  }
];

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Photos', count: dummyImages.length },
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
        stagger: 0.1,
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

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Photo <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of images showcasing club activities, projects, and memorable moments.
          </p>
        </div>

        {/* Category Filter and Upload Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item group cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.image_url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-xs opacity-90">{new Date(image.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Photos Found</h3>
            <p className="text-gray-600">
              No photos available for the selected category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.image_url}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-sm opacity-90">
                  {new Date(selectedImage.created_at).toLocaleDateString()}
                </p>
                <div className="flex gap-4 mt-4">
                  <button className="flex items-center text-sm hover:text-blue-300 transition-colors duration-200">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                  <button className="flex items-center text-sm hover:text-blue-300 transition-colors duration-200">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;