import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events: React.FC = () => {
  const eventData = {
    id: '1',
    title: 'Brain Wired',
    description:
      'A fun and enjoyable freshers event for the club, filled with exciting games, challenges, and opportunities to meet fellow tech enthusiasts.',
    date: '2025-09-14',
    time: '10:00',
    location: 'Ramappa Hall Complex',
    image_url: '/eventposter.jpg',
    max_attendees: 200,
    current_attendees: 0,
    type: 'upcoming',
  };

  const eventDateTime = new Date(`${eventData.date}T${eventData.time}:00`);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [eventStatus, setEventStatus] = useState<
    'upcoming' | 'ongoing' | 'past'
  >(eventData.type);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDateTime.getTime() - now.getTime();

      if (difference <= 0) {
        const endTime = new Date(eventDateTime.getTime() + 3 * 60 * 60 * 1000);
        if (now >= eventDateTime && now <= endTime) {
          setEventStatus('ongoing');
        } else {
          setEventStatus('past');
        }
        return null;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (eventStatus === 'past') {
    return (
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Club <span className="text-blue-600">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay updated with our latest workshops, competitions, and community
            gatherings.
          </p>
          <div className="py-16">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No Upcoming Events
            </h3>
            <p className="text-gray-600">
              This event has already concluded. Check back soon for new events!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Upcoming</span> Event
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join us for our next big event!
          </p>
        </div>

        {/* Event Card */}
        <div className="event-card bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
          {/* Event Image */}
          <div className="relative h-auto overflow-hidden bg-gray-100">
            <img
              src={eventData.image_url}
              alt={eventData.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  'https://placehold.co/800x480/E2E8F0/94a3b8?text=Image+Not+Found';
                e.currentTarget.alt = 'Placeholder image';
              }}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Event Content */}
          <div className="p-6 sm:p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 text-center">
              {eventData.title}
            </h3>
            <p className="text-gray-600 mb-4 text-center leading-relaxed">
              {eventData.description}
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-base text-gray-600 justify-center">
                <Calendar className="h-5 w-5 mr-3 text-blue-500" />
                <span>{formatDate(eventData.date)}</span>
              </div>
              <div className="flex items-center text-base text-gray-600 justify-center">
                <Clock className="h-5 w-5 mr-3 text-blue-500" />
                <span>{eventData.time} - 01:00 PM</span>
              </div>
              <div className="flex items-center text-base text-gray-600 justify-center">
                <MapPin className="h-5 w-5 mr-3 text-blue-500" />
                <span>{eventData.location}</span>
              </div>
            </div>

            {/* Timer or Status */}
            {eventStatus === 'ongoing' ? (
              <div className="text-center font-bold text-lg text-green-600 py-3 rounded-lg bg-green-50 shadow-inner">
                Event is LIVE!
              </div>
            ) : (
              timeLeft && (
                <div className="text-center bg-gradient-to-r from-blue-100 to-indigo-100 py-4 rounded-lg shadow-inner">
                  <h4 className="text-sm text-gray-600 mb-2">
                    Time until event:
                  </h4>
                  <div className="flex justify-center items-center space-x-4 text-blue-600 font-extrabold text-2xl sm:text-3xl">
                    <div className="text-center">
                      <div className="countdown-number">{timeLeft.days}</div>
                      <div className="text-xs font-normal">Days</div>
                    </div>
                    <span>:</span>
                    <div className="text-center">
                      <div className="countdown-number">{timeLeft.hours}</div>
                      <div className="text-xs font-normal">Hours</div>
                    </div>
                    <span>:</span>
                    <div className="text-center">
                      <div className="countdown-number">{timeLeft.minutes}</div>
                      <div className="text-xs font-normal">Minutes</div>
                    </div>
                    <span>:</span>
                    <div className="text-center">
                      <div className="countdown-number">{timeLeft.seconds}</div>
                      <div className="text-xs font-normal">Seconds</div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
