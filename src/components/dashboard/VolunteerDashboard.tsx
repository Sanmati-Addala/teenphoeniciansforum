import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { Button } from '../ui/Button';
import { 
  Clock, 
  Calendar, 
  Award, 
  Search, 
  Filter, 
  MapPin, 
  Users,
  CheckCircle,
  Star
} from 'lucide-react';
import { useVolunteerActivities } from '../../hooks/useVolunteerActivities';
import { useCampaignActivities } from '../../hooks/useCampaigns';
import { useUserCampaigns } from '../../hooks/useUserCampaigns';
import { useProofSubmissions } from '../../hooks/useProofSubmissions';
import { ProofSubmissionModal } from '../volunteer/ProofSubmissionModal';

export const VolunteerDashboard: React.FC = () => {
  const { activities, stats, loading: activitiesLoading } = useVolunteerActivities();
  const { activities: availableActivities, searchActivities } = useCampaignActivities();
  const { userActivities } = useUserCampaigns();
  const { submissions } = useProofSubmissions();
  const [showProofModal, setShowProofModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    activity_type: '',
    search: ''
  });

  const handleSearch = () => {
    const filters: any = {};
    if (searchFilters.location) filters.location = searchFilters.location;
    if (searchFilters.activity_type) filters.activity_type = searchFilters.activity_type;
    searchActivities(filters);
  };

  const handleSubmitProof = (activityId: string) => {
    setSelectedActivity(activityId);
    setShowProofModal(true);
  };

  if (activitiesLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-8">
      <div className="container-custom max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-800 mb-2">Volunteer Dashboard</h1>
            <p className="text-neutral-600">Track your volunteer activities and find new opportunities</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800">{stats.totalHours}</h3>
                  <p className="text-neutral-600">Hours Contributed</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-secondary-100 rounded-full mr-4">
                  <Calendar className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800">{stats.totalEvents}</h3>
                  <p className="text-neutral-600">Events Joined</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-success-100 rounded-full mr-4">
                  <Award className="w-6 h-6 text-success-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800">{stats.completedEvents}</h3>
                  <p className="text-neutral-600">Completed Events</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* My Activities */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-800 mb-6">My Activities</h2>
              <div className="space-y-4">
                {userActivities.length === 0 ? (
                  <Card className="p-6 text-center">
                    <Users className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                    <p className="text-neutral-600">No activities yet. Join some activities to get started!</p>
                  </Card>
                ) : (
                  userActivities.map((activity) => (
                    <Card key={activity.id} className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-neutral-800">
                          {activity.activity.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          activity.status === 'completed' 
                            ? 'bg-success-100 text-success-800'
                            : activity.status === 'joined'
                            ? 'bg-primary-100 text-primary-800'
                            : activity.status === 'in_progress'
                            ? 'bg-warning-100 text-warning-800'
                            : 'bg-neutral-100 text-neutral-800'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                      <p className="text-neutral-600 mb-3">{activity.activity.description}</p>
                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {activity.activity.location}
                        </div>
                        {activity.status === 'completed' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleSubmitProof(activity.id)}
                          >
                            Submit Proof
                          </Button>
                        )}
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </div>

            {/* Activity Search */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Find New Activities</h2>
              
              {/* Search Filters */}
              <Card className="p-6 mb-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={searchFilters.location}
                        onChange={(e) => setSearchFilters(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter location"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Activity Type
                      </label>
                      <select
                        value={searchFilters.activity_type}
                        onChange={(e) => setSearchFilters(prev => ({ ...prev, activity_type: e.target.value }))}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">All Types</option>
                        <option value="teaching">Teaching</option>
                        <option value="awareness">Awareness</option>
                        <option value="event help">Event Help</option>
                        <option value="support">Support</option>
                      </select>
                    </div>
                  </div>
                  <Button onClick={handleSearch} className="w-full">
                    <Search className="w-4 h-4 mr-2" />
                    Search Activities
                  </Button>
                </div>
              </Card>

              {/* Available Activities */}
              <div className="space-y-4">
                {availableActivities.map((activity) => (
                  <Card key={activity.id} className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-semibold text-neutral-800">{activity.title}</h3>
                      <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">
                        {activity.activity_type || 'Activity'}
                      </span>
                    </div>
                    <p className="text-neutral-600 mb-3">{activity.description}</p>
                    <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {activity.location || 'Various locations'}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {activity.time_commitment}
                      </div>
                    </div>
                    {activity.skills_required && activity.skills_required.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-medium text-neutral-700 mb-2">Skills Required:</p>
                        <div className="flex flex-wrap gap-2">
                          {activity.skills_required.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <Button variant="primary" className="w-full">
                      Join Activity
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <ProofSubmissionModal 
        isOpen={showProofModal}
        onClose={() => {
          setShowProofModal(false);
          setSelectedActivity(null);
        }}
        activityId={selectedActivity}
      />
    </div>
  );
};