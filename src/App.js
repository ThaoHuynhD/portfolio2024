import { useEffect, useState } from 'react';
import './App.scss';
import MyHeader from './component/MyHeader';
import { darkModeLocalStorage, vietnameseModeLocalStorage } from './localstorage/localServices';
import BannerPg from './pages/BannerPg';
import AboutPg from './pages/AboutPg';
import ProjectPg from './pages/ProjectPg';
import ContactPg from './pages/ContactPg';
import ExperiencePg from './pages/ExperiencePg';

function App() {
  let [isDarkMode, setIsDarkMode] = useState(darkModeLocalStorage.get());
  let [isVietnamese, setIsVietnamese] = useState(vietnameseModeLocalStorage.get());

  const toggleScreenMode = () => {
    darkModeLocalStorage.set(!isDarkMode);
    setIsDarkMode(darkModeLocalStorage.get());
  }

  const toggleLanguageMode = () => {
    vietnameseModeLocalStorage.set(!isVietnamese);
    setIsVietnamese(vietnameseModeLocalStorage.get());
  }

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const body = document.body;
    if (isVietnamese) {
      body.classList.add('vietnamese-mode');
    } else {
      body.classList.remove('vietnamese-mode');
    }
  }, [isVietnamese]);

  return (
    <div className="App scroller">
      <MyHeader toggleScreenMode={toggleScreenMode} toggleLanguageMode={toggleLanguageMode} isVietnamese={isVietnamese} />
      <BannerPg isVietnamese={isVietnamese} />
      <AboutPg isVietnamese={isVietnamese} />
      <ExperiencePg />
      <ProjectPg isVietnamese={isVietnamese} />
      <ContactPg isVietnamese={isVietnamese} />
    </div>
  );
}

export default App;
