import { useState, useEffect } from 'react';
import { supabase, type VolunteerActivity, type CampaignActivity } from '../lib/supabase';
import { useAuth } from './useAuth';

type VolunteerActivityWithDetails = VolunteerActivity & {
  activity: CampaignActivity;
};

export const useVolunteerActivities = () => {
  const [activities, setActivities] = useState<VolunteerActivityWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalHours: 0,
    totalEvents: 0,
    completedEvents: 0
  });
  const { user } = useAuth();

  useEffect(() => {
    const fetchVolunteerActivities = async () => {
      if (!user) {
        setActivities([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('volunteer_activities')
          .select(`
            *,
            activity:campaign_activities(*)
          `)
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) throw error;

        const activitiesWithDetails = (data || []).map(item => ({
          ...item,
          activity: item.activity as CampaignActivity
        }));

        setActivities(activitiesWithDetails);

        // Calculate stats
        const totalHours = activitiesWithDetails.reduce((sum, activity) => sum + activity.hours_contributed, 0);
        const totalEvents = activitiesWithDetails.length;
        const completedEvents = activitiesWithDetails.filter(activity => activity.status === 'completed').length;

        setStats({
          totalHours,
          totalEvents,
          completedEvents
        });

      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteerActivities();
  }, [user]);

  const joinActivity = async (activityId: string) => {
    if (!user) return { success: false, error: 'User not authenticated' };

    try {
      const { error } = await supabase
        .from('volunteer_activities')
        .insert([{
          user_id: user.id,
          activity_id: activityId,
          status: 'joined'
        }]);

      if (error) throw error;
      
      // Refetch activities
      // This would trigger the useEffect above
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'Failed to join activity' 
      };
    }
  };

  const updateActivityStatus = async (activityId: string, status: 'completed' | 'cancelled', hours?: number) => {
    if (!user) return { success: false, error: 'User not authenticated' };

    try {
      const updateData: any = { status };
      if (status === 'completed') {
        updateData.completed_at = new Date().toISOString();
        if (hours) updateData.hours_contributed = hours;
      }

      const { error } = await supabase
        .from('volunteer_activities')
        .update(updateData)
        .eq('activity_id', activityId)
        .eq('user_id', user.id);

      if (error) throw error;
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'Failed to update activity' 
      };
    }
  };

  return {
    activities,
    loading,
    error,
    stats,
    joinActivity,
    updateActivityStatus
  };
};