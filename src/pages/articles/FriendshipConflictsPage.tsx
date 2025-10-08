import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const FriendshipConflictsPage: React.FC = () => {
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
                Handling Friendship Conflicts
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Teen Phoenicians Team</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>March 5, 2025</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                Navigating disagreements without damaging relationships
              </p>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  Friendship conflicts are inevitable. Even the closest friends disagree, hurt each other's feelings, and sometimes say things they don't mean. The difference between friendships that last and those that don't isn't the absence of conflict—it's how you handle the conflicts when they arise.
                </p>

                <p>
                  If you're dealing with friend drama right now, know that it's possible to work through disagreements while actually strengthening your friendship. It just takes some skill, patience, and a willingness to be vulnerable.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Why Friendship Conflicts Hit Different
                </h2>

                <p>
                  Conflicts with friends can feel more intense than other types of disagreements because:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>You chose each other, so betrayal feels more personal</li>
                  <li>You've shared vulnerable parts of yourself</li>
                  <li>You see each other regularly at school or in social groups</li>
                  <li>Friend groups can take sides, making conflicts more complicated</li>
                  <li>You might not have as much practice resolving conflicts as adults do</li>
                </ul>

                <p>
                  It's normal for friendship conflicts to feel overwhelming, especially when you're not sure how to fix things or whether the friendship is worth saving.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Common Types of Friendship Conflicts
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Miscommunication and Misunderstandings
                </h3>
                <p>
                  Sometimes conflicts start because someone misinterpreted a text, assumed the worst about a situation, or didn't have all the information. These are often the easiest to resolve once everyone understands what actually happened.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Boundary Violations
                </h3>
                <p>
                  When a friend shares your secrets, doesn't respect your time, or crosses physical or emotional boundaries you've set. These conflicts require clear communication about expectations and consequences.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Jealousy and Competition
                </h3>
                <p>
                  Feeling jealous of a friend's achievements, relationships, or opportunities. Or feeling like your friend is competing with you instead of supporting you. These conflicts often stem from insecurity and require honest self-reflection.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Growing Apart
                </h3>
                <p>
                  When friends develop different interests, values, or social groups. This isn't always a conflict in the traditional sense, but it can create tension and hurt feelings.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Group Drama
                </h3>
                <p>
                  When conflicts involve multiple friends, sides are taken, or someone feels excluded from the group. These can be the most complex to navigate.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The PEACE Method for Resolving Conflicts
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  P - Pause and Process
                </h3>
                <p>
                  Before reacting, take time to understand your own feelings and the situation. Ask yourself:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>What exactly am I upset about?</li>
                  <li>What role did I play in this conflict?</li>
                  <li>What outcome do I want?</li>
                  <li>Is this friendship worth fighting for?</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  E - Empathize and Understand
                </h3>
                <p>
                  Try to see the situation from your friend's perspective. This doesn't mean excusing hurtful behavior, but understanding their motivations can help you approach the conversation more effectively.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  A - Approach with Intention
                </h3>
                <p>
                  Choose the right time and place for the conversation. Avoid public settings, group chats, or times when either of you is stressed or emotional. Be clear about wanting to resolve the issue, not just vent your feelings.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  C - Communicate Clearly
                </h3>
                <p>
                  Use "I" statements to express your feelings without attacking your friend. Be specific about what happened and how it affected you. Listen actively to their perspective without interrupting or getting defensive.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  E - Establish Moving Forward
                </h3>
                <p>
                  Work together to find a solution and establish agreements about how to handle similar situations in the future. This might include apologies, changed behaviors, or new boundaries.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  What to Say (And What Not to Say)
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Helpful Phrases:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"I felt hurt when..."</li>
                  <li>"I want to understand your perspective."</li>
                  <li>"Our friendship is important to me."</li>
                  <li>"I think there might be a misunderstanding."</li>
                  <li>"How can we prevent this from happening again?"</li>
                  <li>"I'm sorry for my part in this."</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Phrases to Avoid:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"You always..." or "You never..."</li>
                  <li>"Everyone thinks you're..."</li>
                  <li>"If you were a real friend, you would..."</li>
                  <li>"I don't care anymore."</li>
                  <li>"You're being too sensitive."</li>
                  <li>"That's not what happened." (when they're sharing their feelings)</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  When Conflicts Can't Be Resolved
                </h2>

                <p>
                  Sometimes, despite your best efforts, conflicts can't be resolved. This might happen when:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Your friend refuses to acknowledge their role in the conflict</li>
                  <li>The same issues keep happening repeatedly</li>
                  <li>Your values or life directions have become incompatible</li>
                  <li>The friendship has become consistently negative or draining</li>
                  <li>Trust has been broken in a way that can't be repaired</li>
                </ul>

                <p>
                  It's okay to let some friendships go. Not every friendship is meant to last forever, and that doesn't mean it wasn't valuable or meaningful.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Dealing with Group Conflicts
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Don't Take Sides Immediately
                </h3>
                <p>
                  When friends are fighting, resist the urge to immediately pick a side. Try to understand both perspectives and encourage direct communication between the people involved.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Avoid Being the Messenger
                </h3>
                <p>
                  Don't relay messages between fighting friends. This often makes conflicts worse and puts you in an uncomfortable position. Encourage them to talk directly to each other.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Set Boundaries
                </h3>
                <p>
                  It's okay to tell friends that you don't want to hear constant complaints about each other or be put in the middle of their drama. You can support your friends without becoming their therapist or mediator.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  Preventing Future Conflicts
                </h2>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Communicate Regularly
                </h3>
                <p>
                  Don't let small issues build up into big problems. Address concerns when they're still manageable.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Be Clear About Expectations
                </h3>
                <p>
                  Talk about what you need from friendships and what your boundaries are. Don't assume your friends know what you're thinking.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Practice Forgiveness
                </h3>
                <p>
                  Everyone makes mistakes. Learn to forgive minor offenses and focus on your friends' positive qualities and intentions.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">
                  Maintain Other Relationships
                </h3>
                <p>
                  Don't put all your social needs on one friendship. Having multiple close relationships reduces pressure and provides perspective.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4">
                  The Bottom Line
                </h2>

                <p>
                  Friendship conflicts are normal and can actually strengthen relationships when handled well. The key is approaching them with maturity, empathy, and a genuine desire to understand and resolve the issue.
                </p>

                <p>
                  Remember that good friends are worth fighting for, but you shouldn't have to fight constantly to maintain a friendship. Healthy friendships involve mutual respect, support, and the ability to work through disagreements constructively.
                </p>

                <p>
                  Don't be afraid to have difficult conversations with your friends. The friendships that survive honest communication and conflict resolution are usually the ones that last the longest and mean the most.
                </p>

                <p>
                  And if a friendship doesn't survive despite your best efforts? That's information too. It tells you something about compatibility, values, or readiness for the kind of friendship you're seeking.
                </p>

                <p>
                  Focus on being the kind of friend you want to have, communicate openly and honestly, and trust that the right friendships will flourish while the wrong ones will naturally fade away.
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

export default FriendshipConflictsPage;