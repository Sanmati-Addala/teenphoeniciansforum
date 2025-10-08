import { useState, useEffect } from 'react';
import { supabase, type Campaign, type CampaignActivity } from '../lib/supabase';

export const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Add mock data for development
  const mockCampaigns: Campaign[] = [
    {
      id: 'pieces-of-us',
      title: 'Pieces Of Us',
      description: 'Join our week-long campaign where we will be coming to your schools. This campaign is rooted in the belief that every voice matters — even the quiet ones.',
      media_url: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'ongoing',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ];
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true);
        // For now, use mock data. In production, uncomment the Supabase code
        setCampaigns(mockCampaigns);
        
        // const { data, error } = await supabase
        //   .from('campaigns')
        //   .select('*')
        //   .order('created_at', { ascending: false });
        // if (error) throw error;
        // setCampaigns(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return {
    campaigns,
    loading,
    error
  };
};

export const useCampaignActivities = () => {
  const [activities, setActivities] = useState<CampaignActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchActivities = async (filters?: {
    location?: string;
    activity_type?: string;
    skills_required?: string[];
  }) => {
    try {
      setLoading(true);
      let query = supabase
        .from('campaign_activities')
        .select('*')
        .order('created_at', { ascending: false });

      if (filters?.location) {
        query = query.ilike('location', `%${filters.location}%`);
      }
      if (filters?.activity_type) {
        query = query.eq('activity_type', filters.activity_type);
      }

      const { data, error } = await query;

      if (error) throw error;
      setActivities(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return {
    activities,
    loading,
    error,
    searchActivities: fetchActivities
  };
};