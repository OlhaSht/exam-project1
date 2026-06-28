import styles from './FooterListSection.css';

const FooterListSection = () => {
  return (
    <footer className="footer-menu-container">
      <div
        className="footer-menu-block accordeon"
        onClick={(e) => e.currentTarget.classNameList.toggle('active')}
      >
        <h5 className="footer-menu-title">Services</h5>
        <ul className="footer-menu-ul">
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/premium-domains-for-sale/all"
            >
              Domain Marketplace
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/ultra-premium-marketplace/all"
            >
              Ultra Premium Marketplace
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/premium-domains-for-sale"
            >
              Premium Domains For Sale
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/branding-marketing-naming-contests"
            >
              Crowdsource Naming
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/premium-domains-for-sale/all/q/brandable"
            >
              Brandable Domains
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/premium-domains-for-sale/all/length/Short"
            >
              Short Domains
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/premium-domains-for-sale/all/length/3%20Letters"
            >
              3 Letter Domains
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/premium-domains-for-sale/all/length/4%20Letters"
            >
              4 Letter Domains
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/premium-domains-for-sale/all/length/5%20Letters"
            >
              5 Letter Domains
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/premium-domains-for-sale/all/q/6%20letter"
            >
              6 Letter Domains
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/premium-domains-for-sale/all/q/7%20letter"
            >
              7 Letter Domains
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/premium-domains-for-sale/all/type_of_name/One%20Word"
            >
              One Word Domains
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/brand-identity-design"
            >
              Brand Identity Design
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://helpdesk.atom.com/squadhelp-services/squadhelp-managed-contest-service"
            >
              Agency Services
            </a>
          </li>
          <li className="footer-menu-li">
            <a className="footer-menu-link" href="https://www.atom.com/logos">
              Logo Contests
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/taglines"
            >
              Tagline Contests
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://helpdesk.atom.com/squadhelp-services/trademark-filing-package"
            >
              Trademark Filing Service
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/audience-testing"
            >
              Audience Test
            </a>
          </li>
        </ul>
      </div>

      <div
        className="footer-menu-block accordeon"
        onClick={(e) => e.currentTarget.classNameList.toggle('active')}
      >
        <h5 className="footer-menu-title">Tools</h5>
        <ul className="footer-menu-ul">
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/business-name-generator"
            >
              Business Name Generator
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/domain-name-generator"
            >
              Domain Name Generator
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/blog/how-to-come-up-with-business-name/"
            >
              How to Name Your Business
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/free-trademark-search"
            >
              Free Trademark Checker
            </a>
          </li>
          <li className="footer-menu-li">
            <a className="footer-menu-link" href="https://www.atom.com/blog/">
              Branding Blog
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/how-to-name-your-business"
            >
              Business Naming eBook
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/startups"
            >
              Startup Toolkit
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/startup-name-generator"
            >
              Startup Name Generator
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/band-name-generator"
            >
              Band Name Generator
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/blog-name-generator"
            >
              Blog Name Generator
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/youtube-name-generator"
            >
              YouTube Name Generator
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/domain-extensions"
            >
              Domain Extensions
            </a>
          </li>
          <li className="footer-menu-li">
            <a
              className="footer-menu-link"
              href="https://www.atom.com/build-a-brand"
            >
              Build a Brand
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-menu-block">
        <div
          className="subblock accordeon"
          onClick={(e) => e.currentTarget.classNameList.toggle('active')}
        >
          <h5 className="footer-menu-title">Sellers</h5>
          <ul className="footer-menu-ul">
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/sell-domain-names"
              >
                Become a Seller
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://helpdesk.atom.com/en/articles/997701-domain-marketplace-terms-conditions-for-sellers"
              >
                Domain Selling Info
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/ultra-premium-marketplace"
              >
                Ultra Premium Seller Info
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://discussion.atom.com/"
              >
                Discussion Forum
              </a>
            </li>
          </ul>
        </div>

        <div
          className="subblock accordeon"
          onClick={(e) => e.currentTarget.classNameList.toggle('active')}
        >
          <h5 className="footer-menu-title">Creatives</h5>
          <ul className="footer-menu-ul">
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/join-as-creative"
              >
                Become a Creative
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://helpdesk.atom.com/en/collections/118397-creatives"
              >
                Creative FAQs
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/branding-marketing-naming-contests/all"
              >
                Active Contests
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/winners"
              >
                Recent Winners
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://discussion.atom.com/"
              >
                Discussion Forum
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-menu-block">
        <div
          className="subblock accordeon"
          onClick={(e) => e.currentTarget.classNameList.toggle('active')}
        >
          <h5 className="footer-menu-title">Atom</h5>
          <ul className="footer-menu-ul">
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/AboutUs"
              >
                About
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/ContactUs"
              >
                Contact
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/how-it-works"
              >
                How It Works
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/testimonials-feedback"
              >
                Testimonials
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/our-work"
              >
                Our Work
              </a>
            </li>
            <li className="footer-menu-li">
              <a className="footer-menu-link" href="https://helpdesk.atom.com/">
                Help & FAQs
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/connect"
              >
                AtomConnect
              </a>
            </li>
          </ul>
        </div>

        <div
          className="subblock accordeon"
          onClick={(e) => e.currentTarget.classNameList.toggle('active')}
        >
          <h5 className="footer-menu-title">Legal</h5>
          <ul className="footer-menu-ul">
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/Terms&Conditions"
              >
                Terms of Service
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/privacy-policy"
              >
                Privacy Policy
              </a>
            </li>
            <li className="footer-menu-li">
              <a
                className="footer-menu-link"
                href="https://www.atom.com/cookie-policy"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default FooterListSection;
