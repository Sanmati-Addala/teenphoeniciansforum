import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const DoomscrollingPage: React.FC = () => {
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
                Doomscrolling: Why Your Brain Is Literally Addicted to Bad News
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>February 5, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                The science behind why we keep torturing ourselves with endless feeds of existential dread
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  Ever opened Twitter (sorry, X) and felt your soul leave your body after five minutes of scrolling through pure chaos? Welcome to doomscrolling, fam—where your brain gets absolutely hooked on consuming the worst news possible until you're sitting there at 3 AM wondering why humans exist.
                </p>

                <p>
                  Spoiler alert: it's not just you being dramatic. There's actual science behind why we keep torturing ourselves with endless feeds of existential dread, and it's messing with teen brains in ways that would make your biology teacher concerned.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  What Even Is Doomscrolling?
                </h2>

                <p>
                  Doomscrolling is exactly what it sounds like—spending way too much time online consuming negative news and content that makes you feel progressively worse about existence. It's when you spend a lot of time online consuming negative news that can reinforce negative thoughts and increase depression and anxiety.
                </p>

                <p>
                  Think of it as the digital equivalent of watching a car crash in slow motion, except the car crash is society, and you can't look away because the algorithm keeps showing you more car crashes. It's giving "This is fine" dog energy, but make it a whole lifestyle.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Your Teen Brain on Doomscrolling: The Science Gets Messy
                </h2>

                <p>
                  Here's where it gets real: because the brains of adolescents and young adults are still developing, this age group may be more susceptible to doomscrolling and its harmful effects. Your brain is literally still under construction until you're about 25, which means you're more vulnerable to getting trapped in these toxic scrolling cycles.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Dopamine Trap That's More Addictive Than TikTok Dances
                </h3>
                <p>
                  As with many other addictive behaviors, doomscrolling activates the release of dopamine in the brain. But here's the plot twist that nobody talks about: information triggers the dopamine-fueled reward system in the same way as food, money, or even drugs.
                </p>

                <p>
                  Your brain treats that new piece of terrible information like it just found a $20 bill. We create a feedback loop in which we seek out negative news: feel anxious yet momentarily rewarded by new data, then seek more. It's like being addicted to getting punched in the face because at least it's something new.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Why Bad News Hits Different
                </h3>
                <p>
                  Despite doomscrolling's focus on negative content, it still triggers dopamine release—not only from consuming the content but also from satisfying our curiosity, even with bad news. Your brain gets a hit from feeling "informed," even when that information makes you want to crawl under a rock and never emerge.
                </p>

                <p>
                  Recent research found that doomscrolling evokes greater levels of existential anxiety—a feeling of dread or panic that arises when we confront the limitations of our existence. Basically, too much doomscrolling makes you question why we're all here, and not in the fun philosophical way.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  How Doomscrolling Absolutely Wrecks Your Mental Health
                </h2>

                <p>
                  The effects are giving "mental health villain origin story" vibes:
                </p>

                <p>
                  Doomscrolling can worsen depression and anxiety, trigger episodes in people who already have these conditions, and can even trigger panic attacks. It's like volunteering to have your brain marinated in stress hormones for hours at a time.
                </p>

                <p>
                  After several minutes of scrolling, you feel more anxious, angry, disheartened, disgusted or helpless. Once this negativity arises, it functions like a lens, causing you to pay more attention to stories and posts that justify and accentuate your feelings. It's confirmation bias, but make it trauma.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Breaking the Doomscroll Cycle Without Going Full Digital Hermit
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Set Boundaries That Actually Stick
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Put time limits on news apps (and actually respect them when they pop up)</li>
                  <li>Create "news-free" hours, especially before bed (your sleep hygiene will thank you)</li>
                  <li>Unfollow accounts that consistently make you feel worse about the world</li>
                  <li>Follow accounts that post solution-focused content or positive news</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The 5-4-3-2-1 Grounding Technique
                </h3>
                <p>When you catch yourself spiraling into doomscroll mode, try this:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name 5 things you can see</li>
                  <li>4 things you can touch</li>
                  <li>3 things you can hear</li>
                  <li>2 things you can smell</li>
                  <li>1 thing you can taste</li>
                </ul>
                <p>It literally pulls your brain out of the digital chaos and back into the real world.</p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Practice Mindful Scrolling
                </h3>
                <p>
                  Before opening any app, ask yourself: "What am I looking for right now?" If the answer is "to feel worse about everything," maybe put the phone down and go touch some grass instead.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Replace the Dopamine Hit
                </h3>
                <p>Since your brain is craving that information reward, give it healthier alternatives:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Read a book (wild concept, but stay with me)</li>
                  <li>Learn something new through educational content</li>
                  <li>Text a friend instead of scrolling about strangers' problems</li>
                  <li>Exercise (endorphins {'>'} doom-induced adrenaline)</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Reality Check You Need
                </h2>

                <p>
                  You don't need to be informed about every single terrible thing happening in the world at every moment. Staying updated on current events? Important. Consuming 47 different angles of the same tragic story while lying in bed at midnight? Not it, chief.
                </p>

                <p>
                  Your mental health is more important than being the most informed person in your friend group. You can care about the world without letting it consume your entire emotional bandwidth.
                </p>

                <p>
                  Remember: the algorithm doesn't care about your wellbeing. It cares about your screen time. It will serve you exactly the content that keeps you scrolling, even if that content makes you feel like the world is ending.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Bottom Line
                </h2>

                <p>
                  Doomscrolling isn't a personality trait or a sign that you're more aware than everyone else. It's a legitimate behavioral pattern that can seriously mess with your developing brain and mental health. The good news? Once you understand how it works, you can start taking back control.
                </p>

                <p>
                  Your brain is still growing and changing, which means you have the power to rewire these habits. You can stay informed about the world without letting it destroy your peace of mind. You can care about important issues without sacrificing your mental health on the altar of constant connectivity.
                </p>

                <p>
                  The world needs young people who are mentally healthy and capable of making positive change—not burned out from consuming too much digital doom. Take care of your brain so it can take care of the world.
                </p>

                <p>
                  Now go touch some grass, text a friend, or watch a funny animal video. Your future self will thank you for breaking the scroll.
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

export default DoomscrollingPage;