import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const EmotionalNumbnessPage: React.FC = () => {
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
                When You Feel Nothing: A Real Guide to Emotional Numbness
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>February 1, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                An honest exploration of emotional numbness and gentle ways to reconnect with feelings
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  Sometimes the hardest thing about mental health isn't feeling too much—it's feeling nothing at all. If you've ever sat through a movie that should have made you cry and felt absolutely nothing, or received good news that should have excited you but just... didn't, you're not broken. You're experiencing emotional numbness, and it's more common than you think.
                </p>

                <p>
                  Emotional numbness isn't talked about enough because it's harder to explain than anxiety or sadness. How do you describe the absence of feeling? How do you ask for help when you can't even access the emotions that would motivate you to reach out?
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  What Emotional Numbness Actually Feels Like
                </h2>

                <p>
                  Emotional numbness isn't just "not feeling sad." It's a disconnection from all emotions—positive and negative. It might look like:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Feeling like you're watching your life happen to someone else</li>
                  <li>Going through the motions without feeling invested in anything</li>
                  <li>Not being able to cry even when you want to</li>
                  <li>Feeling disconnected from friends and family</li>
                  <li>Having trouble making decisions because nothing feels important</li>
                  <li>Feeling like you're wearing an emotional mask all the time</li>
                  <li>Missing the "spark" that used to make things enjoyable</li>
                </ul>

                <p>
                  It's like your emotional volume has been turned way down, and you can't find the remote to turn it back up.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Why This Happens (And Why It's Not Your Fault)
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Your Brain's Protection Mode
                </h3>
                <p>
                  Sometimes emotional numbness is your brain's way of protecting you from overwhelming feelings. If you've been through trauma, chronic stress, or intense emotions, your brain might have decided that feeling nothing is safer than feeling everything.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Depression's Sneaky Side
                </h3>
                <p>
                  Depression doesn't always look like crying and sadness. Sometimes it looks like emotional flatness, where nothing feels worth caring about. This is called anhedonia—the inability to feel pleasure in activities you used to enjoy.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Overwhelm Shutdown
                </h3>
                <p>
                  When life gets too intense—school pressure, family issues, social drama—your emotional system might just... shut down. It's like a circuit breaker that trips when there's too much electrical load.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Gentle Ways to Reconnect With Your Feelings
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Start Small and Physical
                </h3>
                <p>
                  Before you can feel emotions, you need to feel your body. Try simple physical sensations: hold an ice cube, take a hot shower, stretch, or do jumping jacks. Physical sensations can be a bridge back to emotional awareness.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Emotion Check-In Practice
                </h3>
                <p>
                  Set a timer for three times a day and ask yourself: "What am I feeling right now?" Even if the answer is "nothing" or "I don't know," that's still valuable information. You're training your brain to pay attention to your emotional state.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Creative Expression Without Pressure
                </h3>
                <p>
                  Sometimes emotions come out through creativity when they won't come out any other way. Draw, write, make music, or move your body without any goal except expression. Don't worry about it being "good"—just let whatever wants to come out, come out.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Connect With Others (Even When You Don't Want To)
                </h3>
                <p>
                  Isolation makes numbness worse. Even if you don't feel like socializing, try to maintain some human connection. You don't have to pretend to be okay, but don't disappear completely.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  What NOT to Do (Common Mistakes)
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Don't Force It
                </h3>
                <p>
                  Trying to force yourself to feel emotions usually backfires. You can't think your way into feeling. Be patient with the process and trust that feelings will return when it's safe for them to do so.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Don't Numb Further
                </h3>
                <p>
                  It's tempting to use substances, excessive screen time, or other numbing behaviors when you're already emotionally numb. But this usually makes the problem worse and delays your emotional recovery.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Don't Judge Yourself
                </h3>
                <p>
                  Emotional numbness often comes with a side of self-criticism. "I should be able to feel things." "I'm broken." "Everyone else seems fine." These thoughts make everything harder. Try to treat yourself with the same compassion you'd show a friend going through this.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  When to Seek Professional Help
                </h2>

                <p>
                  If emotional numbness is interfering with your daily life, relationships, or ability to function, it's time to talk to a professional. This is especially important if:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>You've been feeling numb for weeks or months</li>
                  <li>You're having thoughts of self-harm</li>
                  <li>You can't take care of basic needs</li>
                  <li>You're using substances to cope</li>
                  <li>The numbness started after a traumatic event</li>
                </ul>

                <p>
                  A therapist can help you understand what's causing the numbness and develop strategies to reconnect with your emotions safely.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Path Back to Feeling
                </h2>

                <p>
                  Recovery from emotional numbness isn't linear. Some days you might feel a little more, other days you might feel nothing again. That's normal and doesn't mean you're not making progress.
                </p>

                <p>
                  Think of emotions like muscles that haven't been used in a while. They need gentle, consistent exercise to get strong again. Be patient with yourself as you rebuild your emotional fitness.
                </p>

                <p>
                  Remember: feeling nothing is still feeling something. Your numbness is your brain's way of trying to protect you, and that protection served a purpose. When you're ready and it's safe, your emotions will start to return.
                </p>

                <p>
                  You're not broken, you're not permanently damaged, and you're not alone in this experience. Emotional numbness is a common response to difficult circumstances, and with time, patience, and possibly professional support, you can reconnect with the full range of human emotions.
                </p>

                <p>
                  Your feelings matter, even when you can't access them. You matter, even when you feel like nothing. Hold onto that truth while you wait for your emotional world to come back online.
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

export default EmotionalNumbnessPage;