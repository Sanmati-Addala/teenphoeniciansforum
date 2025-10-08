import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  image = 'https://images.pexels.com/photos/3826676/pexels-photo-3826676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
}) => {
  return (
    <div 
      className="relative bg-center bg-cover py-20 md:py-28 mb-12"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.7)), url(${image})`,
      }}
    >
      <div className="container-custom text-center text-white">
        <motion.h1 
          className="font-handwriting text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};