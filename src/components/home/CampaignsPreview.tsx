import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const CampaignsPreview: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-custom text-center">
        <h2 className="section-title mb-4">Upcoming Campaigns</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
          Get involved with our initiatives to make a difference in teen mental health
        </p>
        <Link to="/campaigns">
          <Button variant="accent">View All Campaigns</Button>
        </Link>
      </div>
    </section>
  );
};
