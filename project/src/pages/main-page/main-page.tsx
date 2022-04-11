import cn from 'classnames';

import Header from '../../components/header/header';
import MainContent from '../../components/main-content/main-content';
import EmptyMainPage from '../../components/empty-main-page/empty-main-page';
import CitiesList from '../../components/cities-list/cities-list';

import { useAppSelector } from '../../hooks/';
import { getOffersInCurrentCity } from '../../utils';

function MainPage(): JSX.Element {
  const offers = useAppSelector(({DATA}) => DATA.offers);
  const currentCity = useAppSelector(({APP}) => APP.city);

  const offersInCurrentCity = getOffersInCurrentCity(offers, currentCity.name);
  const isEmpty = offersInCurrentCity.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={cn('page__main', 'page__main--index', {
        'page__main--index-empty': isEmpty,
      })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList currentCity={currentCity} />
        </div>
        {isEmpty ? <EmptyMainPage /> : <MainContent currentCity={currentCity} offersInCurrentCity={offersInCurrentCity} />}
      </main>
    </div>
  );
}

export default MainPage;
