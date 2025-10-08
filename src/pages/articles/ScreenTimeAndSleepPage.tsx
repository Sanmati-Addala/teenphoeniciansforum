import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const ScreenTimeAndSleepPage: React.FC = () => {
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
                Managing Screen Time for Better Sleep
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>March 20, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                How technology affects your sleep and practical strategies to minimize the impact
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  Let's be honest: telling a teenager to put their phone away before bed is like telling them to stop breathing. Your phone is your alarm clock, your entertainment, your connection to friends, and your window to the world. But here's the reality—that glowing screen is probably messing with your sleep more than you realize.
                </p>

                <p>
                  The good news? You don't have to choose between staying connected and getting good sleep. You just need to be smarter about how and when you use your devices.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  How Screens Actually Mess With Your Sleep
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Blue Light Problem
                </h3>
                <p>
                  Blue light from screens suppresses melatonin production—the hormone that makes you feel sleepy. Your brain interprets blue light as daylight, so it thinks it should stay awake. This is especially problematic for teens because your melatonin production is already delayed compared to adults.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Mental Stimulation Overload
                </h3>
                <p>
                  It's not just the light—it's what you're doing on your devices. Scrolling through social media, watching videos, playing games, or even doing homework on screens keeps your brain in an active, alert state when it should be winding down.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Dopamine Hit Cycle
                </h3>
                <p>
                  Every notification, like, comment, or new piece of content gives your brain a small dopamine hit. This creates a cycle where your brain craves more stimulation, making it harder to settle into the calm state needed for sleep.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  FOMO and Anxiety
                </h3>
                <p>
                  Late-night scrolling often leads to comparison, FOMO (fear of missing out), or anxiety about things you see online. These emotions are the opposite of what you need to feel relaxed and ready for sleep.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Real Impact on Your Sleep
                </h2>

                <p>
                  Research shows that teens who use screens before bed experience:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Difficulty falling asleep (taking 30+ minutes to fall asleep)</li>
                  <li>Reduced total sleep time</li>
                  <li>Less deep sleep and REM sleep</li>
                  <li>More frequent night wakings</li>
                  <li>Feeling less rested in the morning</li>
                  <li>Increased daytime sleepiness</li>
                </ul>

                <p>
                  Even if you feel like you fall asleep fine after using your phone, the quality of your sleep is likely being affected.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Practical Strategies That Actually Work
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Gradual Wind-Down Approach
                </h3>
                <p>
                  Instead of going cold turkey, gradually reduce screen stimulation:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>2 hours before bed:</strong> Switch to less stimulating content (avoid intense videos, games, or stressful news)</li>
                  <li><strong>1 hour before bed:</strong> Use only essential apps (texting family, setting alarms)</li>
                  <li><strong>30 minutes before bed:</strong> Put devices away completely</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Blue Light Management
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Use built-in filters:</strong> Enable "Night Mode," "Dark Mode," or "Blue Light Filter" on all devices</li>
                  <li><strong>Adjust timing:</strong> Set these filters to activate automatically 2-3 hours before your bedtime</li>
                  <li><strong>Consider blue light glasses:</strong> If you must use screens before bed, blue light blocking glasses can help</li>
                  <li><strong>Dim the brightness:</strong> Use the lowest comfortable brightness setting in the evening</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Phone-Free Bedroom Strategy
                </h3>
                <p>
                  This is the gold standard, but we know it's hard. Here's how to make it work:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Get a traditional alarm clock:</strong> Remove the main excuse for keeping your phone by your bed</li>
                  <li><strong>Create a charging station:</strong> Set up a designated spot outside your bedroom for overnight charging</li>
                  <li><strong>Use Do Not Disturb:</strong> If you must keep your phone nearby for emergencies, use Do Not Disturb mode</li>
                  <li><strong>Start gradually:</strong> Begin with phone-free time 30 minutes before bed, then extend it</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Smart App Management
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Turn off non-essential notifications:</strong> Especially for social media, games, and news apps</li>
                  <li><strong>Use app timers:</strong> Set daily limits for the most addictive apps</li>
                  <li><strong>Remove tempting apps from your home screen:</strong> Make them slightly harder to access</li>
                  <li><strong>Use grayscale mode:</strong> Making your phone less visually appealing can reduce usage</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Alternative Pre-Sleep Activities
                </h2>

                <p>
                  The key to reducing screen time before bed is having other things to do. Here are activities that actually promote better sleep:
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Calming Activities
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reading physical books or magazines</li>
                  <li>Listening to calming music, podcasts, or audiobooks</li>
                  <li>Gentle stretching or yoga</li>
                  <li>Meditation or breathing exercises</li>
                  <li>Taking a warm bath or shower</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Creative Activities
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Journaling or creative writing</li>
                  <li>Drawing, sketching, or coloring</li>
                  <li>Playing a musical instrument (quietly)</li>
                  <li>Doing puzzles or brain teasers</li>
                  <li>Organizing or planning for the next day</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Self-Care Activities
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Skincare routine</li>
                  <li>Gentle self-massage</li>
                  <li>Preparing clothes for the next day</li>
                  <li>Tidying your space</li>
                  <li>Practicing gratitude or reflection</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  When You Must Use Screens Before Bed
                </h2>

                <p>
                  Sometimes you have no choice—homework, family communication, or other necessities. Here's how to minimize the impact:
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Damage Control Strategies
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Use the smallest screen possible:</strong> Phone instead of laptop, laptop instead of desktop</li>
                  <li><strong>Increase distance:</strong> Hold devices at arm's length or farther</li>
                  <li><strong>Take frequent breaks:</strong> Look away from the screen every 10-15 minutes</li>
                  <li><strong>Use dark mode:</strong> Reduce overall light emission</li>
                  <li><strong>Finish 30 minutes before sleep:</strong> Give your brain time to wind down</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Post-Screen Recovery
                </h3>
                <p>
                  After necessary screen use, help your brain transition to sleep mode:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dim all lights in your environment</li>
                  <li>Do a few minutes of deep breathing</li>
                  <li>Listen to calming music or sounds</li>
                  <li>Practice progressive muscle relaxation</li>
                  <li>Avoid looking at any other screens</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Building New Habits
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Start Small
                </h3>
                <p>
                  Don't try to change everything at once. Pick one strategy and stick with it for a week before adding another. Small, consistent changes are more sustainable than dramatic overhauls.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Create Environmental Cues
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Set up your bedroom for sleep, not screen time</li>
                  <li>Keep books, journals, or other non-screen activities by your bed</li>
                  <li>Use physical alarm clocks instead of phone alarms</li>
                  <li>Create a designated "device parking" area outside your bedroom</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Get Family Buy-In
                </h3>
                <p>
                  If your family is also using devices late at night, it's harder to stick to your own boundaries. Consider making it a family challenge or setting household rules about evening screen time.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Troubleshooting Common Challenges
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  "I'll Miss Important Messages"
                </h3>
                <p>
                  Set up your phone so only truly urgent contacts can reach you after a certain time. Most messages can wait until morning.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  "I Can't Fall Asleep Without Background Noise"
                </h3>
                <p>
                  Try a white noise machine, fan, or audio-only content instead of videos. If you must use your phone, place it face-down and use audio-only content.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  "I Get Bored Without My Phone"
                </h3>
                <p>
                  This is normal! Your brain is used to constant stimulation. It takes time to adjust to quieter activities. Start with engaging alternatives like interesting books or podcasts.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Bottom Line
                </h2>

                <p>
                  You don't have to choose between technology and good sleep—you just need to be intentional about how you use your devices, especially in the evening. The goal isn't to eliminate screens entirely, but to create boundaries that support your sleep and overall well-being.
                </p>

                <p>
                  Remember that good sleep affects everything: your mood, your academic performance, your relationships, and your physical health. The temporary inconvenience of putting your phone away before bed is worth the long-term benefits of better sleep.
                </p>

                <p>
                  Start with small changes, be patient with yourself as you adjust, and remember that building new habits takes time. Your future well-rested self will thank you for the effort you put in now.
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

export default ScreenTimeAndSleepPage;