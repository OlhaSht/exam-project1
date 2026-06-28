import styles from './AtomFooter.css';
import CONSTANTS from '../../../../../../constants';

const AtomFooter = () => {
  return (
    <footer className="footer-container">
      <div className="footer-container-block">
        <p className="footer-copyright-text">Copyright © 2024 Atom.com</p>
      </div>

      <div className="footer-container-block excellent-bassed">
        <div className="footer-container-exellent">
          <h5 className="footer-excellent-text">Excellent</h5>
          <div className="star-block">
            <img
              className="footer-excellent-star"
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}trustpilot-star.webp`}
              alt="star"
            />
            <img
              className="footer-excellent-star"
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}trustpilot-star.webp`}
              alt="star"
            />
            <img
              className="footer-excellent-star"
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}trustpilot-star.webp`}
              alt="star"
            />
            <img
              className="footer-excellent-star"
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}trustpilot-star.webp`}
              alt="star"
            />
            <img
              className="footer-excellent-star"
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}trustpilot-half-star.webp`}
              alt="star-half"
            />
          </div>
          <p className="footer-star-text">
            <img
              className="footer-excellent-star-green"
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}trustpilot-brand-icon.webp`}
              alt="star green"
            />
            Trustpilot
          </p>
        </div>

        <div className="footer-container-rating">
          <span className="footer-rating-numbers">
            <em>4.7 /5</em>
          </span>
          <p className="footer-rating-text">based on 336 ratings</p>
        </div>
      </div>

      <div className="footer-container-block">
        <div className="footer-container-button">
          <a className="footer-consent-text" href="">
            Consent Preferences
          </a>
        </div>
        <div className="footer-container-contact">
          <a
            className="footer-contact-icon"
            href="https://www.facebook.com/atomdotcom"
          >
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}facebook.svg`}
              alt="fasebook icon"
            />
          </a>
          <a
            className="footer-contact-icon"
            href="https://twitter.com/squadhelp"
          >
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}twitter.svg`}
              alt="twitter icon"
            />
          </a>
          <a
            className="footer-contact-icon"
            href="https://www.instagram.com/workwithatom/"
          >
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}instagam.svg`}
              alt="instagram icon"
            />
          </a>
          <a
            className="footer-contact-icon"
            href="https://www.linkedin.com/company/atomdotcom/"
          >
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}in.svg`}
              alt="linkedin"
            />
          </a>
          <a
            className="footer-contact-icon"
            href="https://www.youtube.com/@atomdotcom"
          >
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}youtube.svg`}
              alt="youtube icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AtomFooter;
