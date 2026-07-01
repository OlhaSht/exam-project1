import './Reset.css';
import './Font.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './FullAtom2.css';
import TopBanner from '../FullAtom/TopBanner/TopBanner.jsx';
import Navigation from '../FullAtom/Navigation/Navigation.jsx';
import HeroSection from '../FullAtom/HeroSection/HeroSection.jsx';
import WaysSection from '../FullAtom/WaysSection/WaysSection.jsx';
import WinSection from '../FullAtom/WinSection/WinSection.jsx';
import QuestionsSection from '../FullAtom/QuestionsSection/QuestionsSection.jsx';
import SearchSection from '../FullAtom/SearchSection/SearchSection.jsx';
import FooterListSection from '../FullAtom/FooterListSection/FooterListSection.jsx';
import AtomFooter from '../FullAtom/AtomFooter/AtomFooter.jsx';

const FullAtom = () => {
  const customFontStyle = {
    fontFamily: 'Product Sans, sans-serif',
  };

  return (
    // <div className="body" style={customFontStyle}>
    //   <header className="header">
    //     <TopBanner />
    //     <Navigation />
    //     <HeroSection />
    //     <WaysSection />
    //     <WinSection />
    //     <QuestionsSection />
    //     <SearchSection />
    //     <FooterListSection />
    //     <AtomFooter />
    //   </header>
    // </div>
    <div className="body" style={customFontStyle}>
      <header>
        <TopBanner />
        <Navigation />
        <HeroSection />
      </header>

      <main>
        <WaysSection />
        <WinSection />
        <QuestionsSection />
        <SearchSection />
        <FooterListSection />
      </main>

      <AtomFooter />
    </div>
  );
};

export default FullAtom;
