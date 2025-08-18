import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  title: string;
  quote: string;
  image: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  title, 
  quote, 
  image,
  delay = 0 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-lg shadow-md p-8 relative"
    >
      <div className="absolute top-4 right-4 text-blue-100">
        <Quote className="h-12 w-12" />
      </div>
      <div className="flex items-center mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-600"
        />
        <div>
          <h4 className="text-lg font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
      <p className="text-gray-600 italic relative z-10">
        "{quote}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard;