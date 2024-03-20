import './App.scss';
import MyHeader from './component/MyHeader';
import BannerPg from './pages/BannerPg';
import AboutPg from './pages/AboutPg';
import ProjectPg from './pages/ProjectPg';
import ContactPg from './pages/ContactPg';
import ExperiencePg from './pages/ExperiencePg';
import RightMenu from './component/RightMenu';
import { LanguageProvider } from './component/LanguageContext';

function App() {
  return (
    <div className="App scroller">
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
