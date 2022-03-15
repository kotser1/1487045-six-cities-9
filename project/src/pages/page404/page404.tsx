import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

import './page404.css';

function Page404() {
  return (
    <div className="page page--not-found">
      <Header />

      <main className="page__main page__main--not-found">
        <div className="not-found-container container">
          <section className="not-found">
            <h1 className="visually-hidden">Page not found.</h1>
            <div className='not-found__status-wrapper'>
              <b className="not-found__status">Error 404</b>
              <p className='not-found__status-description'>Page not found.</p><br />
              <Link to={AppRoute.Root}>Go back to <b>main page</b>.</Link>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default Page404;
