import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="usa-layout-docs">
      {/* Header */}
      <header className="usa-header usa-header--basic">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo">
              <em className="usa-logo__text">
                <a href="/" title="Home">
                  Next.js USWDS App
                </a>
              </em>
            </div>
            <button type="button" className="usa-menu-btn">
              Menu
            </button>
          </div>
          <nav className="usa-nav">
            <div className="usa-nav__inner">
              <button type="button" className="usa-nav__close">
                Close
              </button>
              <ul className="usa-nav__primary usa-accordion">
                <li className="usa-nav__primary-item">
                  <a href="/" className="usa-nav__link">
                    Home
                  </a>
                </li>
                <li className="usa-nav__primary-item">
                  <a href="/about" className="usa-nav__link">
                    About
                  </a>
                </li>
                <li className="usa-nav__primary-item">
                  <a href="/services" className="usa-nav__link">
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div className="usa-layout-docs__main desktop:grid-col-9 usa-prose">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            {/* Side Navigation */}
            <aside className="usa-layout-docs__sidenav desktop:grid-col-3">
              <nav>
                <ul className="usa-sidenav">
                  <li className="usa-sidenav__item">
                    <a href="/" className="usa-current">
                      Getting Started
                    </a>
                  </li>
                  <li className="usa-sidenav__item">
                    <a href="/components">Components</a>
                    <ul className="usa-sidenav__sublist">
                      <li className="usa-sidenav__item">
                        <a href="/components/buttons">Buttons</a>
                      </li>
                      <li className="usa-sidenav__item">
                        <a href="/components/forms">Forms</a>
                      </li>
                      <li className="usa-sidenav__item">
                        <a href="/components/cards">Cards</a>
                      </li>
                    </ul>
                  </li>
                  <li className="usa-sidenav__item">
                    <a href="/templates">Templates</a>
                  </li>
                  <li className="usa-sidenav__item">
                    <a href="/utilities">Utilities</a>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="desktop:grid-col-9">
              {children}
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="usa-footer usa-footer--slim">
        <div className="grid-container usa-footer__return-to-top">
          <a href="#">Return to top</a>
        </div>
        <div className="usa-footer__primary-section">
          <div className="grid-container">
            <div className="grid-row grid-gap">
              <div className="tablet:grid-col-8">
                <nav className="usa-footer__nav">
                  <ul className="grid-row grid-gap">
                    <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                      <a className="usa-footer__primary-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                      <a className="usa-footer__primary-link" href="/about">
                        About
                      </a>
                    </li>
                    <li className="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                      <a className="usa-footer__primary-link" href="/contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="usa-footer__secondary-section">
          <div className="grid-container">
            <div className="usa-footer__logo grid-row grid-gap-2">
              <div className="grid-col-auto">
                <p className="usa-footer__contact-info grid-col-auto">
                  Built with Next.js and USWDS
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}