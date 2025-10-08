import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { PageHeader } from '../components/shared/PageHeader';
import Card from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { BookOpen, Brain, Heart, Users, Clock, Coffee, Moon, ArrowRight } from 'lucide-react';

// Mock data for awareness resources
const categories = [
  {
    id: 'school',
    name: 'School & Academic Pressure',
    icon: <BookOpen className="w-6 h-6" />,
    resources: [
      {
        id: 1,
        title: 'Anxious But Make It Productive: Channeling Overthinking Into Actual Power',
        description: 'Stop fighting your anxious brain and start working with it - your overthinking might actually be a superpower',
        image: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        slug: '/tips/anxious-but-productive',
      },
      {
        id: 2,
        title: 'Burnout Before 30: Why We Are Already Over It (And How to Fight Back)',
        description: 'Gen Z is the most burnt-out generation at work, and we haven\'t even hit our thirties yet. Here\'s the real talk on why and how to fight back',
        image: 'https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        slug: '/tips/burnout-before-30',
      },
    ],
  },
  {
    id: 'self',
    name: 'Self-Image & Confidence',
    icon: <Brain className="w-6 h-6" />,
    resources: [
      {
        id: 3,
        title: 'The Loneliness Paradox: Why Gen Z Is Drowning in a Sea of Digital Connection',
        description: 'Why being perpetually online has made us more isolated than ever, and how to unfuck your social life',
        image: 'https://images.pexels.com/photos/5310566/pexels-photo-5310566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        slug: '/tips/loneliness-paradox',
      },
      {
        id: 4,
        title: 'When You Feel Nothing: A Real Guide to Emotional Numbness',
        description: 'An honest exploration of emotional numbness and gentle ways to reconnect with feelings',
        image: 'https://images.pexels.com/photos/9402602/pexels-photo-9402602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        slug: '/tips/emotional-numbness',
      },
    ],
  },
  {
    id: 'relationships',
    name: 'Friendships & Relationships',
    icon: <Heart className="w-6 h-6" />,
    resources: [
      {
        id: 5,
        title: 'Setting Healthy Boundaries',
        description: 'How to communicate your needs in relationships',
        image: 'https://images.pexels.com/photos/5911364/pexels-photo-5911364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        slug: '/tips/setting-boundaries',
      },
      {
        id: 6,
        title: 'Handling Friendship Conflicts',
        description: 'Navigating disagreements without damaging relationships',
        image: 'https://images.pexels.com/photos/8102679/pexels-photo-8102679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        slug: '/tips/friendship-conflicts',
      },
    ],
  },
  {
    id: 'social',
    name: 'Social Media & Digital Wellbeing',
    icon: <Users className="w-6 h-6" />,
    resources: [
      {
        id: 7,
        title: 'Doomscrolling: Why Your Brain Is Literally Addicted to Bad News',
        description: 'The science behind why we keep torturing ourselves with endless feeds of existential dread',
        image: 'https://images.pexels.com/photos/267482/pexels-photo-267482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        slug: '/tips/doomscrolling',
      },
      {
        id: 8,
        title: 'Don\'t Do a Dopamine Detox – Shift It Instead',
        description: 'The story of how I stopped doomscrolling without becoming a monk',
        image: 'https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        slug: '/tips/digital-detox',
      },
    ],
  },
  {
    id: 'stress',
    name: 'Stress Management',
    icon: <Clock className="w-6 h-6" />,
    resources: [
      {
        id: 9,
        title: 'The Online Therapy Revolution: Why India\'s Mental Health Scene Just Got a Major Upgrade',
        description: 'How digital therapy is breaking down barriers and making mental health care accessible to millions of Indians',
        image: 'https://images.pexels.com/photos/3759660/pexels-photo-3759660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        slug: '/tips/online-therapy-revolution',
      },
      {
        id: 10,
        title: 'Mood Swings 101: How to Ride Emotional Rollercoasters Without Crashing',
        description: 'A survival guide for teens who feel everything at maximum volume',
        image: 'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        slug: '/tips/mood-swings',
      },
    ],
  },
  {
    id: 'selfcare',
    name: 'Self-Care Practices',
    icon: <Coffee className="w-6 h-6" />,
    resources: [
      {
        id: 11,
        title: 'Mental Health Routine for People Who Hate Routines',
        description: 'Building flexible mental health anchors that work for chaos gremlins and overwhelmed humans',
        image: 'https://images.pexels.com/photos/4149036/pexels-photo-4149036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        slug: '/tips/mental-health-routine',
      },
      {
        id: 12,
        title: 'Self-Talk Isn\'t a Fairy Godmother — But It Can Be Your Anchor',
        description: 'A real, honest guide to using self-talk as emotional support without the toxic positivity',
        image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        slug: '/tips/self-talk-guide',
      },
    ],
  },
];

const AwarenessPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Mental Health Awareness & Tips" 
        subtitle="Practical resources to help you navigate common challenges"
        image="https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <div className="container-custom py-12">
        <div className="mb-16 max-w-3xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">About Our Resources</h3>
            <p className="text-neutral-700 mb-4">
              We've created these resources specifically for teens, addressing the unique challenges you face. 
              All information is evidence-based and reviewed by mental health professionals, but presented in 
              a relatable, accessible way.
            </p>
            <p className="text-neutral-700">
              Remember that these resources are meant to provide information and support, but they don't replace 
              professional help. If you're struggling, we encourage you to talk to a trusted adult, school counselor, 
              or mental health professional.
            </p>
          </Card>
        </div>
        
        <div className="space-y-16 mb-12">
          {categories.map((category, categoryIndex) => (
            <div key={category.id}>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary-100 text-primary-600 mr-4">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold text-neutral-800">
                  {category.name}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: resourceIndex * 0.1 + categoryIndex * 0.05 
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <Card className="h-full overflow-hidden">
                      <div className="relative">
                        <img 
                          src={resource.image} 
                          alt={resource.title} 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-neutral-800">
                          {resource.title}
                        </h3>
                        <p className="text-neutral-600 mb-4">
                          {resource.description}
                        </p>
                        <Link to={resource.slug}>
                          <Button variant="primary" className="w-full">
                            Read Article <ArrowRight size={16} className="ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AwarenessPage;