import { useState, useEffect } from 'react';
import { supabase, type UserCampaign, type UserActivity, type Campaign, type CampaignActivity } from '../lib/supabase';
import { useAuth } from './useAuth';

type UserCampaignWithDetails = UserCampaign & {
  campaign: Campaign;
};

type UserActivityWithDetails = UserActivity & {
  activity: CampaignActivity;
  user_campaign: UserCampaign & { campaign: Campaign };
};

export const useUserCampaigns = () => {
  const [userCampaigns, setUserCampaigns] = useState<UserCampaignWithDetails[]>([]);
  const [userActivities, setUserActivities] = useState<UserActivityWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const fetchUserCampaigns = async () => {
    if (!user) {
      setUserCampaigns([]);
      setUserActivities([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      
      // Fetch user campaigns with campaign details
      const { data: campaignsData, error: campaignsError } = await supabase
        .from('user_campaigns')
        .select(`
          *,
          campaign:campaigns(*)
        `)
        .eq('user_id', user.id)
        .order('joined_at', { ascending: false });

      if (campaignsError) throw campaignsError;

      // Fetch user activities with details
      const { data: activitiesData, error: activitiesError } = await supabase
        .from('user_activities')
        .select(`
          *,
          activity:campaign_activities(*),
          user_campaign:user_campaigns(
            *,
            campaign:campaigns(*)
          )
        `)
        .eq('user_id', user.id)
        .order('joined_at', { ascending: false });

      if (activitiesError) throw activitiesError;

      setUserCampaigns(campaignsData || []);
      setUserActivities(activitiesData || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserCampaigns();
  }, [user]);

  const joinCampaign = async (campaignId: string, role: 'individual' | 'volunteer', selectedActivities?: string[]) => {
    if (!user) return { success: false, error: 'User not authenticated' };

    try {
      // Insert user campaign
      const { data: userCampaignData, error: campaignError } = await supabase
        .from('user_campaigns')
        .insert([{
          user_id: user.id,
          campaign_id: campaignId,
          role
        }])
        .select()
        .single();

      if (campaignError) throw campaignError;

      // If volunteer role and activities selected, insert user activities
      if (role === 'volunteer' && selectedActivities && selectedActivities.length > 0) {
        const activitiesData = selectedActivities.map(activityId => ({
          user_id: user.id,
          activity_id: activityId,
          user_campaign_id: userCampaignData.id
        }));

        const { error: activitiesError } = await supabase
          .from('user_activities')
          .insert(activitiesData);

        if (activitiesError) throw activitiesError;
      }

      await fetchUserCampaigns();
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'Failed to join campaign' 
      };
    }
  };

  const updateActivityStatus = async (activityId: string, status: 'in_progress' | 'completed' | 'cancelled') => {
    if (!user) return { success: false, error: 'User not authenticated' };

    try {
      const { error } = await supabase
        .from('user_activities')
        .update({ status })
        .eq('activity_id', activityId)
        .eq('user_id', user.id);

      if (error) throw error;
      
      await fetchUserCampaigns();
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'Failed to update activity status' 
      };
    }
  };

  return {
    userCampaigns,
    userActivities,
    loading,
    error,
    joinCampaign,
    updateActivityStatus,
    refetch: fetchUserCampaigns
  };
};