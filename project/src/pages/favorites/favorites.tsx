import { Link } from 'react-router-dom';
import cn from 'classnames';

import Header from '../../components/header/header';
import FavoritesList from '../../components/favorites-list/favorites-list';

import { useAppSelector } from '../../hooks/';
import { AppRoute } from '../../const';
import { getOffers } from '../../store/offers-data/selectors';

function Favorites(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const isEmpty = favoriteOffers.length === 0;

  return (
    <div className={cn('page', {'page--favorites-empty' : isEmpty})}>
      <Header />

      <main className={cn(
        'page__main',
        'page__main--favorites',
        {'page__main--favorites-empty': isEmpty})}
      >
        <div className="page__favorites-container container">
          <section className={cn('favorites', {'favorites--empty': isEmpty})}>
            {isEmpty
              ? (
                <>
                  <h1 className="visually-hidden">Favorites (empty)</h1>
                  <div className="favorites__status-wrapper">
                    <b className="favorites__status">Nothing yet saved.</b>
                    <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                  </div>
                </>)
              : (
                <>
                  <h1 className="favorites__title">Saved listing</h1>
                  <FavoritesList favoriteOffers={favoriteOffers}/>
                </>)}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
