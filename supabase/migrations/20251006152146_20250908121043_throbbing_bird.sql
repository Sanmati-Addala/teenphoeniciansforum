/*
  # Create volunteer applications and related tables

  1. New Tables
    - `volunteer_applications`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `full_name` (text)
      - `email_address` (text)
      - `contact_number` (text)
      - `preferred_areas` (text array)
      - `availability` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `campaigns`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `media_url` (text)
      - `status` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `campaign_activities`
      - `id` (uuid, primary key)
      - `campaign_id` (uuid, foreign key)
      - `title` (text)
      - `description` (text)
      - `location` (text)
      - `activity_type` (text)
      - `time_commitment` (text)
      - `skills_required` (text array)
      - `created_at` (timestamp)
    
    - `volunteer_activities`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `activity_id` (uuid, foreign key)
      - `hours_contributed` (integer)
      - `status` (text)
      - `completed_at` (timestamp)
      - `created_at` (timestamp)
    
    - `articles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `title` (text)
      - `content` (text)
      - `category` (text)
      - `tags` (text array)
      - `status` (text)
      - `published_at` (timestamp)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create volunteer_applications table
CREATE TABLE IF NOT EXISTS volunteer_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  full_name text NOT NULL,
  email_address text NOT NULL,
  contact_number text,
  preferred_areas text[] DEFAULT '{}',
  availability text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create campaigns table
CREATE TABLE IF NOT EXISTS campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  media_url text,
  status text DEFAULT 'ongoing' CHECK (status IN ('ongoing', 'completed', 'planned')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create campaign_activities table
CREATE TABLE IF NOT EXISTS campaign_activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id uuid REFERENCES campaigns(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  location text,
  activity_type text NOT NULL,
  time_commitment text,
  skills_required text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create volunteer_activities table
CREATE TABLE IF NOT EXISTS volunteer_activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  activity_id uuid REFERENCES campaign_activities(id) ON DELETE CASCADE NOT NULL,
  hours_contributed integer DEFAULT 0,
  status text DEFAULT 'joined' CHECK (status IN ('joined', 'completed', 'cancelled')),
  completed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  category text,
  tags text[] DEFAULT '{}',
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Add volunteer status to profiles table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'profiles' AND column_name = 'is_volunteer'
  ) THEN
    ALTER TABLE profiles ADD COLUMN is_volunteer boolean DEFAULT false;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'profiles' AND column_name = 'volunteer_hours'
  ) THEN
    ALTER TABLE profiles ADD COLUMN volunteer_hours integer DEFAULT 0;
  END IF;
END $$;

-- Enable RLS
ALTER TABLE volunteer_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteer_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for volunteer_applications
CREATE POLICY "Users can insert own volunteer application"
  ON volunteer_applications
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own volunteer application"
  ON volunteer_applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own volunteer application"
  ON volunteer_applications
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for campaigns
CREATE POLICY "Anyone can read campaigns"
  ON campaigns
  FOR SELECT
  TO public
  USING (true);

-- RLS Policies for campaign_activities
CREATE POLICY "Anyone can read campaign activities"
  ON campaign_activities
  FOR SELECT
  TO public
  USING (true);

-- RLS Policies for volunteer_activities
CREATE POLICY "Users can insert own volunteer activities"
  ON volunteer_activities
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own volunteer activities"
  ON volunteer_activities
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own volunteer activities"
  ON volunteer_activities
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for articles
CREATE POLICY "Users can insert own articles"
  ON articles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own articles"
  ON articles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Anyone can read published articles"
  ON articles
  FOR SELECT
  TO public
  USING (status = 'published');

CREATE POLICY "Users can update own articles"
  ON articles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Insert sample campaigns
INSERT INTO campaigns (title, description, status) VALUES
('Mental Health Awareness Week', 'A week-long campaign to raise awareness about teen mental health issues through workshops and events.', 'ongoing'),
('Peer Support Training', 'Training program for volunteers to become peer support facilitators.', 'ongoing'),
('Community Outreach Program', 'Reaching out to schools and communities to spread mental health awareness.', 'completed');

-- Insert sample campaign activities
INSERT INTO campaign_activities (campaign_id, title, description, location, activity_type, time_commitment, skills_required)
SELECT 
  c.id,
  'Workshop Facilitation',
  'Help facilitate mental health awareness workshops in local schools.',
  'Various Schools',
  'teaching',
  '3-4 hours per session',
  ARRAY['public speaking', 'mental health knowledge']
FROM campaigns c WHERE c.title = 'Mental Health Awareness Week';

INSERT INTO campaign_activities (campaign_id, title, description, location, activity_type, time_commitment, skills_required)
SELECT 
  c.id,
  'Event Setup and Support',
  'Help with setting up and managing awareness events.',
  'Community Centers',
  'event help',
  '2-3 hours per event',
  ARRAY['organization', 'teamwork']
FROM campaigns c WHERE c.title = 'Mental Health Awareness Week';

-- Insert sample articles
INSERT INTO articles (user_id, title, content, category, tags, status, published_at)
SELECT 
  (SELECT id FROM auth.users LIMIT 1),
  'Understanding Teen Anxiety',
  'A comprehensive guide to understanding and managing anxiety in teenagers...',
  'Mental Health',
  ARRAY['anxiety', 'teens', 'mental health'],
  'published',
  now() - interval '1 week'
WHERE EXISTS (SELECT 1 FROM auth.users);