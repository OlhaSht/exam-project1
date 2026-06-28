import styles from './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="work-container">
      <article className="work-container-block">
        <div className="work-container-content">
          <div className="work-marker">World's #1 Naming Platform</div>
          <h1 className="work-title">How Does Atom Work?</h1>
          <p className="work-text">
            Atom helps you come up with a great name for your business by
            combining the power of crowdsourcing with sophisticated technology
            and Agency-level validation services.
          </p>
          <button className="work-button">
            <i className="fa-solid fa-play"></i>
            <small className="work-button-text">Play Video</small>
          </button>
        </div>
      </article>
      <article className="work-container-block">
        <img
          className="work-img"
          src="https://www.atom.com/resources/assets/svg/illustrations/app-user.svg"
          alt=""
        />
      </article>
    </section>
  );
};

export default HeroSection;
