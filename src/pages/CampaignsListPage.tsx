import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { PageHeader } from '../components/shared/PageHeader';
import Card from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Calendar, 
  MapPin, 
  Filter, 
  CheckCircle2, 
  Clock, 
  Users,
  ArrowRight,
  Briefcase,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useCampaigns } from '../hooks/useCampaigns';

const CampaignsListPage: React.FC = () => {
  const { campaigns, loading } = useCampaigns();
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample campaign images for carousel
  const campaignImages = [
    'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    'https://images.pexels.com/photos/8363771/pexels-photo-8363771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
  ];

  const filteredCampaigns = campaigns.filter(campaign => {
    if (statusFilter === 'all') return true;
    return campaign.status === statusFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing':
        return 'bg-success-100 text-success-800 border-success-200';
      case 'completed':
        return 'bg-neutral-100 text-neutral-800 border-neutral-200';
      case 'planned':
        return 'bg-primary-100 text-primary-800 border-primary-200';
      default:
        return 'bg-neutral-100 text-neutral-800 border-neutral-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ongoing':
        return <Clock className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'planned':
        return <Calendar className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % campaignImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + campaignImages.length) % campaignImages.length);
  };

  return (
    <Layout>
      <PageHeader 
        title="Our Campaigns" 
        subtitle="Discover ongoing and past initiatives making a difference in teen mental health"
        image="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Filter Section */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-semibold text-neutral-800">All Campaigns</h2>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center px-4 py-2 border border-neutral-300 rounded-md">
                    <Filter size={16} className="text-neutral-400 mr-2" />
                    <select 
                      className="bg-transparent appearance-none focus:outline-none pr-8 text-neutral-700"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option value="all">All Status</option>
                      <option value="ongoing">Ongoing</option>
                      <option value="completed">Completed</option>
                      <option value="planned">Planned</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
              </div>
            ) : filteredCampaigns.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-600 mb-2">No campaigns found</h3>
                <p className="text-neutral-500">Check back later for new campaigns and initiatives</p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredCampaigns.map((campaign, index) => (
                  <motion.div
                    key={campaign.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden">
                      <div className="md:flex">
                        {campaign.media_url && (
                          <div className="md:w-1/3 relative">
                            <img 
                              src={campaign.media_url} 
                              alt={campaign.title} 
                              className="w-full h-64 md:h-full object-cover"
                            />
                            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(campaign.status)}`}>
                              {getStatusIcon(campaign.status)}
                              {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                            </div>
                          </div>
                        )}
                        
                        <div className="p-6 md:w-2/3 flex flex-col">
                          <div className="flex-grow">
                            <h3 className="text-2xl font-semibold mb-3 text-neutral-800">{campaign.title}</h3>
                            <p className="text-neutral-600 mb-4">{campaign.description}</p>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center text-sm text-neutral-500">
                              <Calendar size={16} className="mr-2" />
                              Created {new Date(campaign.created_at).toLocaleDateString()}
                            </div>
                            
                            <div className="flex gap-2">
                              <Link to={`/campaign/${campaign.id}`} className="flex-1">
                                <Button variant="primary" className="w-full">
                                  Learn More
                                  <ArrowRight size={16} className="ml-2" />
                                </Button>
                              </Link>
                              {campaign.status === 'ongoing' && (
                                <Button variant="outline" className="flex items-center">
                                  <Briefcase size={16} className="mr-1" />
                                  Volunteer
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Photo Carousel Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Campaign Gallery</h3>
              <Card className="p-4">
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img 
                      src={campaignImages[currentImageIndex]} 
                      alt={`Campaign photo ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                  </div>
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                  >
                    <ChevronLeft size={20} className="text-neutral-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                  >
                    <ChevronRight size={20} className="text-neutral-700" />
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="flex justify-center space-x-2 mt-4">
                    {campaignImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-primary-500' 
                            : 'bg-neutral-300 hover:bg-neutral-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-neutral-600 text-center">
                    Photo {currentImageIndex + 1} of {campaignImages.length}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50">
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
              Want to Get Involved?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Join our volunteer community and help make a difference in teen mental health. 
              Every contribution, big or small, helps create positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="px-8">
                Become a Volunteer
              </Button>
              <Button variant="outline" className="px-8">
                Contact Us
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CampaignsListPage;