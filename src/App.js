import './App.scss';
import MyHeader from './component/MyHeader';
import BannerPg from './pages/BannerPg';
import AboutPg from './pages/AboutPg';
import ProjectPg from './pages/ProjectPg';
import ContactPg from './pages/ContactPg';
import ExperiencePg from './pages/ExperiencePg';
import RightMenu from './component/RightMenu';
import { LanguageProvider } from './component/LanguageContext';
import useScrollEffect from './component/SectionScroll';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('animate__animated', 'animate__fadeInUp');
      section.classList.remove('animate__fadeInDown');
    })
  }, [])


  useScrollEffect();

  return (
    <div className="App">
      <LanguageProvider>
        <MyHeader />
        <RightMenu />
        <BannerPg />
        <AboutPg />
        <ExperiencePg />
        <ProjectPg />
        <ContactPg />
      </LanguageProvider>
    </div>
  );
}

export default App;
