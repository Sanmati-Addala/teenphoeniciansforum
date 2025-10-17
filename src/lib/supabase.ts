import { createClient } from '@supabase/supabase-js';

// Read environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Log status for debugging
console.log('🔹 Supabase config:', {
  url: supabaseUrl ? 'Set' : 'Missing',
  key: supabaseAnonKey ? 'Set' : 'Missing'
});

// Throw error if missing
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY'
  );
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Optional: test fetch to confirm connection
(async () => {
  try {
    const { data, error } = await supabase
      .from('stories') // replace with a real table
      .select('*')
      .limit(1);

    if (error) {
      console.error('❌ Supabase fetch error:', error);
    } else {
      console.log('✅ Supabase fetch success, sample data:', data);
    }
  } catch (err) {
    console.error('🚨 Network/fetch error:', err);
  }
})();


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase config:', {
  url: supabaseUrl ? 'Set' : 'Missing',
  key: supabaseAnonKey ? 'Set' : 'Missing'
});

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please connect to Supabase first.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

export type Story = {
  id: string;
  user_id: string;
  nickname: string;
  mood: string;
  content: string;
  created_at: string;
  is_approved: boolean;
  likes_count: number;
  comments_count: number;
};

export type Profile = {
  id: string;
  user_id: string;
  display_name: string | null;
  is_volunteer: boolean;
  volunteer_hours: number;
  created_at: string;
  updated_at: string;
};

export type VolunteerApplication = {
  id: string;
  user_id: string;
  full_name: string;
  email_address: string;
  contact_number: string | null;
  preferred_areas: string[];
  availability: string | null;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
};

export type Campaign = {
  id: string;
  title: string;
  description: string;
  media_url: string | null;
  status: 'ongoing' | 'completed' | 'planned';
  created_at: string;
  updated_at: string;
  support_needed: string[] | null;
  petition_url: string | null;
};

export type CampaignActivity = {
  id: string;
  campaign_id: string;
  title: string;
  description: string;
  location: string | null;
  activity_type: string;
  time_commitment: string | null;
  skills_required: string[];
  created_at: string;
};

export type VolunteerActivity = {
  id: string;
  user_id: string;
  activity_id: string;
  hours_contributed: number;
  status: 'joined' | 'completed' | 'cancelled';
  completed_at: string | null;
  created_at: string;
};

export type Article = {
  id: string;
  user_id: string;
  title: string;
  content: string;
  category: string | null;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type Petition = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  petition_url: string;
  signatures_count: number;
  goal: number;
  status: 'active' | 'completed' | 'closed';
  category: string;
  created_at: string;
  updated_at: string;
};

export type UserCampaign = {
  id: string;
  user_id: string;
  campaign_id: string;
  role: 'individual' | 'volunteer';
  joined_at: string;
};

export type UserActivity = {
  id: string;
  user_id: string;
  activity_id: string;
  user_campaign_id: string;
  status: 'joined' | 'in_progress' | 'completed' | 'cancelled';
  joined_at: string;
};

export type Organization = {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
};

export type SquadTask = {
  id: string;
  organization_id: string;
  activity_id: string;
  task_name: string;
  description: string | null;
  priority: 'low' | 'medium' | 'high';
  created_at: string;
};

export type ProofSubmission = {
  id: string;
  user_activity_id: string;
  proof_type: 'file' | 'link';
  proof_url: string;
  description: string | null;
  is_verified: boolean;
  submitted_at: string;
  verified_at: string | null;
};