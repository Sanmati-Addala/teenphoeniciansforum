import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { PageHeader } from '../components/shared/PageHeader';
import Card from '../components/ui/Card';
import { Calendar, BookOpen, Heart } from 'lucide-react';

const MagazinePage: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Teen Phoenicians Magazine" 
        subtitle="Coming Soon - Monthly digital publications exploring teen mental health topics"
        image="https://images.pexels.com/photos/6956892/pexels-photo-6956892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <div className="container-custom py-12">
        <div className="mb-12">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">About Our Magazine</h3>
            <p className="text-neutral-700 mb-4">
              Teen Phoenicians Magazine will be a monthly digital publication created by teens, for teens. Each issue will focus on different aspects of mental health and wellbeing, featuring personal stories, expert advice, and practical resources.
            </p>
            <p className="text-neutral-700">
              Our magazine will be completely free and can be viewed online or downloaded as a PDF. If you'd like to contribute to future issues with your story, artwork, or article, please reach out to us through the <a href="/feedback" className="text-primary-600 hover:text-primary-700">Feedback page</a>.
            </p>
          </Card>
        </div>
        
        {/* Coming Soon Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-12 bg-gradient-to-br from-primary-50 to-secondary-50">
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary-100 rounded-full">
                    <BookOpen className="w-12 h-12 text-primary-600" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                  Coming Soon!
                </h2>
                
                <div className="flex items-center justify-center mb-6">
                  <Calendar className="w-5 h-5 text-secondary-600 mr-2" />
                  <span className="text-xl font-semibold text-secondary-700">
                    September 23, 2025
                  </span>
                </div>
                
                <p className="text-lg text-neutral-700 mb-8">
                  Our first issue is launching soon! To commemorate this National Suicide Prevention Month & National Recovery Month. We're working hard to create something special for our community. 
                  Stay tuned for our inaugural magazine featuring teen stories, mental health resources, and expert insights.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="p-3 bg-secondary-100 rounded-full w-fit mx-auto mb-3">
                      <Heart className="w-6 h-6 text-secondary-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Personal Stories</h4>
                    <p className="text-sm text-neutral-600">Real experiences from teens in our community</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-3 bg-accent-100 rounded-full w-fit mx-auto mb-3">
                      <BookOpen className="w-6 h-6 text-accent-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Expert Advice</h4>
                    <p className="text-sm text-neutral-600">Professional insights on teen mental health</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-3 bg-success-100 rounded-full w-fit mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-success-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Monthly Issues</h4>
                    <p className="text-sm text-neutral-600">Fresh content every month, completely free</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        
        {/* Get Notified Section */}
        <div className="text-center">
          <Card className="p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">
              Want to be notified when we launch?
            </h3>
            <p className="text-neutral-600 mb-6">
              Follow our journey and be the first to know when our magazine goes live. 
              We'll also share behind-the-scenes content and updates about upcoming issues.
            </p>
            <p className="text-sm text-neutral-500">
              Stay connected through our other pages and social media for the latest updates!
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MagazinePage;