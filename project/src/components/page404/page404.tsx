function Page404() {
  return (
    <div className="page page--favorites-empty">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main
        style={{
          display: 'flex',
          flexGrow: '1',
        }}
      >
        <div className="container" style={{display: 'flex'}}>
          <section
            style={{
              width: '100%',
              padding: '0px 0px 93px 38px',
              borderBottom: '2px solid rgba(222,222,222,.5)',
            }}
          >
            <h1 className="visually-hidden">Page not found.</h1>
            <div
              style={{
                width: '420px',
                marginTop: '16.7vh',
                marginRight: 'auto',
                marginLeft: 'auto',
                paddingTop: '94px',
                textAlign: 'center',
                backgroundImage: 'url("../img/ico-no-results.svg")',
                backgroundSize: '60px 60px',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat'}}
            >
              <b style={{
                display: 'block',
                marginBottom: '5px',
                fontSize: '32px',
                lineHeight: '1.1875',
              }}
              >
                Error 404
              </b>
              <p>Page not found.</p><br />
              <a href="/">Go back to <b>main page</b>.</a>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Page404;
