import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { PageHeader } from '../components/shared/PageHeader';
import { Calendar, BookOpen, Heart, Download, ExternalLink } from 'lucide-react';

const MagazinePage: React.FC = () => {
  const [showFlipHTML, setShowFlipHTML] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Page Header */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/6956892/pexels-photo-6956892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Teen Phoenicians Magazine
            </h1>
            <p className="text-lg md:text-xl text-white/95 drop-shadow-md">
              Monthly digital publications exploring teen mental health topics
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* About Section */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">About Our Magazine</h3>
            <p className="text-neutral-700 mb-4">
              Teen Phoenicians Magazine is a monthly digital publication created by teens, for teens. Each issue focuses on
              different aspects of mental health and wellbeing, featuring personal stories, expert advice, and practical
              resources.
            </p>
            <p className="text-neutral-700">
              Our magazine is completely free and can be viewed online or downloaded as a PDF. If you'd like to contribute to
              future issues with your story, artwork, or article, please reach out through the{' '}
              <a href="/feedback" className="text-blue-600 hover:text-blue-700 underline">
                Feedback page
              </a>
              .
            </p>
          </div>
        </div>

        {/* NOW AVAILABLE - PFLY VOL IA */}
        <div className="mb-12 animate-fadeIn">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 border-2 border-blue-200">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <BookOpen className="w-10 h-10 text-blue-600" />
                </div>
              </div>

              <div className="text-center mb-6">
                <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-3 shadow-sm">
                  NOW AVAILABLE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-2">PFLY VOL IA</h2>
                <p className="text-lg text-neutral-700 mb-6">
                  Our inaugural issue is here! Featuring teen stories, mental health resources, and expert insights for National
                  Suicide Prevention Month & National Recovery Month.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button
                  onClick={() => setShowFlipHTML(!showFlipHTML)}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                >
                  <ExternalLink className="w-5 h-5" />
                  {showFlipHTML ? 'Hide' : 'Read'} Flipbook Preview
                </button>

                <a
                  href="https://drive.google.com/uc?export=download&id=1jtHvQVuo_Iz3mMoJeJaOvSoI0iKSEwdw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              </div>

              {/* Heyzine Flipbook Thumbnail (instead of iframe) */}
              <div className="text-center mb-6">
                <a
                  href="https://heyzine.com/flip-book/6699aa1a80.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="https://cdnc.heyzine.com/flip-book/cover-play/10/6699aa1a80.jpg"
                    alt="PFLY VOL IA Flipbook Cover"
                    style={{
                      border: '1px solid lightgray',
                      boxShadow: '0 0 4px 1px lightgray',
                      width: '250px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </a>
                <p className="text-sm text-neutral-600 mt-2">Click the cover to view the full flipbook</p>
              </div>

              {showFlipHTML && (
                <div className="mt-6 transition-all duration-300">
                  <div className="bg-white rounded-lg p-4 shadow-xl border border-neutral-200">
                    {/* Fallback Info Instead of iframe */}
                    <p className="text-sm text-neutral-700 text-center mb-4">
                      The embedded view may not display in this environment. Click the cover above to read the full flipbook on
                      Heyzine.
                    </p>
                    <p className="text-xs text-neutral-500 text-center">
                      Tip: Flip pages with arrow keys or by dragging once opened.
                    </p>
                  </div>
                </div>
              )}

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center bg-white/50 rounded-lg p-4">
                  <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-3">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Personal Stories</h4>
                  <p className="text-sm text-neutral-600">Real experiences from teens in our community</p>
                </div>

                <div className="text-center bg-white/50 rounded-lg p-4">
                  <div className="p-3 bg-pink-100 rounded-full w-fit mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-pink-600" />
                  </div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Expert Advice</h4>
                  <p className="text-sm text-neutral-600">Professional insights on teen mental health</p>
                </div>

                <div className="text-center bg-white/50 rounded-lg p-4">
                  <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Monthly Issues</h4>
                  <p className="text-sm text-neutral-600">Fresh content every month, completely free</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl shadow-md p-6 max-w-2xl mx-auto border border-neutral-200">
            <div className="text-center">
              <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold mb-2 shadow-sm">
                COMING SOON
              </span>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">PFLY VOL I(B)</h3>

              <div className="flex items-center justify-center mb-3">
                <Calendar className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-sm font-semibold text-purple-700">Launching in 1 Week</span>
              </div>

              <p className="text-sm text-neutral-600">
                Our next issue is coming soon with more inspiring stories and mental health resources. Stay tuned!
              </p>
            </div>
          </div>
        </div>

        {/* Get Notified Section */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-neutral-200">
            <h3 className="text-xl font-semibold mb-4 text-neutral-800">Want to stay updated on new releases?</h3>
            <p className="text-neutral-600 mb-6">
              Follow our journey and be the first to know when new issues launch. We'll also share behind-the-scenes content and
              updates about upcoming magazines.
            </p>
            <p className="text-sm text-neutral-500">
              Stay connected through our other pages and social media for the latest updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazinePage;
