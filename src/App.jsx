import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './pages/Hero';
import Dashboard from './pages/Dashboard';
import SectionDetail from './pages/SectionDetail';

function App() {
  const [currentScreen, setCurrentScreen] = useState('hero'); // 'hero', 'dashboard', 'detail'
  const [selectedSection, setSelectedSection] = useState(null);

  const handleEnter = () => {
    setCurrentScreen('dashboard');
  };

  const handleSelectSection = (section) => {
    setSelectedSection(section);
    setCurrentScreen('detail');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
    setSelectedSection(null);
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {currentScreen === 'hero' && (
          <Hero key="hero" onEnter={handleEnter} />
        )}

        {currentScreen === 'dashboard' && (
          <Dashboard
            key="dashboard"
            onSelectSection={handleSelectSection}
          />
        )}

        {currentScreen === 'detail' && selectedSection && (
          <SectionDetail
            key="detail"
            section={selectedSection}
            onBack={handleBackToDashboard}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
