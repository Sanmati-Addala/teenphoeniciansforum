import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const MoodSwingsPage: React.FC = () => {
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
                Mood Swings 101: How to Ride Emotional Rollercoasters Without Crashing
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>February 15, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                A survival guide for teens who feel everything at maximum volume
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  One minute you're laughing at a TikTok, the next you're crying because your favorite pen ran out of ink, and then you're angry at yourself for crying about a pen. If this sounds like your daily emotional experience, welcome to the wild world of teenage mood swings—where feelings change faster than your Spotify playlist and everything feels like it matters more than life itself.
                </p>

                <p>
                  Here's the thing nobody tells you: mood swings during your teens aren't just "being dramatic" or "hormonal chaos" (though hormones definitely play a part). Your brain is literally under construction, and that construction site can get pretty chaotic.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Why Your Emotions Are on Maximum Volume
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Your Brain Is Still Loading
                </h3>
                <p>
                  The prefrontal cortex—the part of your brain responsible for emotional regulation, decision-making, and impulse control—isn't fully developed until you're about 25. Meanwhile, the limbic system (your emotional center) is fully online and running at maximum capacity. It's like having a Ferrari engine with bicycle brakes.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Hormones Are Throwing a Party (And You Weren't Invited)
                </h3>
                <p>
                  During adolescence, your body is producing hormones like estrogen, testosterone, and cortisol at levels that would make an adult's head spin. These hormones directly affect your mood, energy levels, and emotional responses. It's not your fault that you feel like you're on an emotional rollercoaster—your body is literally creating the ride.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Everything Actually Does Feel More Intense
                </h3>
                <p>
                  Teen brains process emotions more intensely than adult brains. That heartbreak, that friendship drama, that stress about your future—it's not "just teenage problems." Your brain is experiencing these emotions at a higher volume than it will when you're older.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Common Mood Swing Triggers (And How to Spot Them)
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Sleep deprivation:</strong> Your brain needs 8-10 hours of sleep to function properly. Less than that and your emotional regulation goes out the window.</li>
                  <li><strong>Hunger:</strong> Low blood sugar can make you feel irritable, anxious, or sad. "Hangry" is a real thing.</li>
                  <li><strong>Social stress:</strong> Friend drama, feeling left out, or social media comparison can trigger intense emotional responses.</li>
                  <li><strong>Academic pressure:</strong> Tests, deadlines, and future planning can create overwhelming stress.</li>
                  <li><strong>Family dynamics:</strong> Conflicts at home, feeling misunderstood, or family stress can affect your mood significantly.</li>
                  <li><strong>Hormonal fluctuations:</strong> Monthly cycles, growth spurts, and general hormonal changes can cause mood shifts.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Survival Strategies for Emotional Rollercoasters
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The STOP Technique
                </h3>
                <p>When you feel your emotions escalating:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>S</strong>top what you're doing</li>
                  <li><strong>T</strong>ake a deep breath</li>
                  <li><strong>O</strong>bserve what you're feeling and thinking</li>
                  <li><strong>P</strong>roceed with intention rather than reaction</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Create an Emotional First Aid Kit
                </h3>
                <p>Have a go-to list of things that help you feel better:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A playlist that matches your mood or helps you feel better</li>
                  <li>Comfort items (favorite blanket, stuffed animal, photos)</li>
                  <li>Physical activities that help you release energy (dancing, walking, stretching)</li>
                  <li>Creative outlets (drawing, writing, singing)</li>
                  <li>People you can talk to when you need support</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The 24-Hour Rule
                </h3>
                <p>
                  Before making any major decisions or having serious conversations when you're in an intense emotional state, wait 24 hours if possible. Your perspective might be completely different once the emotional storm passes.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Track Your Patterns
                </h3>
                <p>
                  Keep a simple mood journal for a few weeks. Note your mood, what happened that day, how much you slept, what you ate, and any other factors. You might start to notice patterns that help you predict and prepare for mood changes.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  When Mood Swings Become a Bigger Concern
                </h2>

                <p>
                  While mood swings are normal during adolescence, sometimes they can indicate something that needs professional attention. Consider talking to a trusted adult or mental health professional if:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Your mood swings are severely impacting your relationships, school, or daily functioning</li>
                  <li>You're having thoughts of self-harm or suicide</li>
                  <li>Your mood changes are accompanied by risky behaviors</li>
                  <li>You're using substances to cope with your emotions</li>
                  <li>Your mood swings last for weeks at a time</li>
                  <li>You feel like you can't control your emotions at all</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Building Emotional Resilience
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Practice Self-Compassion
                </h3>
                <p>
                  Talk to yourself the way you'd talk to a good friend going through a hard time. Your emotions are valid, even when they feel overwhelming or inconvenient.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Develop Healthy Coping Strategies
                </h3>
                <p>
                  Find healthy ways to process and express your emotions. This might include exercise, creative expression, talking to friends, journaling, or mindfulness practices.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Build a Support Network
                </h3>
                <p>
                  Identify trusted adults and peers who you can talk to when you're struggling. Having people who understand and support you makes emotional challenges much more manageable.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Bottom Line
                </h2>

                <p>
                  Mood swings during your teens are normal, but that doesn't mean they're easy to deal with. Your emotions are real and valid, even when they feel overwhelming or change quickly.
                </p>

                <p>
                  Remember that this intense emotional period is temporary. As your brain continues to develop and you learn more about yourself and your emotional patterns, managing your moods will become easier.
                </p>

                <p>
                  You're not "too sensitive" or "too dramatic." You're a human being with a developing brain navigating a complex world, and that's actually pretty impressive when you think about it.
                </p>

                <p>
                  Be patient with yourself, develop healthy coping strategies, and don't hesitate to ask for help when you need it. Your emotional intensity can actually become one of your greatest strengths—it means you care deeply, feel empathy strongly, and experience life fully.
                </p>

                <p>
                  The goal isn't to stop having emotions or mood swings—it's to learn how to ride the waves without getting completely wiped out by them.
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

export default MoodSwingsPage;