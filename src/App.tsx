import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SharingPage from './pages/SharingPage';
import JourneyPage from './pages/JourneyPage';
import ArticlesPage from './pages/ArticlesPage';
import AwarenessPage from './pages/AwarenessPage';
import MagazinePage from './pages/MagazinePage';
import CampaignsListPage from './pages/CampaignsListPage';
import PetitionsPage from './pages/PetitionsPage';
import VolunteerPage from './pages/VolunteerPage';
import FeedbackPage from './pages/FeedbackPage';
import CalendarPage from './pages/CalendarPage';
import StoryDetailPage from './pages/StoryDetailPage';
import PetitionDetailPage from './pages/PetitionDetailPage';
import CampaignDetailPage from './pages/CampaignDetailPage';

// Article pages
import AnxiousButProductivePage from './pages/articles/AnxiousButProductivePage';
import BurnoutBefore30Page from './pages/articles/BurnoutBefore30Page';
import LonelinessParadoxPage from './pages/articles/LonelinessParadoxPage';
import EmotionalNumbnessPage from './pages/articles/EmotionalNumbnessPage';
import DoomscrollingPage from './pages/articles/DoomscrollingPage';
import OnlineTherapyPage from './pages/articles/OnlineTherapyPage';
import MoodSwingsPage from './pages/articles/MoodSwingsPage';
import MentalHealthRoutinePage from './pages/articles/MentalHealthRoutinePage';
import SelfTalkPage from './pages/articles/SelfTalkPage';
import SettingBoundariesPage from './pages/articles/SettingBoundariesPage';
import FriendshipConflictsPage from './pages/articles/FriendshipConflictsPage';
import DigitalDetoxPage from './pages/articles/DigitalDetoxPage';
import ImprovingSleepPage from './pages/articles/ImprovingSleepPage';
import ScreenTimeAndSleepPage from './pages/articles/ScreenTimeAndSleepPage';
import WhatAmIHereForPage from './pages/articles/WhatAmIHereForPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/share" element={<SharingPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/journey/articles" element={<ArticlesPage />} />
        <Route path="/awareness" element={<AwarenessPage />} />
        <Route path="/magazine" element={<MagazinePage />} />
        <Route path="/campaigns" element={<CampaignsListPage />} />
        <Route path="/petitions" element={<PetitionsPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/story/:id" element={<StoryDetailPage />} />
        <Route path="/petition/:id" element={<PetitionDetailPage />} />
        <Route path="/campaign/:id" element={<CampaignDetailPage />} />

        {/* Article routes */}
        <Route path="/tips/anxious-but-productive" element={<AnxiousButProductivePage />} />
        <Route path="/tips/burnout-before-30" element={<BurnoutBefore30Page />} />
        <Route path="/tips/loneliness-paradox" element={<LonelinessParadoxPage />} />
        <Route path="/tips/emotional-numbness" element={<EmotionalNumbnessPage />} />
        <Route path="/tips/doomscrolling" element={<DoomscrollingPage />} />
        <Route path="/tips/online-therapy-revolution" element={<OnlineTherapyPage />} />
        <Route path="/tips/mood-swings" element={<MoodSwingsPage />} />
        <Route path="/tips/mental-health-routine" element={<MentalHealthRoutinePage />} />
        <Route path="/tips/self-talk-guide" element={<SelfTalkPage />} />
        <Route path="/tips/setting-boundaries" element={<SettingBoundariesPage />} />
        <Route path="/tips/friendship-conflicts" element={<FriendshipConflictsPage />} />
        <Route path="/tips/digital-detox" element={<DigitalDetoxPage />} />
        <Route path="/tips/improving-sleep" element={<ImprovingSleepPage />} />
        <Route path="/tips/screen-time-and-sleep" element={<ScreenTimeAndSleepPage />} />
        <Route path="/tips/what-am-i-here-for" element={<WhatAmIHereForPage />} />
      </Routes>
    </Router>
  );
}

export default App;
