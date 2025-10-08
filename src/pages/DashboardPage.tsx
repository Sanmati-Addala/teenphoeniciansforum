import React from 'react';
import { useProfile } from '../hooks/useProfile';
import { useVolunteerApplications } from '../hooks/useVolunteerApplications';
import { VolunteerDashboard } from '../components/dashboard/VolunteerDashboard';
import { RegularDashboard } from '../components/dashboard/RegularDashboard';
import Layout from '../components/layout/Layout';

const DashboardPage: React.FC = () => {
  const { profile, loading: profileLoading } = useProfile();
  const { application, loading: appLoading } = useVolunteerApplications();

  const loading = profileLoading || appLoading;

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      </Layout>
    );
  }

  // Determine if user is approved as a volunteer
  const isApprovedVolunteer = application?.status === 'approved';

  return (
    <Layout>
      <RegularDashboard />
      {isApprovedVolunteer && <VolunteerDashboard />}
    </Layout>
  );
};

export default DashboardPage;
