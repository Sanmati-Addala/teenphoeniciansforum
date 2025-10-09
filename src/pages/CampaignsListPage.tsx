import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { PageHeader } from '../components/shared/PageHeader';
import Card from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import {
  Calendar,
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

// Campaign Carousel Component (inline)
interface CampaignCarouselProps {
  title: string;
  images: string[];
}

const CampaignCarousel: React.FC<CampaignCarouselProps> = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Card className="overflow-hidden">
      <div className="p-4">
        <h4 className="font-semibold text-neutral-800 mb-3">{title}</h4>
        
        <div className="relative group">
          {/* Main Image */}
          <div className="relative aspect-video bg-neutral-100 rounded-lg overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=400';
              }}
            />
            
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="text-neutral-700" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="text-neutral-700" />
                </button>
              </>
            )}
          </div>

          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-500 w-6'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-2 text-sm text-neutral-500">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </Card>
  );
};

// Main Component
const CampaignsListPage: React.FC = () => {
  const { campaigns, loading } = useCampaigns();
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const campaignGalleries = [
    {
      title: 'Pieces of Us',
      images: ['/3767.jpeg', '/3768.jpeg', '/3770 (1).jpeg', '/3769 (1).jpeg', '/3771 (1).jpeg']
    },
    {
      title: 'Mental Health Awareness Week - 9',
      images: ['/3767 (2).jpeg', '/3767.jpeg', '/3768.jpeg', '/3770 (1).jpeg', '/3769.jpeg', '/3771.jpeg', '/3772.jpeg', '/3773.jpeg', '/3774.jpeg']
    },
    {
      title: 'Youth Empowerment',
      images: ['/3767 (1).jpeg', '/3767 (2).jpeg', '/3769 (1).jpeg', '/3771 (1).jpeg', '/3774.jpeg']
    }
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

                        <div className={`p-6 ${campaign.media_url ? 'md:w-2/3' : 'w-full'} flex flex-col`}>
                          <div className="flex-grow">
                            <div className={`flex items-center gap-2 mb-2`}>
                              <div className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(campaign.status)}`}>
                                {getStatusIcon(campaign.status)}
                                {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                              </div>
                            </div>
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

          {/* Campaign Galleries Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <h3 className="text-xl font-semibold text-neutral-800">Campaign Galleries</h3>
              {campaignGalleries.map((gallery, index) => (
                <motion.div
                  key={gallery.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CampaignCarousel title={gallery.title} images={gallery.images} />
                </motion.div>
              ))}
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