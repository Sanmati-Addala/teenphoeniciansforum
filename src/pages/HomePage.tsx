import React from 'react';
import Layout from '../components/layout/Layout';
import { HeroSection } from '../components/home/HeroSection';
import { WhoWeAreSection } from '../components/home/WhoWeAreSection';
import FeaturedSharing from '../components/home/FeaturedSharing';
import { AwarenessPreview } from '../components/home/AwarenessPreview';
import { CampaignsPreview } from '../components/home/CampaignsPreview';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <WhoWeAreSection />
      <FeaturedSharing />
      <AwarenessPreview />
      <CampaignsPreview />
    </Layout>
  );
};

export default HomePage;