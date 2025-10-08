import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const AnxiousButProductivePage: React.FC = () => {
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
                Anxious But Make It Productive: Channeling Overthinking Into Actual Power
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>January 15, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                Stop fighting your anxious brain and start working with it - your overthinking might actually be a superpower
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  Look, we need to have a real talk about anxiety. Not the "just breathe and think positive thoughts" kind of talk, but the "your brain is literally wired differently and that's not necessarily a bad thing" kind of talk.
                </p>

                <p>
                  If you're reading this while your mind is running through 47 different scenarios of how your presentation tomorrow could go wrong, you're in the right place. Your anxious brain isn't broken—it's just operating on a different frequency, and once you learn how to tune into it properly, it can actually become your secret weapon.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Overthinking Advantage (Yes, That's a Real Thing)
                </h2>

                <p>
                  Here's what nobody tells you about anxiety: anxious people are often incredibly detail-oriented, highly empathetic, and excellent at anticipating problems before they happen. Your brain's constant "what if" scenarios? That's advanced problem-solving in disguise.
                </p>

                <p>
                  Research shows that people with anxiety often perform better on tasks that require attention to detail and careful planning. Your overthinking isn't a bug—it's a feature that just needs better management.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Channeling Anxiety Into Productivity
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  1. The "Worry Window" Technique
                </h3>
                <p>
                  Instead of trying to stop worrying (spoiler: impossible), schedule it. Set aside 15-20 minutes each day as your designated worry time. When anxious thoughts pop up outside this window, write them down and tell your brain, "We'll deal with this at 7 PM."
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  2. Turn "What Ifs" Into "If Thens"
                </h3>
                <p>
                  Your brain loves creating disaster scenarios? Great! Use that. For every "what if something goes wrong," create an "if then" plan. "If I mess up my presentation, then I'll acknowledge it, take a breath, and continue." Having backup plans reduces anxiety and increases confidence.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  3. The Anxiety Energy Redirect
                </h3>
                <p>
                  That jittery, restless feeling? That's energy. Instead of fighting it, redirect it. Clean your room, organize your notes, go for a walk, or do some quick exercises. Physical movement helps process the stress hormones your body is producing.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Making Peace With Your Anxious Brain
                </h2>

                <p>
                  The goal isn't to eliminate anxiety—it's to work with it. Your anxious brain is trying to protect you, even if it's being a bit overzealous about it. Instead of fighting against it, try talking to it like you would a well-meaning but overly worried friend.
                </p>

                <p>
                  "Thanks, brain, for trying to keep me safe. I've got this handled, but I appreciate you looking out for me."
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  When to Seek Additional Support
                </h2>

                <p>
                  While these strategies can help manage everyday anxiety, remember that persistent, overwhelming anxiety that interferes with your daily life might benefit from professional support. There's no shame in getting help—it's actually another way of being productive about your mental health.
                </p>

                <p>
                  Your anxiety doesn't define you, but it doesn't have to limit you either. With the right strategies, that overthinking brain of yours can become one of your greatest assets.
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

export default AnxiousButProductivePage;