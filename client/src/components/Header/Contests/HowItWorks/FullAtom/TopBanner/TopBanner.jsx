import styles from './TopBanner.css';

const TopBanner = () => {
  return (
    <section className="header-container">
      <div className="header-block">
        <div className="header-content">
          <a
            className="header-link"
            href="https://www.atom.com/blog/discover-atom/"
            target="_blank"
          >
            Squadhelp is now Atom{' '}
            <span className="mobile-part">- where everything starts!</span>
          </a>
          <a
            className="header-button"
            href="https://www.atom.com/blog/discover-atom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
