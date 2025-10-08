import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { PenLine } from "lucide-react";
import { Button } from '../ui/Button';
import { 
  Heart, 
  BookOpen, 
  User, 
  Edit3, 
  Calendar,
  MessageCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useStories } from '../../hooks/useStories';
import { useArticles } from '../../hooks/useArticles';
import { useProfile } from '../../hooks/useProfile';
import { useUserCampaigns } from '../../hooks/useUserCampaigns';
import { usePetitions } from '../../hooks/usePetitions';

export const RegularDashboard: React.FC = () => {
  const { stories, loading: storiesLoading } = useStories();
  const { articles, loading: articlesLoading } = useArticles();
  const { profile } = useProfile();
  const { userCampaigns, userActivities } = useUserCampaigns();
  const { petitions } = usePetitions();

  // Filter user's stories (this would need to be implemented in useStories)
  const userStories = stories.filter(story => story.user_id === profile?.user_id);
  const userPetitions = petitions.filter(petition => petition.user_id === profile?.user_id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-8">
      <div className="container-custom max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-800 mb-2">
              Welcome back, {profile?.display_name || 'Friend'}!
            </h1>
            <p className="text-neutral-600">Your personal space for mental health and community connection</p>
          </div>

          {/* Volunteer CTA */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-secondary-50 to-accent-50 border-secondary-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-3 bg-secondary-100 rounded-full mr-4">
                  <Sparkles className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-1">Ready to Make a Difference?</h3>
                  <p className="text-neutral-600">Join our volunteer community and help support other teens</p>
                </div>
              </div>
              <Link to="/volunteer">
                <Button variant="secondary" className="flex items-center">
                  Become a Volunteer
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* My Campaigns */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-800 mb-6">My Campaigns</h2>
              {userCampaigns.length === 0 ? (
                <Card className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">No Campaigns Yet</h3>
                  <p className="text-neutral-600 mb-4">Join campaigns to make a difference in your community</p>
                  <Link to="/campaigns">
                    <Button variant="primary">
                      Browse Campaigns
                    </Button>
                  </Link>
                </Card>
              ) : (
                <div className="space-y-4">
                  {userCampaigns.map((userCampaign) => (
                    <Card key={userCampaign.id} className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-neutral-800">
                          {userCampaign.campaign.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          userCampaign.role === 'volunteer' 
                            ? 'bg-secondary-100 text-secondary-800'
                            : 'bg-primary-100 text-primary-800'
                        }`}>
                          {userCampaign.role}
                        </span>
                      </div>
                      <p className="text-neutral-600 text-sm mb-3">{userCampaign.campaign.description}</p>
                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <span>Joined {new Date(userCampaign.joined_at).toLocaleDateString()}</span>
                        <Link to={`/campaign/${userCampaign.campaign.id}`} className="text-primary-600 hover:text-primary-700">
                          View Details
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* My Petitions */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-800 mb-6">My Petitions</h2>
              {userPetitions.length === 0 ? (
                <Card className="p-6 text-center">
                  <PenLine className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">No Petitions Yet</h3>
                  <p className="text-neutral-600 mb-4">Create a petition to advocate for change</p>
                  <Link to="/petitions">
                    <Button variant="secondary">
                      Browse Petitions
                    </Button>
                  </Link>
                </Card>
              ) : (
                <div className="space-y-4">
                  {userPetitions.map((petition) => (
                    <Card key={petition.id} className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-neutral-800">
                          {petition.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          petition.status === 'active' 
                            ? 'bg-success-100 text-success-800'
                            : petition.status === 'completed'
                            ? 'bg-primary-100 text-primary-800'
                            : 'bg-neutral-100 text-neutral-800'
                        }`}>
                          {petition.status}
                        </span>
                      </div>
                      <p className="text-neutral-600 text-sm mb-3 line-clamp-2">{petition.description}</p>
                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <span>{petition.signatures_count} / {petition.goal} signatures</span>
                        <Link to={`/petition/${petition.id}`} className="text-primary-600 hover:text-primary-700">
                          View Details
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Account Details */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Account Details</h2>
              <Card className="p-6">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-100 rounded-full mr-4">
                    <User className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800">
                      {profile?.display_name || 'Anonymous'}
                    </h3>
                    <p className="text-neutral-600">Community Member</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Display Name
                    </label>
                    <p className="text-neutral-800">{profile?.display_name || 'Not set'}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Member Since
                    </label>
                    <p className="text-neutral-800">
                      {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'Unknown'}
                    </p>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile - Contact Us
                </Button>
              </Card>
            </div>

            {/* My Stories */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-6">My Shared Stories</h2>
              
              {storiesLoading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
                </div>
              ) : userStories.length === 0 ? (
                <Card className="p-8 text-center">
                  <MessageCircle className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">No Stories Yet</h3>
                  <p className="text-neutral-600 mb-6">
                    Share your first story to connect with others and contribute to our community
                  </p>
                  <Link to="/share">
                    <Button variant="primary">
                      <Heart className="w-4 h-4 mr-2" />
                      Share Your Story
                    </Button>
                  </Link>
                </Card>
              ) : (
                <div className="space-y-4">
                  {userStories.map((story) => (
                    <Card key={story.id} className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center">
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mr-3">
                            {story.mood}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            story.is_approved 
                              ? 'bg-success-100 text-success-800'
                              : 'bg-warning-100 text-warning-800'
                          }`}>
                            {story.is_approved ? 'Published' : 'Under Review'}
                          </span>
                        </div>
                        <span className="text-sm text-neutral-500">
                          {new Date(story.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <p className="text-neutral-700 mb-4 line-clamp-3">
                        {story.content}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {story.likes_count} likes
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {story.comments_count} comments
                          </div>
                        </div>
                        {story.is_approved && (
                          <Link 
                            to={`/story/${story.id}`}
                            className="text-primary-600 hover:text-primary-700 font-medium"
                          >
                            View Story
                          </Link>
                        )}
                      </div>
                    </Card>
                  ))}
                  
                  <div className="text-center pt-4">
                    <Link to="/share">
                      <Button variant="outline">
                        <Heart className="w-4 h-4 mr-2" />
                        Share Another Story
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/awareness">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-accent-100 rounded-full mr-4">
                      <BookOpen className="w-6 h-6 text-accent-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-800">Browse Tips</h3>
                  </div>
                  <p className="text-neutral-600">Explore mental health resources and practical advice</p>
                </Card>
              </Link>

              <Link to="/campaigns">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-success-100 rounded-full mr-4">
                      <Calendar className="w-6 h-6 text-success-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-800">Join Campaigns</h3>
                  </div>
                  <p className="text-neutral-600">Join ongoing campaigns and make a difference</p>
                </Card>
              </Link>

              <Link to="/journey">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-warning-100 rounded-full mr-4">
                      <Heart className="w-6 h-6 text-warning-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-800">Our Journey</h3>
                  </div>
                  <p className="text-neutral-600">Read about our founders' personal experiences</p>
                </Card>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};