import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  learnMoreLink: string; // Add this prop
  delay?: number;
}

const EventCard: React.FC<EventCardProps> = ({ 
  id, 
  title, 
  description, 
  date, 
  time, 
  location,
  learnMoreLink, // Use this prop
  delay = 0 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 rounded-full p-2 mr-4">
            <Calendar className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <div className="flex items-center">
              <span className="block text-gray-500 text-sm">{date}</span>
              <div className="mx-2 h-1 w-1 rounded-full bg-gray-300"></div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-3 w-3 mr-1" />
                <span>{time}</span>
              </div>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        <Link to={learnMoreLink} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
          Learn More <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default EventCard;