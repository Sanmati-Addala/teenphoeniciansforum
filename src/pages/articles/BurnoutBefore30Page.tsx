import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BurnoutBefore30Page: React.FC = () => {
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
                Burnout Before 30: Why We Are Already Over It (And How to Fight Back)
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>January 20, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                Gen Z is the most burnt-out generation at work, and we haven't even hit our thirties yet. Here's the real talk on why and how to fight back
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  Bestie, if you're reading this while your soul slowly exits your body after yet another "quick sync" that turned into a 90-minute meeting about absolutely nothing, you're not alone. Gen Z is officially the most burnt-out generation at work, and we haven't even hit our thirties yet. The vibes? Absolutely not it.
                </p>

                <p>
                  Let's be real about what's happening here, because the stats are giving "we're all suffering together" energy, and it's time we talked about it like the group chat we never had but desperately needed.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Numbers That'll Make You Want to Cry (But You're Too Tired)
                </h2>

                <p>
                  Here's the tea that nobody wants to spill but everyone needs to hear: almost half (48%) of people aged 18-29 reported feeling completely drained, compared to 40% of people over 30. We're literally more burnt out than people who've been adulting twice as long as us.
                </p>

                <p>
                  Job demands and work environment have led to burnout for 46% of Gen Z employees, and here's the kicker—up to 44% of Gen Z employees have taken on extra work for more financial stability. We're working ourselves to death just to afford rent, and the rent is still too damn high.
                </p>

                <p>
                  The most devastating part? 97% of Gen Z reports burnout and 86% report stress. NINETY-SEVEN PERCENT. That's basically all of us, fam. We're out here living in survival mode and calling it "building character."
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Why Gen Z Got the Short End of Every Stick
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  We Only Know Chaos
                </h3>
                <p>
                  While older colleagues have the experience of working in more settled times, Gen Z only knows relative chaos. Gen Z finished school and started their first jobs in the middle of constant disruptions. We graduated into a pandemic, entered the job market during economic uncertainty, and now we're supposed to be grateful for unpaid internships and entry-level jobs that require five years of experience. Make it make sense.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Cost of Living Is Absolutely Unhinged
                </h3>
                <p>
                  Three in 10 Gen Zs say they do not feel financially secure, and roughly six in 10 live paycheck to paycheck. We're out here choosing between avocado toast and rent like it's some twisted game show. The cost of living crisis is real, and finances and family welfare are the top stress drivers for our generation.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Mental Health Is in the Gutter
                </h3>
                <p>
                  41% of Gen Zers report more mental health struggles in the past year compared with 21% of adults 45 and older. We're not just tired—we're mentally, emotionally, and spiritually exhausted. And instead of addressing the root causes, society keeps telling us to "practice self-care" while paying us poverty wages.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  What Burnout Actually Looks Like (In Case You're Wondering)
                </h2>

                <p>
                  Burnout isn't just being tired after a long day. It's waking up already exhausted, dreading work before you even open your laptop, and feeling like you're running on fumes 24/7. It's:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Feeling emotionally drained even when you haven't done anything particularly demanding</li>
                  <li>Losing interest in things you used to care about (yes, even your hobbies)</li>
                  <li>Getting overwhelmed by basic tasks like grocery shopping or responding to texts</li>
                  <li>Feeling cynical about work, life, and pretty much everything</li>
                  <li>Physical symptoms like headaches, stomach issues, or constant fatigue</li>
                  <li>That weird feeling where you're busy all the time but never feel productive</li>
                </ul>

                <p>Sound familiar? Yeah, thought so.</p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  How to Actually Fight Back (No, Really)
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Set Boundaries Like Your Life Depends On It (Because It Does)
                </h3>
                <p>
                  Stop answering work messages after hours. I know, I know—you're worried about seeming "unprofessional." But you know what's unprofessional? Expecting people to be available 24/7 for the same salary their parents made working 40 hours a week.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  The Strategic "No"
                </h3>
                <p>
                  Learn to say no without explaining yourself to death. "I can't take on additional projects right now" is a complete sentence. You don't need to write a dissertation about your workload or apologize for having boundaries.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Find Your People
                </h3>
                <p>
                  Connect with other Gen Z workers who get it. Share salary information, support each other through job searches, and stop competing with each other for scraps when we should be demanding better conditions for everyone.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Real Talk
                </h2>

                <p>
                  Burnout before 30 shouldn't be a rite of passage. It shouldn't be normal to feel completely depleted by age 25. It shouldn't be revolutionary to expect fair pay for fair work.
                </p>

                <p>
                  You're not weak for feeling burnt out. You're not ungrateful for wanting more from life than just surviving paycheck to paycheck. You're not asking for too much when you demand to be treated with basic human dignity at work.
                </p>

                <p>
                  The system is broken, not you. And recognizing that is the first step toward fighting back—not just for yourself, but for everyone who comes after us.
                </p>

                <p>
                  Take care of yourself, set those boundaries, and remember: you're not just a productivity unit with anxiety. You're a whole human being who deserves better than what's currently on offer.
                </p>

                <p>
                  Now go drink some water, text your friends, and maybe start that resume update you've been putting off. The revolution might be quiet, but it's happening one boundary at a time.
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

export default BurnoutBefore30Page;