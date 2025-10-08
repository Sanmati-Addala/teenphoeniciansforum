import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const ImprovingSleepPage: React.FC = () => {
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
                Improving Sleep Quality
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>March 15, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                Science-backed tips for better sleep that actually work for busy teen schedules
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  If you're a teenager reading this at 2 AM because you can't sleep, you're not alone. Sleep problems are incredibly common among teens, and it's not just because you're "choosing" to stay up late. Your biology is literally working against you, and modern life isn't making it any easier.
                </p>

                <p>
                  But here's the good news: there are science-backed strategies that can help you get better sleep, even with a busy schedule and a brain that wants to stay awake until dawn. Let's talk about what actually works.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Why Teen Sleep Is Different (And Difficult)
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Your Circadian Rhythm Is Shifted
                </h3>
                <p>
                  During adolescence, your body's internal clock shifts later. This means you naturally feel alert later at night and want to sleep in later in the morning. It's not laziness—it's biology. Your brain doesn't start producing melatonin (the sleep hormone) until around 11 PM or later.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  You Need More Sleep Than Adults
                </h3>
                <p>
                  Teens need 8-10 hours of sleep per night, which is more than most adults. Your brain is still developing, and sleep is crucial for memory consolidation, emotional regulation, and physical growth.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Modern Life Works Against You
                </h3>
                <p>
                  Early school start times, homework, extracurriculars, social obligations, and screen time all conspire to make it harder to get adequate sleep. Plus, stress and anxiety can make it difficult to fall asleep even when you're tired.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Real Impact of Poor Sleep
                </h2>

                <p>
                  Sleep deprivation affects more than just how tired you feel. It impacts:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Academic performance:</strong> Difficulty concentrating, remembering information, and making decisions</li>
                  <li><strong>Mental health:</strong> Increased risk of anxiety, depression, and mood swings</li>
                  <li><strong>Physical health:</strong> Weakened immune system, weight gain, and increased injury risk</li>
                  <li><strong>Relationships:</strong> Increased irritability and difficulty managing emotions</li>
                  <li><strong>Risk-taking behavior:</strong> Poor judgment and increased impulsivity</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Sleep Hygiene That Actually Works
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Create a Consistent Sleep Schedule
                </h3>
                <p>
                  Try to go to bed and wake up at the same time every day, even on weekends. Yes, this is hard, but it's one of the most effective ways to regulate your circadian rhythm. If you need to shift your schedule, do it gradually—15-30 minutes earlier each night.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Manage Light Exposure
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Morning:</strong> Get bright light exposure within an hour of waking up. Open curtains, go outside, or use a light therapy lamp.</li>
                  <li><strong>Evening:</strong> Dim lights 1-2 hours before bedtime. Use warm, dim lighting instead of bright overhead lights.</li>
                  <li><strong>Night:</strong> Keep your room as dark as possible. Consider blackout curtains or an eye mask.</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Screen Time Strategy
                </h3>
                <p>
                  The blue light from screens can suppress melatonin production. Here's what actually works:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use blue light filters on all devices after sunset</li>
                  <li>Keep phones out of the bedroom (use a traditional alarm clock)</li>
                  <li>If you must use screens before bed, keep them at least arm's length away and use the lowest brightness setting</li>
                  <li>Try the "20-20-20 rule": every 20 minutes, look at something 20 feet away for 20 seconds</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Optimize Your Sleep Environment
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Temperature:</strong> Keep your room cool (65-68°F/18-20°C)</li>
                  <li><strong>Noise:</strong> Use earplugs, a white noise machine, or a fan to block disruptive sounds</li>
                  <li><strong>Comfort:</strong> Invest in a comfortable mattress and pillows</li>
                  <li><strong>Cleanliness:</strong> Keep your sleep space clean and clutter-free</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Pre-Sleep Routines That Work
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The 3-2-1 Rule
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>3 hours before bed:</strong> No more large meals or alcohol</li>
                  <li><strong>2 hours before bed:</strong> No more work or studying</li>
                  <li><strong>1 hour before bed:</strong> No more screens</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Relaxation Techniques
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Progressive muscle relaxation:</strong> Tense and release each muscle group from your toes to your head</li>
                  <li><strong>4-7-8 breathing:</strong> Inhale for 4, hold for 7, exhale for 8</li>
                  <li><strong>Visualization:</strong> Imagine a peaceful, relaxing scene in detail</li>
                  <li><strong>Gentle stretching or yoga:</strong> Light movement to release physical tension</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The "Brain Dump" Technique
                </h3>
                <p>
                  If your mind races when you try to sleep, spend 10 minutes before bed writing down:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Things you need to do tomorrow</li>
                  <li>Worries or concerns on your mind</li>
                  <li>Anything you don't want to forget</li>
                </ul>
                <p>This helps clear your mind and reduces the urge to think about these things when you're trying to sleep.</p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Daytime Habits That Improve Nighttime Sleep
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Get Regular Exercise
                </h3>
                <p>
                  Regular physical activity can help you fall asleep faster and enjoy deeper sleep. However, avoid vigorous exercise within 3-4 hours of bedtime, as it can be stimulating.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Watch Your Caffeine Intake
                </h3>
                <p>
                  Caffeine can stay in your system for 6-8 hours. If you're having trouble sleeping, try avoiding caffeine after 2 PM. This includes coffee, tea, soda, energy drinks, and chocolate.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Be Strategic About Naps
                </h3>
                <p>
                  If you must nap, keep it short (20-30 minutes) and before 3 PM. Longer or later naps can interfere with nighttime sleep.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Manage Stress and Anxiety
                </h3>
                <p>
                  Stress and anxiety are major sleep disruptors. Practice stress management techniques during the day:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Regular meditation or mindfulness practice</li>
                  <li>Talking to friends, family, or a counselor about your concerns</li>
                  <li>Time management strategies to reduce academic stress</li>
                  <li>Regular relaxation activities you enjoy</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  What to Do When You Can't Fall Asleep
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The 20-Minute Rule
                </h3>
                <p>
                  If you can't fall asleep within 20 minutes, get out of bed and do a quiet, relaxing activity until you feel sleepy. This prevents your brain from associating your bed with being awake and frustrated.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Quiet Activities for Middle-of-the-Night Wakefulness
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reading a boring book with dim light</li>
                  <li>Gentle stretching</li>
                  <li>Meditation or breathing exercises</li>
                  <li>Listening to calm music or sleep podcasts</li>
                  <li>Writing in a journal</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  When to Seek Help
                </h2>

                <p>
                  Consider talking to a healthcare provider if you:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Consistently have trouble falling asleep or staying asleep despite good sleep hygiene</li>
                  <li>Feel excessively tired during the day even after a full night's sleep</li>
                  <li>Snore loudly or have breathing problems during sleep</li>
                  <li>Experience restless legs or other physical discomfort that disrupts sleep</li>
                  <li>Have sleep problems that significantly impact your daily functioning</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Bottom Line
                </h2>

                <p>
                  Good sleep isn't a luxury—it's essential for your physical health, mental well-being, and academic performance. While it can be challenging to prioritize sleep with everything else going on in your life, the benefits are worth the effort.
                </p>

                <p>
                  Start with one or two changes rather than trying to overhaul your entire sleep routine at once. Small, consistent improvements can lead to significant changes in your sleep quality over time.
                </p>

                <p>
                  Remember that your sleep needs are real and valid. Don't let anyone make you feel guilty for prioritizing rest. Your brain and body need sleep to function properly, and taking care of your sleep is taking care of yourself.
                </p>

                <p>
                  Sweet dreams, and remember—tomorrow will be better when you're well-rested.
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

export default ImprovingSleepPage;