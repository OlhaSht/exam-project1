import './Navigation.css';
import Logo from '../Navigation/Logo/Logo';
import DesktopMenu from '../Navigation/DesktopMenu/DesktopMenu';
import NavigationIcons from '../Navigation/NavigationIcons/NavigationIcons';
import MobileMenu from '../Navigation/MobileMenu/MobileMenu';

const Navigation = () => {
  return (
    <main className="main-container">
      <div className="main-container-nav">
        <Logo />
        <DesktopMenu />
        <NavigationIcons />
      </div>
      <MobileMenu />
    </main>
  );
};
export default Navigation;
