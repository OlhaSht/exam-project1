import { useState, useEffect } from 'react';
import styles from './QuestionsSection.css';

const QuestionsSection = () => {
  const [activeSection, setActiveSection] = useState('article1');

  useEffect(() => {
    const sections = document.querySelectorAll('.questions-paragraph-title');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        //threshold: 0.5,
        rootMargin: '-30% 0px -60% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="questions-container">
      <section className="questions-main-container">
        <h3 className="questions-main-title">Frequently Asked Questions</h3>
        <nav className="questions-main-nav">
          {/* <div
            className="questions-main-link"
            onClick={(e) => e.currentTarget.classList.toggle('active')}
          > */}

          <div
            //onClick={(e) => e.currentTarget.classList.toggle('active')}
            className={`questions-main-link ${
              activeSection === 'article1' ? 'active' : ''
            }`}
          >
            <a href="#article1">
              <p className="questions-main-link-text">Launching A Contest</p>
            </a>
          </div>

          {/* <div
            className="questions-main-link"
            onClick={(e) => e.currentTarget.classList.toggle('active')}
          > */}

          <div
            //onClick={(e) => e.currentTarget.classList.toggle('active')}
            className={`questions-main-link ${
              activeSection === 'article2' ? 'active' : ''
            }`}
          >
            <a href="#article2">
              <p className="questions-main-link-text">
                Buying From Marketplace
              </p>
            </a>
          </div>

          {/* <div
            className="questions-main-link"
            onClick={(e) => e.currentTarget.classList.toggle('active')}
          > */}

          <div
            //onClick={(e) => e.currentTarget.classList.toggle('active')}
            className={`questions-main-link ${
              activeSection === 'article3' ? 'active' : ''
            }`}
          >
            <a href="#article3">
              <p className="questions-main-link-text">Managed Contests</p>
            </a>
          </div>

          {/* <div
            className="questions-main-link"
            onClick={(e) => e.currentTarget.classList.toggle('active')}
          > */}
          <div
            // onClick={(e) => e.currentTarget.classList.toggle('active')}
            className={`questions-main-link ${
              activeSection === 'article4' ? 'active' : ''
            }`}
          >
            <a className="questions" href="#article4">
              <p className="questions-main-link-text">For Creatives</p>
            </a>
          </div>
        </nav>
      </section>

      {/*------------------------------------------ */}

      <section className="questions-paragraph">
        <h4 id="article1" className="questions-paragraph-title">
          Launching A Contest
        </h4>

        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle ">
            How long does it take to start receiving submissions?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text">
            For Naming contests, you will start receiving your submissions
            within few minutes of launching your contest. Since our creatives
            are located across the globe, you can expect to receive submissions
            24 X 7 throughout the duration of the brainstorming phase.
          </p>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            How long do Naming Contests last?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text">
            You can choose a duration from 1 day to 7 days. We recommend a
            duration of 3 Days or 5 Days. This allows for sufficient time for
            entry submission as well as brainstorming with creatives. If you
            take advantage of our validation services such as Audience Testing
            and Trademark Research, both will be an additional 4-7 days (3-5
            business days for Audience Testing and 1-2 business days for
            Trademark Research).
          </p>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            Where are the creatives located?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text">
            {' '}
            About 70% of our Creatives are located in the United States and
            other English speaking countries (i.e. United Kingdom, Canada, and
            Australia.). We utilize an advanced rating score algorithm to ensure
            that high quality creatives receive more opportunities to
            participate in our contests.
          </p>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            What if I do not like any submissions?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text border-text">
            While it is unusually rare that you will not like any names
            provided, we have a few options in case this problem occurs:
          </p>
          <ul className="questions-paragraph-list">
            <li className="questions-paragraph-li">
              {' '}
              If the contest ends and you have not yet found a name that you’d
              like to move forward with, we can provide complimentary extension
              of your contest as well as a complimentary consultation with one
              of our branding consultants (a $99 value).{' '}
            </li>
            <li className="questions-paragraph-li">
              {' '}
              By exploring our premium domain marketplace you can apply the
              contest award towards the purchase of any name listed for
              sale.{' '}
            </li>
            <li className="questions-paragraph-li">
              If you choose the Gold package or Platinum package and keep the
              contest as 'Not Guaranteed', you can request a partial refund if
              you choose not to move forward with any name from you project.
              (Please note that the refund is for the contest award). Here is a
              link to our
              <a
                className="paragraph-link"
                href="https://helpdesk.atom.com/en/articles/115621-refund-policy"
              >
                Refund Policy
              </a>{' '}
            </li>
          </ul>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            How much does it cost?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text">
            Our naming competitions start at $299, and our logo design
            competitions start at $299. Also, there are three additional contest
            level that each offer more features and benefits. See our{' '}
            <a className="paragraph-link" href="/pricing">
              Pricing Page
            </a>{' '}
            for details
          </p>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            I need both a Name and a Logo. Do you offer any discount for
            multiple contests?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text">
            Yes! We have many contest bundles - our most popular being our Name,
            Tagline, and Logo bundle. Bundles allow you to purchase multiple
            contests at one time and save as much as from $75 - $400. You can
            learn more about our bundle options on our
            <a className="paragraph-link" href="/pricing.php?bundle-id=4">
              Pricing Page
            </a>
            .
          </p>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            What if I want to keep my business idea private?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p
            className="questions-paragraph-text accordeon-text"
            onClick={(e) => e.currentTarget.classList.toggle('active')}
          >
            You can select a Non Disclosure Agreement (NDA) option at the time
            of launching your competition. This will ensure that only those
            contestants who agree to the NDA will be able to read your project
            brief and participate in the contest. The contest details will be
            kept private from other users, as well as search engines.
          </p>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            Can you serve customers outside the US?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text">
            Absolutely. Atom services organizations across the globe. Our
            customer come from many countries, such as the United States,
            Australia, Canada, Europe, India, and MENA. We've helped more than
            25,000 customer around the world.
          </p>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            Can I see any examples?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text border-text">
            Our creatives have submitted more than 6 Million names and thousands
            of logos on our platform. Here are some examples of Names, Taglines,
            and Logos that were submitted in recent contests.
          </p>
          <ul>
            <li className="questions-paragraph-li">
              <a className="paragraph-link" href="">
                Name Examples
              </a>
            </li>
            <li className="questions-paragraph-li">
              <a className="paragraph-link" href="">
                Tagline Examples
              </a>
            </li>
            <li className="questions-paragraph-li">
              <a className="paragraph-link" href="">
                Logo Examples
              </a>
            </li>
          </ul>
        </article>
      </section>

      <section className="questions-paragraph">
        <h4 id="article2" className="questions-paragraph-title">
          Buying From Marketplace
        </h4>

        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            What's included with a Domain Purchase?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p
            className="questions-paragraph-text accordeon-text"
            onClick={(e) => e.currentTarget.classList.toggle('active')}
          >
            When you purchase a domain from our premium domain marketplace, you
            will receive the exact match .com URL, a complimentary logo design
            (along with all source files), as well as a complimentary Trademark
            report and Audience Testing if you’re interested in validating your
            name.
          </p>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            How does the Domain transfer process work?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text">
            Once you purchase a Domain, our transfer specialists will reach out
            to you (typically on the same business day). In most cases we can
            transfer the domain to your preferred registrar (such as GoDaddy).
            Once we confirm the transfer details with you, the transfers are
            typically initiated to your account within 1 business day.
          </p>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            If I purchase a Domain on installments, can I start using it to
            setup my website?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text">
            We offer payment plans for many domains in our Marketplace. If you
            purchase a domain on a payment plan, we hold the domain in an Escrow
            account until it is fully paid off. However our team can assist you
            with making any changes to the domains (such as Nameserver changes),
            so that you can start using the domain right away after making your
            first installment payment.
          </p>
        </article>
      </section>

      <section className="questions-paragraph">
        <h4 id="article3" className="questions-paragraph-title">
          Managed Contests
        </h4>

        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            What are Managed Contests?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text">
            The 'Managed' option is a fully managed service by Atom Branding
            experts. It includes a formal brief preparation by Atom team and
            management of your contest. Managed Contests are a great fit for
            companies that are looking for an 'Agency' like experience and they
            do not want to manage the contest directly.
            <br />
            Our branding team has directly managed hundreds of branding projects
            and has learned several best practices that lead to successful
            project outcomes. Our team will apply all best practices towards the
            management of your branding project.
            <br />
            Learn more about our
            <a
              className="paragraph-link"
              href="https://www.atom.com/managed-contests"
            >
              Managed Contest Service
            </a>
          </p>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            What's a typical timeline for a Managed Contest?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text border-text">
            The overall process takes 12-13 days.
          </p>
          <ul>
            <li className="questions-paragraph-li">
              The Managed projects start with a project kick-off call with your
              Branding Consultant. You can schedule this call online immediately
              after making your payment.{' '}
            </li>
            <li className="questions-paragraph-li">
              After your kick-off call, the Branding consultant will write your
              project brief and send for your approval within 1 business day.
            </li>
            <li className="questions-paragraph-li">
              Upon your approval, the contest will go live. The branding
              consultant will help manage your project throughout the
              brainstorming phase (typically 5 days).{' '}
            </li>
            <li className="questions-paragraph-li">
              Upon the completion of brainstorming phase, the branding
              consultant will work with you to test the top 6 names from your
              Shortlist (3-5 Days). In addition, the branding consultant will
              coordinate the detailed Trademark screening (1-3 days)
            </li>
          </ul>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            How much do Managed Contests cost?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text border-text">
            We offer two levels of Managed Contests. Standard ($1499) and
            Enterprise ($2999). The Enterprise managed contest includes:{' '}
          </p>
          <ul>
            <li className="questions-paragraph-li">
              (1) a $500 award amount (instead of $300), which will attract our
              top Creatives and provide more options to choose from;{' '}
            </li>
            <li className="questions-paragraph-li">
              (2) we will ensure a senior member of our branding team is
              assigned to your project and the branding team will invest about
              3X more time in the day-to-day management of your project;
            </li>
            <li className="questions-paragraph-li">
              {' '}
              (3) you will receive more high-end trademark report and 5X more
              responses for your audience test.{' '}
            </li>
            <li className="questions-paragraph-li">
              Here is a link to our{' '}
              <a
                className="paragraph-link"
                href="https://www.atom.com/views/contests/create/managed_contests.php"
                target="_blank"
              >
                Pricing page{' '}
              </a>{' '}
              with a detailed comparison of the two packages.
            </li>
          </ul>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            Where are the Branding Consultants located?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text">
            All our branding consultants are based in in our Headquarters
            (Hoffman Estates, IL). Our branding consultants have many years of
            experience in managing hundreds of branding projects for companies
            ranging from early stage startups to Fortune 500 corporations.
          </p>
        </article>
      </section>

      <section className="questions-paragraph">
        <h4 id="article4" className="questions-paragraph-title">
          For Creatives
        </h4>

        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            Can anyone join your platform?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text">
            We are open to anyone to signup. However, we have an extensive '
            <a
              className="paragraph-link"
              href="https://helpdesk.atom.com/en/articles/91702-percentile-ranking-score"
              target="_blank"
            >
              Quality Scoring
            </a>
            process which ensures that high quality creatives have the ability
            to continue to participate in the platform. On the other hand, we
            limit the participation from those creatives who do not consistently
            receive high ratings.
          </p>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            Can I start participating immediately upon signing up?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text">
            When you initially signup, you are assigned few contests to assess
            your overall quality of submissions. Based upon the quality of your
            submissions, you will continue to be assigned additional contests.
            Once you have received enough high ratings on your submissions, your
            account will be upgraded to 'Full Access', so that you can begin
            participating in all open contests.
          </p>
        </article>
        <article
          className="questions-paragraph-point accordeon"
          onClick={(e) => e.currentTarget.classList.toggle('active')}
        >
          <h5 className="questions-paragraph-subtitle">
            How Do I Get Paid?{' '}
            <svg
              className="paragraph-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14C6.78333 14 6.60417 13.9292 6.4625 13.7875C6.32083 13.6458 6.25 13.4667 6.25 13.25V7.75H0.75C0.533333 7.75 0.354167 7.67917 0.2125 7.5375C0.0708334 7.39583 0 7.21667 0 7C0 6.78333 0.0708334 6.60417 0.2125 6.4625C0.354167 6.32083 0.533333 6.25 0.75 6.25H6.25V0.75C6.25 0.533333 6.32083 0.354167 6.4625 0.2125C6.60417 0.0708334 6.78333 0 7 0C7.21667 0 7.39583 0.0708334 7.5375 0.2125C7.67917 0.354167 7.75 0.533333 7.75 0.75V6.25H13.25C13.4667 6.25 13.6458 6.32083 13.7875 6.4625C13.9292 6.60417 14 6.78333 14 7C14 7.21667 13.9292 7.39583 13.7875 7.5375C13.6458 7.67917 13.4667 7.75 13.25 7.75H7.75V13.25C7.75 13.4667 7.67917 13.6458 7.5375 13.7875C7.39583 13.9292 7.21667 14 7 14Z"
                fill="#307DF6"
              />
            </svg>
          </h5>
          <p className="questions-paragraph-text">
            We handle creative payouts via Paypal or Payoneer. Depending upon
            your country of residence, we may require additional documentation
            to verify your identity as well as your Tax status.
          </p>
        </article>
      </section>
    </div>
  );
};

export default QuestionsSection;
