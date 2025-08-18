import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import FacultyPage from './components/faculty/FacultyPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ApplyPage from './pages/ApplyPage';
import PastEventsPage from './pages/PastEventsPage';
import CampusLifePage from './pages/CampusLifePage';
import ResearchPage from './pages/Researchpage';
import PCIPage from './pages/PCIPage';
import CommitteesPage from './components/committee/CommiteePage';
import PlacementPage from './pages/PlacementPage';
import NAACPage from './pages/NAACPage';
import ChatBot from './components/Chatbot';
import WhatsAppIcon from './components/WhatsAppIcon';

import Criteria1 from './pages/criteria/quality/Criteria1';
import Criteria2 from './pages/criteria/quality/Criteria2';
import Criteria3 from './pages/criteria/quality/Criteria3';
import Criteria4 from './pages/criteria/quality/Criteria4';
import Criteria5 from './pages/criteria/quality/Criteria5';
import Criteria6 from './pages/criteria/quality/Criteria6';
import Criteria7 from './pages/criteria/quality/Criteria7';
import DvvCriteria1 from './pages/criteria/dvv/Criteria1';
import DvvCriteria2 from './pages/criteria/dvv/Criteria2';
import DvvCriteria3 from './pages/criteria/dvv/Criteria3';
import DvvCriteria4 from './pages/criteria/dvv/Criteria4';
import DvvCriteria5 from './pages/criteria/dvv/Criteria5';
import DvvCriteria6 from './pages/criteria/dvv/Criteria6';
import DvvCriteria7 from './pages/criteria/dvv/Criteria7';
import FeedbackPage from './pages/Feedbackpage';




const App: React.FC = () => {
  return (
      <div className="min-h-screen bg-white flex flex-col">
        <ChatBot/>
        <WhatsAppIcon/>
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/faculty" element={<FacultyPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/committee" element={<CommitteesPage />} />
              <Route path="/apply" element={<ApplyPage />} />
              <Route path="/past-events" element={<PastEventsPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/campus-life" element={<CampusLifePage />} />
              <Route path="/pci" element={<PCIPage />} />
              <Route path="/placement" element={<PlacementPage />} />
              <Route path="/naac" element={<NAACPage />} />
              <Route path="/feedback" element={<FeedbackPage/>} />
              <Route path="/research/publications" element={<div>Publications Page</div>} />
              <Route path="/research/projects" element={<div>Projects Page</div>} />
              <Route path="/research/collaborations" element={<div>Collaborations Page</div>} />
              <Route path="/research/funding" element={<div>Funding Page</div>} />
              <Route path="/research/patents" element={<div>Patents Page</div>} />
              <Route path="/criteria/criteria-i" element={<Criteria1 />} />
              <Route path="/criteria/criteria-ii" element={<Criteria2 />} />
              <Route path="/criteria/criteria-iii" element={<Criteria3 />} />
              <Route path="/criteria/criteria-iv" element={<Criteria4 />} />
              <Route path="/criteria/criteria-v" element={<Criteria5 />} />
              <Route path="/criteria/criteria-vi" element={<Criteria6 />} />
              <Route path="/criteria/criteria-vii" element={<Criteria7 />} />
              <Route path="/criteria/dvv-criteria-i" element={<DvvCriteria1 />} />
              <Route path="/criteria/dvv-criteria-ii" element={<DvvCriteria2 />} />
              <Route path="/criteria/dvv-criteria-iii" element={<DvvCriteria3 />} />
              <Route path="/criteria/dvv-criteria-iv" element={<DvvCriteria4 />} /> 
              <Route path="/criteria/dvv-criteria-v" element={<DvvCriteria5 />} />
              <Route path="/criteria/dvv-criteria-vi" element={<DvvCriteria6 />} />
              <Route path="/criteria/dvv-criteria-vii" element={<DvvCriteria7 />} />
      
              {/* Uncomment this if you have a NotFoundPage */}
      
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
  
  );
};

export default App;