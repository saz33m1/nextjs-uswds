export default function Home() {
  return (
    <div>
      <a className="usa-skipnav" href="#main-content">Skip to main content</a>
      
      {/* USA Banner */}
      <section
        className="usa-banner"
        aria-label="Official website of the United States government"
      >
        <div className="usa-accordion">
          <header className="usa-banner__header">
            <div className="usa-banner__inner">
              <div className="grid-col-auto">
                <img
                  aria-hidden="true"
                  className="usa-banner__header-flag"
                  src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/us_flag_small.png"
                  alt=""
                />
              </div>
              <div className="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
                <p className="usa-banner__header-text">
                  An official website of the United States government
                </p>
                <p className="usa-banner__header-action">Here's how you know</p>
              </div>
              <button
                type="button"
                className="usa-accordion__button usa-banner__button"
                aria-expanded="false"
                aria-controls="gov-banner-default"
              >
                <span className="usa-banner__button-text">Here's how you know</span>
              </button>
            </div>
          </header>
          <div
            className="usa-banner__content usa-accordion__content"
            id="gov-banner-default"
          >
            <div className="grid-row grid-gap-lg">
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/icon-dot-gov.svg"
                  role="img"
                  alt=""
                  aria-hidden="true"
                />
                <div className="usa-media-block__body">
                  <p>
                    <strong>Official websites use .gov</strong><br />A{' '}
                    <strong>.gov</strong> website belongs to an official government
                    organization in the United States.
                  </p>
                </div>
              </div>
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img
                  className="usa-banner__icon usa-media-block__img"
                  src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/icon-https.svg"
                  role="img"
                  alt=""
                  aria-hidden="true"
                />
                <div className="usa-media-block__body">
                  <p>
                    <strong>Secure .gov websites use HTTPS</strong><br />A{' '}
                    <strong>lock</strong> ({' '}
                    <span className="icon-lock">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="64"
                        viewBox="0 0 52 64"
                        className="usa-banner__lock-image"
                        role="img"
                        aria-labelledby="banner-lock-description"
                        focusable="false"
                      >
                        <title id="banner-lock-title">Lock</title>
                        <desc id="banner-lock-description">
                          Locked padlock icon
                        </desc>
                        <path
                          fill="#000000"
                          fillRule="evenodd"
                          d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                        />
                      </svg>{' '}
                    </span>
                    ) or <strong>https://</strong> means you've safely connected to
                    the .gov website. Share sensitive information only on official,
                    secure websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="usa-overlay"></div>
      
      {/* Header */}
      <header className="usa-header usa-header--basic">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo">
              <em className="usa-logo__text">
                <a href="/" title="Next.js USWDS App">Next.js USWDS App</a>
              </em>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section className="usa-hero" aria-label="Introduction">
          <div className="grid-container">
            <div className="usa-hero__callout">
              <h1 className="usa-hero__heading">
                <span className="usa-hero__heading--alt">Hero callout:</span>Bring
                attention to a project priority
              </h1>
              <p>
                Support the callout with some short explanatory text. You don't need
                more than a couple of sentences.
              </p>
              <a className="usa-button" href="">Call to action</a>
            </div>
          </div>
        </section>
        
        {/* Tagline Section */}
        <section className="grid-container usa-section">
          <div className="grid-row grid-gap">
            <div className="tablet:grid-col-4">
              <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
                A tagline highlights your approach
              </h2>
            </div>
            <div className="tablet:grid-col-8 usa-prose">
              <p>
                The tagline should inspire confidence and interest, focusing on the
                value that your overall approach offers to your audience. Use a
                heading typeface and keep your tagline to just a few words, and
                don't confuse or mystify.
              </p>
              <p>
                Use the right side of the grid to explain the tagline a bit more.
                What are your goals? How do you do your work? Write in the present
                tense, and stay brief here. People who are interested can find
                details on internal pages.
              </p>
            </div>
          </div>
        </section>
        
        {/* Graphic List Section */}
        <section className="usa-graphic-list usa-section usa-section--dark">
          <div className="grid-container">
            <div className="usa-graphic-list__row grid-row grid-gap">
              <div className="usa-media-block tablet:grid-col">
                <img
                  className="usa-media-block__img"
                  src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/circle-124.png"
                  alt="Alt text"
                />
                <div className="usa-media-block__body">
                  <h2 className="usa-graphic-list__heading">
                    Graphic headings can vary.
                  </h2>
                  <p>
                    Graphic headings can be used a few different ways, depending on
                    what your landing page is for. Highlight your values, specific
                    program areas, or results.
                  </p>
                </div>
              </div>
              <div className="usa-media-block tablet:grid-col">
                <img
                  className="usa-media-block__img"
                  src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/circle-124.png"
                  alt="Alt text"
                />
                <div className="usa-media-block__body">
                  <h2 className="usa-graphic-list__heading">
                    Stick to 6 or fewer words.
                  </h2>
                  <p>
                    Keep body text to about 30 words. They can be shorter, but try
                    to be somewhat balanced across all four. It creates a clean
                    appearance with good spacing.
                  </p>
                </div>
              </div>
            </div>
            <div className="usa-graphic-list__row grid-row grid-gap">
              <div className="usa-media-block tablet:grid-col">
                <img
                  className="usa-media-block__img"
                  src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/circle-124.png"
                  alt="Alt text"
                />
                <div className="usa-media-block__body">
                  <h2 className="usa-graphic-list__heading">
                    Never highlight anything without a goal.
                  </h2>
                  <p>
                    For anything you want to highlight here, understand what your
                    users know now, and what activity or impression you want from
                    them after they see it.
                  </p>
                </div>
              </div>
              <div className="usa-media-block tablet:grid-col">
                <img
                  className="usa-media-block__img"
                  src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/circle-124.png"
                  alt="Alt text"
                />
                <div className="usa-media-block__body">
                  <h2 className="usa-graphic-list__heading">Could also have 2 or 6.</h2>
                  <p>
                    In addition to your goal, find out your users' goals. What do
                    they want to know or do that supports your mission? Use these
                    headings to show those.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section id="test-section-id" className="usa-section">
          <div className="grid-container">
            <h2 className="font-heading-xl margin-y-0">Section heading</h2>
            <p className="usa-intro">
              Everything up to this point should help people understand your agency
              or project: who you are, your goal or mission, and how you approach
              it. Use this section to encourage them to act. Describe why they
              should get in touch here, and use an active verb on the button below.
              "Get in touch," "Learn more," and so on.
            </p>
            <a className="usa-button usa-button--big" href="">Call to action</a>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="usa-footer">
        <div className="grid-container usa-footer__return-to-top">
          <a href="#">Return to top</a>
        </div>
        <div className="usa-footer__primary-section">
          <nav className="usa-footer__nav" aria-label="Footer navigation">
            <ul className="grid-row grid-gap">
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <a className="usa-footer__primary-link" href="javascript:void(0);">
                  Primary link
                </a>
              </li>
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <a className="usa-footer__primary-link" href="javascript:void(0);">
                  Primary link
                </a>
              </li>
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <a className="usa-footer__primary-link" href="javascript:void(0);">
                  Primary link
                </a>
              </li>
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <a className="usa-footer__primary-link" href="javascript:void(0);">
                  Primary link
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="usa-footer__secondary-section">
          <div className="grid-container">
            <div className="grid-row grid-gap">
              <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
                <div className="mobile-lg:grid-col-auto">
                  <img
                    className="usa-footer__logo-img"
                    src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/logo-img.png"
                    alt=""
                  />
                </div>
                <div className="mobile-lg:grid-col-auto">
                  <p className="usa-footer__logo-heading">Next.js USWDS App</p>
                </div>
              </div>
              <div className="usa-footer__contact-links mobile-lg:grid-col-6">
                <div className="usa-footer__social-links grid-row grid-gap-1">
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href="javascript:void(0);">
                      <img
                        className="usa-social-link__icon"
                        src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/usa-icons/facebook.svg"
                        alt="Facebook"
                      />
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href="javascript:void(0);">
                      <img
                        className="usa-social-link__icon"
                        src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/usa-icons/twitter.svg"
                        alt="Twitter"
                      />
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href="javascript:void(0);">
                      <img
                        className="usa-social-link__icon"
                        src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/usa-icons/youtube.svg"
                        alt="YouTube"
                      />
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href="javascript:void(0);">
                      <img
                        className="usa-social-link__icon"
                        src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/usa-icons/instagram.svg"
                        alt="Instagram"
                      />
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href="javascript:void(0);">
                      <img
                        className="usa-social-link__icon"
                        src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/usa-icons/rss_feed.svg"
                        alt="RSS"
                      />
                    </a>
                  </div>
                </div>
                <p className="usa-footer__contact-heading">Agency Contact Center</p>
                <address className="usa-footer__address">
                  <div className="usa-footer__contact-info grid-row grid-gap">
                    <div className="grid-col-auto">
                      <a href="tel:1-800-555-5555">(800) 555-GOVT</a>
                    </div>
                    <div className="grid-col-auto">
                      <a href="mailto:info@agency.gov">info@agency.gov</a>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* USA Identifier */}
      <div className="usa-identifier">
        <section
          className="usa-identifier__section usa-identifier__section--masthead"
          aria-label="Agency identifier"
        >
          <div className="usa-identifier__container">
            <div className="usa-identifier__logos">
              <a href="javascript:void(0)" className="usa-identifier__logo">
                <img
                  className="usa-identifier__logo-img"
                  src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.13.0/dist/img/circle-gray-20.svg"
                  alt="Parent agency logo"
                  role="img"
                />
              </a>
            </div>
            <section
              className="usa-identifier__identity"
              aria-label="Agency description"
            >
              <p className="usa-identifier__identity-domain">domain.gov</p>
              <p className="usa-identifier__identity-disclaimer">
                <span aria-hidden="true">An </span>official website of the{' '}
                <a href="">Parent agency</a>
              </p>
            </section>
          </div>
        </section>
        <nav
          className="usa-identifier__section usa-identifier__section--required-links"
          aria-label="Important links"
        >
          <div className="usa-identifier__container">
            <ul className="usa-identifier__required-links-list">
              <li className="usa-identifier__required-links-item">
                <a
                  href="javascript:void(0)"
                  className="usa-identifier__required-link usa-link"
                >
                  About Parent shortname
                </a>
              </li>
              <li className="usa-identifier__required-links-item">
                <a href="" className="usa-identifier__required-link usa-link">
                  Accessibility support
                </a>
              </li>
              <li className="usa-identifier__required-links-item">
                <a href="" className="usa-identifier__required-link usa-link">
                  FOIA requests
                </a>
              </li>
              <li className="usa-identifier__required-links-item">
                <a href="" className="usa-identifier__required-link usa-link">
                  No FEAR Act data
                </a>
              </li>
              <li className="usa-identifier__required-links-item">
                <a href="" className="usa-identifier__required-link usa-link">
                  Office of the Inspector General
                </a>
              </li>
              <li className="usa-identifier__required-links-item">
                <a href="" className="usa-identifier__required-link usa-link">
                  Performance reports
                </a>
              </li>
              <li className="usa-identifier__required-links-item">
                <a href="" className="usa-identifier__required-link usa-link">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section
          className="usa-identifier__section usa-identifier__section--usagov"
          aria-label="U.S. government information and services"
        >
          <div className="usa-identifier__container">
            <div className="usa-identifier__usagov-description">
              Looking for U.S. government information and services?
            </div>
            <a href="https://www.usa.gov/" className="usa-link">Visit USA.gov</a>
          </div>
        </section>
      </div>
    </div>
  );
}
