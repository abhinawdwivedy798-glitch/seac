import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, ChevronRight } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image_url: string;
  type: 'upcoming' | 'past';
}

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const eventsData: Event[] = [
    {
      id: '1',
      title: 'Brain Wired',
      description:
        'A fun and enjoyable freshers event for the club, filled with exciting games, challenges, and opportunities to meet fellow tech enthusiasts.',
      date: '2025-09-14',
      time: '10:00',
      location: 'Ramappa Hall Complex',
      image_url: '/eventposter.jpg',
      type: 'upcoming',
    },
    {
      id: '2',
      title: 'Annual Tech Fest 2024',
      description:
        'Our biggest event of the year featuring workshops, competitions, and keynote speakers from the industry.',
      date: '2024-11-20',
      time: '09:00',
      location: 'Main Auditorium',
      image_url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      type: 'past',
    },
    {
      id: '3',
      title: 'Satellite Communication Workshop',
      description:
        'Hands-on workshop on satellite communication systems and antenna design principles.',
      date: '2024-10-15',
      time: '14:00',
      location: 'Electronics Lab',
      image_url: 'https://images.pexels.com/photos/586019/pexels-photo-586019.jpeg',
      type: 'past',
    },
  ];

  const upcomingEvents = eventsData.filter(event => event.type === 'upcoming');
  const pastEvents = eventsData.filter(event => event.type === 'past');

  const displayEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Club <span className="text-blue-600 dark:text-blue-400">Events</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest workshops, competitions, and community gatherings.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-200 dark:bg-gray-700 rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'past'
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayEvents.length > 0 ? (
            displayEvents.map((event, index) => (
              <div
                key={event.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={event.image_url}
                    alt={event.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800';
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 group/btn">
                    Learn More
                    <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No {activeTab === 'upcoming' ? 'Upcoming' : 'Past'} Events
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {activeTab === 'upcoming'
                  ? 'Check back soon for new events!'
                  : 'Our past events will be displayed here.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
