import React from 'react';
import Layout from '../components/layout/Layout';
import { PageHeader } from '../components/shared/PageHeader';
import { StoryForm } from '../components/sharing/StoryForm';
import { StoriesWall } from '../components/sharing/StoriesWall';

const SharingPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Share Your Story" 
        subtitle="A safe space to express yourself anonymously and connect with others who understand"
        image="https://images.pexels.com/photos/3889988/pexels-photo-3889988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <div className="container-custom py-12">
        <div className="mb-16">
          <StoryForm />
        </div>
        
        <div className="mb-8 text-center">
          <h2 className="section-title">Stories From Our Community</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Read stories shared by teens just like you. Remember, you're never alone in your journey.
          </p>
        </div>
        
        <StoriesWall />
      </div>
    </Layout>
  );
};

export default SharingPage;