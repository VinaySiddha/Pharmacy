import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  value: string;
  label: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  const startAnimation = () => {
    const targetValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
    const duration = 1000; // Animation duration in ms
    const increment = targetValue / (duration / 10);

    let currentValue = 0;
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(interval);
      }
      setDisplayValue(Math.floor(currentValue));
    }, 10);

    return () => clearInterval(interval);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      onViewportEnter={startAnimation}
      transition={{ duration: 0.5, delay }}
      className="p-4 text-center"
    >
      <motion.div 
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          delay: delay + 0.2 
        }}
        className="text-4xl md:text-5xl font-bold text-white mb-2"
      >
        {value.includes('+') ? `${displayValue}+` : displayValue}
      </motion.div>
      <div className="text-blue-100">{label}</div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { value: "20+", label: "Years of Excellence" },
    { value: "1000+", label: "Students Enrolled" },
    { value: "50+", label: "Expert Faculty" },
    { value: "90%", label: "Placement Rate" }
  ];

  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;