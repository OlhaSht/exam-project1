import styles from './DesktopMenu.css';
import CONSTANTS from '../../../../../../../constants';

function openMenu() {
  const body = document.querySelector('.body');
  body?.classList.toggle('menu-open');
}
const menuItems = document.querySelectorAll('.mobile-main-nav-link');

menuItems.forEach((item) => {
  item.addEventListener('click', function () {
    this.closest('.mobile-main-nav-li')?.classList.toggle('active');
  });
});

const DesktopMenu = () => {
  return (
    <nav className="main-container-list">
      <ul className="main-nav">
        <li className="main-nav-li">
          <a
            className="main-nav-link"
            href="https://www.atom.com/premium-domains-for-sale"
          >
            Names For Sale
            <i className="fa-solid fa-chevron-down"></i>
          </a>

          <ul className="main-nav-drop-list">
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/premium-domains-for-sale"
              >
                Curated Domain Marketplace{' '}
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/premium-domains-for-sale"
              >
                Premium Domains
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/ultra-premium-marketplace/all"
              >
                Ultra Premium Domains
              </a>
            </li>
            <ul className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/premium-domains-for-sale/all/length/Short"
              >
                Short Domains
              </a>

              <li className="main-nav-sub-li">
                <a
                  className="main-nav-sub-link child"
                  href="https://www.atom.com/premium-domains-for-sale/all/length/3%20Letters"
                >
                  - 3 Letter Domains
                </a>
              </li>
              <li className="main-nav-sub-li">
                <a
                  className="main-nav-sub-link child"
                  href="https://www.atom.com/premium-domains-for-sale/all/length/4%20Letters"
                >
                  - 4 Letter Domains
                </a>
              </li>
              <li className="main-nav-sub-li">
                <a
                  className="main-nav-sub-link child"
                  href="https://www.atom.com/premium-domains-for-sale/all/length/5%20Letters"
                >
                  - 5 Letter Domains
                </a>
              </li>
            </ul>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/premium-domains-for-sale/all/type_of_name/One%20Word"
              >
                One Word Domains
              </a>
            </li>
          </ul>
        </li>

        <li className="main-nav-li">
          <a
            className="main-nav-link"
            href="https://www.atom.com/branding-marketing-naming-contests"
          >
            Naming Contests
            <i className="fa-solid fa-chevron-down"></i>
          </a>
          <ul className="main-nav-drop-list">
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/start-contest"
              >
                Start A Contest
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/how-it-works"
              >
                How It Works
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/pricing"
              >
                Contest Pricing
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/managed-contests"
              >
                Agency Services
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/our-work"
              >
                Our Work
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/winners"
              >
                Recent Winners
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/branding-marketing-naming-contests/all"
              >
                Active Contests
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/join-as-creative"
              >
                Become A Creative
              </a>
            </li>
          </ul>
        </li>

        <li className="main-nav-li">
          <a
            className="main-nav-link"
            href="https://www.atom.com/how-it-works#"
          >
            Other Services
            <i className="fa-solid fa-chevron-down"></i>
          </a>
          <ul className="main-nav-drop-list">
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/logos"
              >
                Logo Contest
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/taglines"
              >
                Tagline Contest
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/brand-identity-design"
              >
                Brand Identity Design
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/audience-testing"
              >
                Audience Testing
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://helpdesk.atom.com/en/articles/389625-trademark-research-service7"
              >
                Trademark Research
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://helpdesk.atom.com/squadhelp-services/trademark-filing-package"
              >
                Trademark Filing
              </a>
            </li>
          </ul>
        </li>

        <li className="main-nav-li">
          <a
            className="main-nav-link"
            href="https://www.atom.com/managed-contests"
          >
            Agency Experience{' '}
          </a>
        </li>

        <li className="main-nav-li">
          <a className="main-nav-link" href="/">
            Resources
            <i className="fa-solid fa-chevron-down"></i>
          </a>
          <ul className="main-nav-drop-list">
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/business-name-generator"
              >
                Business Name Generator
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/domain-name-generator"
              >
                Domain Name Generator
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/youtube-name-generator"
              >
                YouTube Name Generator
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/brand-alignment"
              >
                Brand Alignment Tool
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/free-trademark-search"
              >
                Free Trademark Checker
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/startups"
              >
                Startup Toolkit
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/blog/"
              >
                Blog
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/our-work"
              >
                Our Work
              </a>
            </li>
            <li className="main-nav-sub-li">
              <a
                className="main-nav-sub-link"
                href="https://www.atom.com/testimonials-feedback"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
