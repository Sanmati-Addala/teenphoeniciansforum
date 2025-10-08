import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const OnlineTherapyPage: React.FC = () => {
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
                The Online Therapy Revolution: Why India's Mental Health Scene Just Got a Major Upgrade
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>February 10, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                How digital therapy is breaking down barriers and making mental health care accessible to millions of Indians
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  Bro, remember when therapy meant awkward waiting rooms, judgmental aunties spotting you at the clinic, and basically announcing to your entire neighborhood that you're "seeing someone" for your mental health? Yeah, those days are pretty much over. Welcome to 2025, where therapy happens in your PJs, through your phone, and nobody has to know except you and your therapist.
                </p>

                <p>
                  India's mental health scene just leveled up in a major way, and honestly? It's about time.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Numbers That'll Make You Go "Damn, That's Real"
                </h2>

                <p>
                  Let's start with some facts that'll blow your mind: India's mental health market was valued at US$ 6.89 billion in 2023 and is projected to hit US$ 62.86 billion by 2032 at a CAGR of 28.16%. That's not just growth—that's a straight-up explosion.
                </p>

                <p>
                  Here's the kicker: an estimated 197 million Indians are suffering from mental health issues, and the digital mental health market in India is projected to grow at a CAGR of 28% from 2023 to 2032. Basically, we've got a massive need, and technology is finally stepping up to meet it.
                </p>

                <p>
                  The global online therapy market is also going crazy, with the global Online Therapy Services Market size expected to grow USD 64085.9 million from 2025-2029, expanding at a CAGR of 53.9%. Y'all, that's not just a trend—that's a complete transformation of how we approach mental health.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Breaking Down the Barriers (Finally!)
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Stigma Factor
                </h3>
                <p>
                  Let's keep it real—mental health stigma in India hits different. It's not just about personal shame; it's about family reputation, marriage prospects, career implications, and basically your entire social standing. But online therapy? That's changing the game completely.
                </p>

                <p>
                  Online therapy can help reduce the stigma around mental health by allowing people to consult a therapist from the comfort of their homes. No more sneaking around, no more elaborate excuses about where you're going, no more anxiety about bumping into someone you know at the clinic.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Geography Isn't Your Enemy Anymore
                </h3>
                <p>
                  Online therapy eliminates the restrictions of geographical boundaries. One can easily consult therapists from all over India or around the world. Living in a small town where the nearest qualified therapist is 200km away? Not a problem anymore, bro. You can literally connect with the best therapists in Mumbai, Delhi, or Bangalore from your bedroom in Ranchi.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Money Talk
                </h3>
                <p>
                  Traditional therapy in India can cost anywhere from ₹1,500 to ₹5,000 per session, and that's before you factor in travel costs, time off work, and all the other expenses. Online platforms are changing that equation completely. Online platforms bring therapy prices down by up to 60-70% through things like subscription models, group sessions, and asynchronous chat options.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  WhatsApp Therapy Is Actually a Thing (And It Works)
                </h2>

                <p>
                  Plot twist: some of the most effective therapy in India is now happening through chat platforms. Counselling is now available through chat, email and WhatsApp, with 24x7 support available through platforms like Vandrevala Foundation.
                </p>

                <p>
                  Think about it—for a generation that's more comfortable typing their feelings than speaking them out loud, text-based therapy is actually perfect. You can take time to process your thoughts, express yourself more clearly, and have a record of your conversations to look back on.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Convenience Factor Is Unmatched
                </h3>
                <p>
                  Chat-based support services provide individuals with instant access to support whenever they need it, 24 hours a day, 7 days a week. Having a panic attack at 2 AM? Your therapist is literally a message away. Feeling overwhelmed during a work meeting? Quick chat session during lunch break.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Why This Revolution Matters for Young Indians
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Privacy on Another Level
                </h3>
                <p>
                  You know how your family asks a million questions about where you're going, who you're meeting, and why you need money? Online therapy eliminates all of that. It's between you and your laptop/phone, period.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Flexibility That Actually Works
                </h3>
                <p>
                  Traditional therapy schedules are rigid AF. You need to book weeks in advance, take time off work or college, and hope nothing urgent comes up. Online therapy lets you schedule sessions around your life, not the other way around.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Cultural Sensitivity
                </h3>
                <p>
                  Many online platforms now offer therapists who understand desi culture, family dynamics, and the specific challenges young Indians face. No more explaining why your mom's opinion about your career matters so much, or why arranged marriage pressure is a real thing.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Real Talk: What Online Therapy Actually Looks Like
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Video Sessions (The Classic)
                </h3>
                <p>
                  Just like a regular therapy session, but you're both on screen. You can literally be in your most comfortable clothes, in your own space, with your emotional support water bottle and favorite snacks nearby.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Chat Therapy (The Introvert's Dream)
                </h3>
                <p>
                  Type out your thoughts, get thoughtful responses back. Perfect for people who process better in writing or who struggle with verbal communication.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Audio Calls (The Middle Ground)
                </h3>
                <p>
                  When you want the personal connection of talking but don't feel like being on camera. Ideal for those days when you look like you wrestled with your pillow and lost.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Asynchronous Messaging
                </h3>
                <p>
                  Send messages when you're ready, get responses when your therapist is available. It's like having a therapeutic penpal who actually knows what they're talking about.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  What This Means for the Future
                </h2>

                <p>
                  We're literally witnessing the democratization of mental health care in India. For the first time ever, quality therapy is becoming accessible to people regardless of their location, economic status, or social situation.
                </p>

                <p>
                  AI-driven chatbots saw a 40% increase in usage, showing that people are open to different forms of digital mental health support. While AI isn't replacing human therapists, it's providing immediate support when human help isn't available.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Bottom Line
                </h2>

                <p>
                  Online therapy in India isn't just a trend—it's a lifeline for millions of people who couldn't access mental health care before. It's breaking down barriers that have existed for generations, making therapy more affordable, more accessible, and way less stigmatizing.
                </p>

                <p>
                  Is it perfect? Nah. Does it work for everyone? Probably not. But is it revolutionizing how we think about and access mental health care in India? Absolutely.
                </p>

                <p>
                  The mental health conversation in India is finally changing, and technology is leading the charge. Whether you're dealing with anxiety, depression, relationship issues, family pressure, or just need someone to talk to who gets it, there's probably an online option that works for you.
                </p>

                <p>
                  Your mental health matters, bro. And now, finally, getting help is as easy as opening an app. That's not just convenient—that's revolutionary.
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

export default OnlineTherapyPage;