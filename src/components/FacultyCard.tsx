import React from 'react';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface FacultyCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
  website?: string;
  delay?: number;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ 
  name, 
  title, 
  bio, 
  image, 
  linkedin, 
  email, 
  website,
  delay = 0 
}) => {
  const imageHeight = 2250 / (1750 / 300); // Calculate height to maintain aspect ratio

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }} // Trigger animation every time it comes into view
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-2xl shadow-md overflow-hidden group w-80"
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-60 object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex space-x-3 justify-center">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </a>
            )}
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 mb-3">{title}</p>
        <p className="text-gray-600 line-clamp-3">
          {bio}
        </p>
      </div>
    </motion.div>
  );
};

export default FacultyCard;