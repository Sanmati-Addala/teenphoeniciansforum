import { useState, useEffect } from 'react';
import { supabase, type ProofSubmission } from '../lib/supabase';
import { useAuth } from './useAuth';

export const useProofSubmissions = () => {
  const [submissions, setSubmissions] = useState<ProofSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const fetchSubmissions = async () => {
    if (!user) {
      setSubmissions([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('proof_submissions')
        .select(`
          *,
          user_activity:user_activities(
            *,
            activity:campaign_activities(*)
          )
        `)
        .eq('user_activities.user_id', user.id)
        .order('submitted_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [user]);

  const submitProof = async (userActivityId: string, proofData: {
    proof_type: 'file' | 'link';
    proof_url: string;
    description?: string;
  }) => {
    if (!user) return { success: false, error: 'User not authenticated' };

    try {
      const { error } = await supabase
        .from('proof_submissions')
        .insert([{
          user_activity_id: userActivityId,
          ...proofData
        }]);

      if (error) throw error;
      
      await fetchSubmissions();
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'Failed to submit proof' 
      };
    }
  };

  return {
    submissions,
    loading,
    error,
    submitProof,
    refetch: fetchSubmissions
  };
};