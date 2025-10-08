import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100">
      {/* Content */}
      <div className="relative z-10 container-custom w-full py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            {/* "your safe space" superscript */}
            <div className="relative mb-4">
              <span className="absolute -top-8 right-1/4 text-lg md:text-xl font-handwriting text-primary-600 transform rotate-12 bg-white/95 px-2 py-1 rounded shadow-lg">
                your safe space
              </span>
            </div>
            
            {/* Main heading with individual word colors matching the image */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-neutral-800">We</span>{' '}
              <span className="text-primary-600">all</span>{' '}
              <span className="text-neutral-800">have</span>{' '}
              <span className="text-neutral-800">a</span>{' '}
              <span className="text-secondary-600">story</span>{' '}
              <span className="text-neutral-800">to</span>{' '}
              <span className="text-accent-600">tell</span>
            </h1>
          </motion.div>

          {/* Interactive popup text with "it really does" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 relative"
          >
            {/* Animated popup text */}
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  animate={{ opacity: 1, y: -60, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-success-500 text-white px-4 py-2 rounded-full shadow-xl font-bold text-lg z-20"
                >
                  ✨ it really does!
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-success-500"></div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="inline-block cursor-pointer bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl"
              onHoverStart={() => setShowPopup(true)}
              onHoverEnd={() => setShowPopup(false)}
              onClick={() => setShowPopup(!showPopup)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl md:text-2xl font-bold">
                <span className="text-primary-600">Your Voice</span>{' '}
                <span className="text-secondary-600">matters</span>, Your{' '}
                <span className="font-handwriting text-accent-600 text-2xl md:text-3xl">Story</span>{' '}
                <span className="text-warning-600">matters</span>
              </span>
            </motion.div>
            <p className="text-base text-neutral-700 font-medium mt-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
              💫 Hang around here to know more
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="/share">
              <Button 
                variant="primary" 
                size="lg"
                className="text-lg px-6 py-3 bg-primary-600 hover:bg-primary-700 shadow-xl"
              >
                Share Your Story <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/awareness">
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-6 py-3 border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white shadow-xl"
              >
                Get Support
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};