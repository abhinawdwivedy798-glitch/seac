import React, { useEffect, useState } from 'react';
import { X, Calendar, Clock, MapPin, Users } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  formLink?: string;
}

interface EventPopupProps {
  event: Event;
  onClose: () => void;
}

const EventPopup: React.FC<EventPopupProps> = ({ event, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? 'bg-black/60 backdrop-blur-sm' : 'bg-black/0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label="Close popup"
        >
          <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="p-8">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
              Upcoming Event
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              {event.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {event.description}
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 mr-3">
                <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium">{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 mr-3">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium">{event.time}</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 mr-3">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium">{event.location}</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-l-4 border-orange-500 p-4 rounded-lg mb-6">
            <p className="text-orange-900 dark:text-orange-200 font-semibold">
              Register now! Fill the form before it's too late.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              Close
            </button>
            {event.formLink && (
              <a
                href={event.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
              >
                Register Now
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
