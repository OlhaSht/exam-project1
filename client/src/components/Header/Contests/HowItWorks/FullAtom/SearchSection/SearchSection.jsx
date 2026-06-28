import styles from './SearchSection.css';
import CONSTANTS from '../../../../../../constants';

const SearchSection = () => {
  return (
    <div className="search-container">
      <section className="search-container-section">
        <div className="search-container-block">
          <img
            className="search-block-img"
            src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-search.svg`}
            alt="search"
          />
          <input
            className="search-block-input"
            type="text"
            placeholder="Search Over 200,000+ Premium Names"
          />
          <button className="search-block-button">
            <img
              className="search-img-arrow"
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-arrow-long-right.svg`}
              alt="arrow"
            />
          </button>
        </div>

        <nav className="search-nav">
          <p className="search-nav-text">Popular searches</p>
          <div className="search-nav-livk">
            <a
              className="search-link-text"
              href="https://www.atom.com/premium-domains-for-sale/for/technology"
            >
              Tech
            </a>
          </div>
          <div className="search-nav-livk">
            <a
              className="search-link-text"
              href="https://www.atom.com/premium-domains-for-sale/for/fashion-clothing"
            >
              Clothing
            </a>
          </div>
          <div className="search-nav-livk">
            <a
              className="search-link-text"
              href="https://www.atom.com/premium-domains-for-sale/for/finance"
            >
              Finance
            </a>
          </div>
          <div className="search-nav-livk">
            <a
              className="search-link-text"
              href="https://www.atom.com/premium-domains-for-sale/for/real-estate"
            >
              Real Estate
            </a>
          </div>
          <div className="search-nav-livk">
            <a
              className="search-link-text"
              href="https://www.atom.com/premium-domains-for-sale/for/cryptocurrency-blockchain"
            >
              Crypto
            </a>
          </div>
          <div className="search-nav-livk">
            <a
              className="search-link-text"
              href="https://www.atom.com/premium-domains-for-sale/all/length/Short"
            >
              Short
            </a>
          </div>
          <div className="search-nav-livk">
            <a
              className="search-link-text"
              href="https://www.atom.com/premium-domains-for-sale/all/type_of_name/One%20Word"
            >
              One Word
            </a>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default SearchSection;
