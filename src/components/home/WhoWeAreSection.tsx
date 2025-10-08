import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Users } from 'lucide-react';

export const WhoWeAreSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-300 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-secondary-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-warning-300 rounded-full blur-xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative header with icons */}
          <div className="flex justify-center items-center mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mr-4"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent"
            >
              Who We Are (And Why We Rise)
            </motion.h2>
            
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-3 bg-gradient-to-br from-accent-500 to-warning-500 rounded-full ml-4"
            >
              <Heart className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* Main content with enhanced typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background card with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/90 to-white/80 backdrop-blur-sm rounded-3xl shadow-2xl transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-primary-50/50 via-transparent to-secondary-50/50 rounded-3xl shadow-xl transform -rotate-1"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-12">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl leading-relaxed text-neutral-700 font-medium"
              >
                We're{' '}
                <span className="font-handwriting text-2xl md:text-3xl text-primary-600 font-bold">
                  Teen Phoenicians
                </span>
                —a bunch of young dreamers with a spark for change. Just like the{' '}
                <span className="font-bold text-secondary-600 relative">
                  phoenix
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary-400 to-accent-400"
                  ></motion.div>
                </span>
                , we believe every setback is a setup for a{' '}
                <span className="font-bold text-accent-600">comeback</span>. Whether it's through{' '}
                <span className="text-primary-600 font-semibold">community action</span>,{' '}
                <span className="text-secondary-600 font-semibold">creative projects</span>, or just{' '}
                <span className="text-success-600 font-semibold">being there for each other</span>, we're here to{' '}
                <span className="font-bold text-warning-600">rise</span>,{' '}
                <span className="font-bold text-primary-600">rebuild</span>, and{' '}
                <span className="font-bold text-secondary-600">lift others</span> as we go.{' '}
                <span className="font-handwriting text-xl md:text-2xl text-accent-600 font-bold">
                  No capes, just purpose.
                </span>
              </motion.p>
            </div>
          </motion.div>

          {/* Decorative bottom elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mt-8 space-x-6"
          >
            <div className="flex items-center space-x-2 text-primary-600">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Community</span>
            </div>
            <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-secondary-600">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Purpose</span>
            </div>
            <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-accent-600">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Hope</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};