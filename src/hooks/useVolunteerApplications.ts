import { useState, useEffect } from 'react';
import { supabase, type VolunteerApplication } from '../lib/supabase';
import { useAuth } from './useAuth';

export const useVolunteerApplications = () => {
  const [application, setApplication] = useState<VolunteerApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchApplication = async () => {
      if (!user) {
        setApplication(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('volunteer_applications')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') throw error;
        setApplication(data || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [user]);

  const submitApplication = async (applicationData: {
    full_name: string;
    email_address: string;
    contact_number?: string;
    preferred_areas: string[];
    availability?: string;
  }) => {
    if (!user) return { success: false, error: 'User not authenticated' };

    try {
      const { error } = await supabase
        .from('volunteer_applications')
        .insert([{
          ...applicationData,
          user_id: user.id
        }]);

      if (error) throw error;

      // Refetch application
      const { data } = await supabase
        .from('volunteer_applications')
        .select('*')
        .eq('user_id', user.id)
        .single();

      setApplication(data);
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'Failed to submit application' 
      };
    }
  };

  return {
    application,
    loading,
    error,
    submitApplication,
    hasApplication: !!application
  };
};