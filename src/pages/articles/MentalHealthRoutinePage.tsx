import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const MentalHealthRoutinePage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 md:p-12"
          >
            {/* Back Link */}
            <Link 
              to="/awareness" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Tips
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 leading-tight">
                Mental Health Routine for People Who Hate Routines
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>February 20, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                Building flexible mental health anchors that work for chaos gremlins and overwhelmed humans
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  If you're the type of person who sees the word "routine" and immediately wants to run in the opposite direction, this one's for you. Maybe you've tried those perfect morning routines you see on social media—you know, the ones where people wake up at 5 AM, meditate for an hour, journal their deepest thoughts, and somehow have time to make a smoothie bowl that looks like art.
                </p>

                <p>
                  Yeah, that lasted about three days, didn't it?
                </p>

                <p>
                  Here's the thing: mental health doesn't require perfect routines or Instagram-worthy habits. It requires flexible anchors—small, adaptable practices that keep you grounded even when life gets chaotic (which, let's be honest, is most of the time).
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Why Traditional Routines Don't Work for Everyone
                </h2>

                <p>
                  Some brains thrive on structure and predictability. Others feel suffocated by rigid schedules and rebel against anything that feels too controlling. If you're in the second camp, you're not broken or undisciplined—you just need a different approach.
                </p>

                <p>
                  Routine-resistant people often have:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>ADHD or other neurodivergent traits</li>
                  <li>Anxiety that makes rigid schedules feel overwhelming</li>
                  <li>Creative personalities that need flexibility to function</li>
                  <li>Unpredictable schedules due to work, school, or family obligations</li>
                  <li>A history of using control as a coping mechanism (and now routines feel triggering)</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Anchor System: Flexible Mental Health Practices
                </h2>

                <p>
                  Instead of rigid routines, think of mental health anchors—small practices you can do consistently, but with flexibility in when and how you do them. These anchors keep you grounded without feeling restrictive.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Anchor #1: The Daily Check-In (30 seconds to 5 minutes)
                </h3>
                <p>
                  Once a day, ask yourself: "How am I doing right now?" That's it. You can do this:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>While brushing your teeth</li>
                  <li>During your commute</li>
                  <li>Before bed</li>
                  <li>While waiting for your coffee to brew</li>
                  <li>Literally any time that works for you</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Anchor #2: The Movement Moment (1-20 minutes)
                </h3>
                <p>
                  Move your body in some way every day. This doesn't mean hitting the gym or following a workout video. It means:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dancing to one song</li>
                  <li>Stretching while watching TV</li>
                  <li>Taking the stairs instead of the elevator</li>
                  <li>Walking around the block</li>
                  <li>Doing jumping jacks during commercial breaks</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Anchor #3: The Breathing Reset (30 seconds to 3 minutes)
                </h3>
                <p>
                  Once a day, take some intentional deep breaths. You can:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Do the 4-7-8 breathing technique (inhale for 4, hold for 7, exhale for 8)</li>
                  <li>Take three deep breaths before getting out of bed</li>
                  <li>Breathe deeply while waiting in line</li>
                  <li>Use a breathing app for 1-2 minutes</li>
                  <li>Just focus on your breath while doing something else</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Anchor #4: The Connection Touch (1-10 minutes)
                </h3>
                <p>
                  Connect with another human being in some way every day:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Send a meme to a friend</li>
                  <li>Call someone while walking</li>
                  <li>Have a real conversation with a family member</li>
                  <li>Comment meaningfully on someone's social media post</li>
                  <li>Smile at a stranger</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Anchor #5: The Gratitude Glance (30 seconds to 2 minutes)
                </h3>
                <p>
                  Notice one thing you're grateful for each day. You don't need a gratitude journal or formal practice:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Appreciate your morning coffee</li>
                  <li>Notice something beautiful on your way to school/work</li>
                  <li>Thank someone (even silently) for something they did</li>
                  <li>Acknowledge something your body did well today</li>
                  <li>Appreciate a moment of comfort or peace</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Making It Work for Your Chaotic Life
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Stack Your Anchors
                </h3>
                <p>
                  Attach your mental health anchors to things you already do. Brush your teeth? That's when you check in with yourself. Waiting for the bus? Perfect time for some deep breathing.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Use the "Good Enough" Rule
                </h3>
                <p>
                  Did you take three deep breaths instead of meditating for 20 minutes? Good enough. Did you text a friend instead of having a deep conversation? Good enough. Progress over perfection, always.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Create Backup Plans
                </h3>
                <p>
                  Have multiple ways to hit each anchor. If you can't go for a walk, you can stretch. If you can't call a friend, you can send a text. Flexibility is the key to sustainability.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Track Loosely
                </h3>
                <p>
                  If tracking helps you, keep it simple. Use a basic app, put checkmarks on a calendar, or just notice patterns without formal tracking. The goal is awareness, not perfection.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  When Life Gets Extra Chaotic
                </h2>

                <p>
                  Some days, you'll only manage one anchor. Some days, you might not manage any. That's not failure—that's being human. The beauty of the anchor system is that you can always start again tomorrow, or even later today.
                </p>

                <p>
                  During particularly stressful periods:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Lower your expectations temporarily</li>
                  <li>Focus on just one anchor per day</li>
                  <li>Ask for help maintaining your anchors</li>
                  <li>Remember that rest is also a mental health practice</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Building Your Personal Anchor System
                </h2>

                <p>
                  Start with just one or two anchors that feel most doable for you right now. You can always add more later. The goal is to create a sustainable system that supports your mental health without adding stress to your life.
                </p>

                <p>
                  Consider your:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Natural energy patterns (are you a morning person or night owl?)</li>
                  <li>Existing habits you can build on</li>
                  <li>Biggest mental health challenges (anxiety, depression, stress, etc.)</li>
                  <li>Available time and energy</li>
                  <li>What has worked for you in the past</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Bottom Line
                </h2>

                <p>
                  Mental health doesn't require perfect routines, expensive apps, or hours of daily practice. It requires small, consistent actions that help you stay connected to yourself and your wellbeing.
                </p>

                <p>
                  Your mental health routine should work for your life, not against it. If something feels too rigid, too time-consuming, or too overwhelming, adjust it. The best mental health practice is the one you'll actually do.
                </p>

                <p>
                  Remember: you're not trying to become a different person. You're trying to take better care of the person you already are, chaos and all.
                </p>

                <p>
                  Start small, be flexible, and trust that these tiny anchors can create significant positive changes in your mental health over time. You've got this, even when it doesn't feel like it.
                </p>
              </div>
            </article>

            {/* Back Link */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <Link 
                to="/awareness" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Tips
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default MentalHealthRoutinePage;