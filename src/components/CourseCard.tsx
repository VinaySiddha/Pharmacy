import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  // duration: string;
  // level: string;
  // students: number;
  delay?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  id, 
  title, 
  description, 
  image, 
  // duration, 
  // level, 
  // students,
  delay = 0 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    >
      <div className="h-48 bg-blue-600 relative img-hover-zoom">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex items-center mt-1">
            <span className="text-xs px-2 py-1 bg-blue-600 rounded-full">{level}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{students}+ students</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1 text-blue-600" />
            <span className="text-blue-600 font-medium">View Syllabus</span>
          </div>
          <Link to={`/courses/${id}`} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
            Details <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;