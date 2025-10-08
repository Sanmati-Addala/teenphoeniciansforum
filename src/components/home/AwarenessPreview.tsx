import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { Button } from '../ui/Button';
import { BookOpen, Star, Coffee, Heart } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'Dealing with School Pressure',
    description: 'Practical strategies to manage academic stress and expectations',
    icon: <BookOpen className="w-8 h-8 text-primary-500" />,
    link: '/awareness/school-pressure',
  },
  {
    id: 2,
    title: 'Building Self-Confidence',
    description: 'Tips to develop a positive self-image and overcome self-doubt',
    icon: <Star className="w-8 h-8 text-secondary-500" />,
    link: '/awareness/self-confidence',
  },
  {
    id: 3,
    title: 'Healthy Social Media Habits',
    description: 'Create a balanced relationship with social platforms',
    icon: <Coffee className="w-8 h-8 text-accent-500" />,
    link: '/awareness/social-media',
  },
  {
    id: 4,
    title: 'Talking to Parents & Friends',
    description: 'How to open up about mental health with people you trust',
    icon: <Heart className="w-8 h-8 text-error-500" />,
    link: '/awareness/communication',
  },
];

export const AwarenessPreview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Mental Health Awareness</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore resources designed to help you navigate common challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link to={resource.link}>
                <Card className="h-full flex flex-col items-center text-center p-6">
                  <div className="mb-4">{resource.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-800">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">{resource.description}</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/awareness">
            <Button variant="outline">View All Resources</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};