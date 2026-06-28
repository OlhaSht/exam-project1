import styles from './WaysSection.css';
import CONSTANTS from '../../../../../../constants';

const WaysSection = () => {
  return (
    <section className="ways-container">
      <div className="ways-container-info">
        <div className="ways-container-marker">Our Services</div>
        <h2 className="ways-container-title">3 Ways To Use Atom</h2>
        <p className="ways-container-subtitle">
          Atom offers 3 ways to get you a perfect name for your business.
        </p>
      </div>

      <div className="ways-content">
        <article className="ways-content-block">
          <img
            className="ways-contant-icon"
            src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}g1.svg`}
            alt="lightning"
          />
          <h3 className="ways-contant-title">Launch a Contest</h3>
          <p className="ways-content-info">
            Work with hundreds of creative experts to get custom name
            suggestions for your business or brand. All names are auto-checked
            for URL availability.
          </p>
          <a className="ways-button" href="">
            <p className="ways-botton-text">Launch a Contest</p>
            <img
              className="ways-arrow"
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-arrow-long-right.svg`}
              alt="arrow-right"
            />
          </a>
        </article>

        <article className="ways-content-block">
          <img
            className="ways-contant-icon"
            src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}g2.svg`}
            alt="tv"
          />
          <h3 className="ways-contant-title">Explore Names For Sale</h3>
          <p className="ways-content-info">
            Our branding team has curated thousands of pre-made names that you
            can purchase instantly. All names include a matching URL and a
            complimentary Logo Design
          </p>
          <a className="ways-button" href="">
            <p className="ways-botton-text">Explore Names For Sale</p>
            <img
              className="ways-arrow"
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-arrow-long-right.svg`}
              alt="arrow-right"
            />
          </a>
        </article>

        <article className="ways-content-block">
          <img
            className="ways-contant-icon"
            src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}g3.svg`}
            alt="lamp"
          />
          <h3 className="ways-contant-title">Agency-level Managed Contests</h3>
          <p className="ways-content-info">
            Our Managed contests combine the power of crowdsourcing with the
            rich experience of our branding consultants. Get a complete
            agency-level experience at a fraction of Agency costs
          </p>
          <a className="ways-button" href="">
            <p className="ways-botton-text">Learn More</p>
            <img
              className="ways-arrow"
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-arrow-long-right.svg`}
              alt="arrow-right"
            />
          </a>
        </article>
      </div>
    </section>
  );
};

export default WaysSection;
