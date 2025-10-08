import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { PageHeader } from '../components/shared/PageHeader';
import Card from '../components/ui/Card';
import { VolunteerForm } from '../components/volunteer/VolunteerForm';
import { Heart, Users, Lightbulb, Award } from 'lucide-react';

const benefits = [
  {
    icon: <Heart className="w-12 h-12 text-secondary-500" />,
    title: 'Make a Difference',
    description: 'Directly impact the lives of teens struggling with mental health challenges by creating a supportive community.',
  },
  {
    icon: <Users className="w-12 h-12 text-primary-500" />,
    title: 'Build Your Network',
    description: 'Connect with like-minded peers and professionals passionate about mental health advocacy.',
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-accent-500" />,
    title: 'Develop New Skills',
    description: 'Gain valuable experience in communication, leadership, content creation, event planning, and more.',
  },
  {
    icon: <Award className="w-12 h-12 text-success-500" />,
    title: 'Enhance Your Resume',
    description: 'Volunteering demonstrates commitment, compassion, and initiative to future schools and employers.',
  },
];

const VolunteerPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Volunteer With Us" 
        subtitle="Join our team and help make a difference in teen mental health"
        image="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="section-title mb-6">What Volunteers Do</h2>
            <Card className="p-8 h-full">
              <p className="text-neutral-700 mb-6">
                Our volunteers are the heart of Teen Phoenicians. Depending on your interests, skills, and availability, you might:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex">
                  <span className="text-secondary-500 mr-3">•</span>
                  <span>Help moderate and respond to posts on our Anonymous Sharing Wall</span>
                </li>
                <li className="flex">
                  <span className="text-secondary-500 mr-3">•</span>
                  <span>Create content for our social media channels and magazine</span>
                </li>
                <li className="flex">
                  <span className="text-secondary-500 mr-3">•</span>
                  <span>Assist with organizing and running awareness campaigns and events</span>
                </li>
                <li className="flex">
                  <span className="text-secondary-500 mr-3">•</span>
                  <span>Help develop and review resources for our Awareness & Tips section</span>
                </li>
                <li className="flex">
                  <span className="text-secondary-500 mr-3">•</span>
                  <span>Represent Teen Phoenicians at school and community events</span>
                </li>
               <li className="flex">
  <span className="text-secondary-500 mr-3">•</span>
  <a
    href="https://linktr.ee/teenphoenicians" 
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    GO THROUGH OUR DETAILED VOLUNTEER GUIDE IN LINKTREE
  </a>
</li> 
              </ul>
              <p className="text-neutral-700">
                Volunteers typically commit 2-5 hours per week, with flexible scheduling. All volunteers receive training and ongoing support from our team.
              </p>
            </Card>
          </div>
          
          <div>
            <h2 className="section-title mb-6">Volunteer Benefits</h2>
            <Card className="p-8 h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-neutral-800">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="section-title text-center mb-8">Volunteer Application</h2>
          <VolunteerForm />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4 text-neutral-800 text-center">
              Have Questions?
            </h3>
            <p className="text-neutral-700 text-center mb-0">
              If you have any questions about volunteering with Teen Phoenicians, please 
              <a href="/contact" className="text-primary-600 hover:text-primary-700 mx-1">
                contact us
              </a>
              and we'll get back to you as soon as possible.
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default VolunteerPage;