import styles from './WinSection.css';
import CONSTANTS from '../../../../../../constants';

const WinSection = () => {
  return (
    <section className="win-container">
      <div className="win-main-title">
        <img
          className="win-icon"
          src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}icon-win.svg`}
          alt="winner's cup"
        />
        <h3 className="win-title">How Do Naming Contests Work?</h3>
      </div>

      <div className="win-content">
        <article className="win-content-block">
          <div className="win-step">
            <p className="win-step-text">Step 1</p>
          </div>
          <p className="win-content-text">
            Fill out your Naming Brief and begin receiving name ideas in minutes
          </p>
          <img
            className="win-arrow"
            src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}arrow-right-blue.svg`}
            alt="arrow"
          />
        </article>

        <article className="win-content-block">
          <div className="win-step">
            <p className="win-step-text">Step 2</p>
          </div>
          <p className="win-content-text">
            Rate the submissions and provide feedback to creatives. Creatives
            submit even more names based on your feedback.
          </p>
          <img
            className="win-arrow"
            src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}arrow-right-blue.svg`}
            alt="arrow"
          />
        </article>

        <article className="win-content-block">
          <div className="win-step">
            <p className="win-step-text">Step 3</p>
          </div>
          <p className="win-content-text">
            Our team helps you test your favorite names with your target
            audience. We also assist with Trademark screening.
          </p>
          <img
            className="win-arrow"
            src={`${CONSTANTS.STATIC_IMAGES_PATH_ATOM}arrow-right-blue.svg`}
            alt="arrow"
          />
        </article>

        <article className="win-content-block">
          <div className="win-step">
            <p className="win-step-text">Step 4</p>
          </div>
          <p className="win-content-text">
            Pick a Winner. The winner gets paid for their submission.
          </p>
        </article>
      </div>
    </section>
  );
};

export default WinSection;
