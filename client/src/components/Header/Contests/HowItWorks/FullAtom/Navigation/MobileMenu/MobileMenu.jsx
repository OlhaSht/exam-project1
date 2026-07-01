import './MobileMenu.css';
import CONSTANTS from '../../../../../../../constants';

const MobileMenu = () => {
  return (
    <nav className="mobile-main-container-list">
      <div className="mobile-main">
        <div className="mobile-search-container-block">
          <img
            className="mobile-search-block-img"
            src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-search.svg`}
            alt="search"
          />
          <input
            className="mobile-search-block-input"
            type="text"
            placeholder="Search Over 200,000+ Premium Names"
          />
          <button className="mobile-search-block-button">
            <img
              className="search-img-arrow"
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-arrow-long-right.svg`}
              alt="arrow"
            />
          </button>
        </div>

        <ul className="mobile-main-nav">
          <li
            className="mobile-main-nav-li accordeon"
            onClick={(e) => e.currentTarget.classList.toggle('active')}
          >
            <div className="mobile-text">
              <p className="mobile-main-nav-link">Names For Sale </p>
              <i className="fa-solid fa-chevron-down"></i>
            </div>

            <ul className="mobile-main-nav-drop-list ">
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/premium-domains-for-sale"
                >
                  Curated Domain Marketplace{' '}
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/premium-domains-for-sale"
                >
                  Premium Domains
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/ultra-premium-marketplace/all"
                >
                  Ultra Premium Domains
                </a>
              </li>
              <ul className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/premium-domains-for-sale/all/length/Short"
                >
                  Short Domains
                </a>

                <li className="mobile-main-nav-sub-li">
                  <a
                    className="main-nav-sub-link child"
                    href="https://www.atom.com/premium-domains-for-sale/all/length/3%20Letters"
                  >
                    - 3 Letter Domains
                  </a>
                </li>
                <li className="mobile-main-nav-sub-li">
                  <a
                    className="main-nav-sub-link child"
                    href="https://www.atom.com/premium-domains-for-sale/all/length/4%20Letters"
                  >
                    - 4 Letter Domains
                  </a>
                </li>
                <li className="mobile-main-nav-sub-li">
                  <a
                    className="main-nav-sub-link child"
                    href="https://www.atom.com/premium-domains-for-sale/all/length/5%20Letters"
                  >
                    - 5 Letter Domains
                  </a>
                </li>
              </ul>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="mobile-main-nav-sub-link"
                  href="https://www.atom.com/premium-domains-for-sale/all/type_of_name/One%20Word"
                >
                  One Word Domains
                </a>
              </li>
            </ul>
          </li>

          <li
            className="mobile-main-nav-li accordeon"
            onClick={(e) => e.currentTarget.classList.toggle('active')}
          >
            <div className="mobile-text">
              <p className="mobile-main-nav-link">Naming Contests </p>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <ul className="mobile-main-nav-drop-list">
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/start-contest"
                >
                  Start A Contest
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/how-it-works"
                >
                  How It Works
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/pricing"
                >
                  Contest Pricing
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/managed-contests"
                >
                  Agency Services
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/our-work"
                >
                  Our Work
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/winners"
                >
                  Recent Winners
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/branding-marketing-naming-contests/all"
                >
                  Active Contests
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/join-as-creative"
                >
                  Become A Creative
                </a>
              </li>
            </ul>
          </li>

          <li
            className="mobile-main-nav-li accordeon"
            onClick={(e) => e.currentTarget.classList.toggle('active')}
          >
            <div className="mobile-text">
              <p className="mobile-main-nav-link">Other Services </p>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <ul className="mobile-main-nav-drop-list">
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/logos"
                >
                  Logo Contest
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/taglines"
                >
                  Tagline Contest
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/brand-identity-design"
                >
                  Brand Identity Design
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/audience-testing"
                >
                  Audience Testing
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://helpdesk.atom.com/en/articles/389625-trademark-research-service7"
                >
                  Trademark Research
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://helpdesk.atom.com/squadhelp-services/trademark-filing-package"
                >
                  Trademark Filing
                </a>
              </li>
            </ul>
          </li>

          <li className="mobile-main-nav-li">
            <p className="mobile-main-nav-link">Agency Experience </p>
          </li>

          <li
            className="mobile-main-nav-li accordeon"
            onClick={(e) => e.currentTarget.classList.toggle('active')}
          >
            <div className="mobile-text">
              <p className="mobile-main-nav-link">Resources </p>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <ul className="mobile-main-nav-drop-list">
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/business-name-generator"
                >
                  Business Name Generator
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/domain-name-generator"
                >
                  Domain Name Generator
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/youtube-name-generator"
                >
                  YouTube Name Generator
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/brand-alignment"
                >
                  Brand Alignment Tool
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/free-trademark-search"
                >
                  Free Trademark Checker
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/startups"
                >
                  Startup Toolkit
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/blog/"
                >
                  Blog
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
                <a
                  className="main-nav-sub-link"
                  href="https://www.atom.com/our-work"
                >
                  Our Work
                </a>
              </li>
              <li className="mobile-main-nav-sub-li">
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
      </div>
    </nav>
  );
};

export default MobileMenu;
