import { useState } from 'react';
import cn from 'classnames';
import { useAppSelector, useAppDispatch } from '../../hooks/';
import { changeCity } from '../../store/action';

import Header from '../../components/header/header';
import SortingMenu from '../../components/sorting-menu/sorting-menu';
import EmptyMainPage from '../../components/empty-main-page/empty-main-page';
import CitiesList from '../../components/cities-list/cities-list';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';

import { City } from '../../types/offer';
import { getOffersInCurrentCity, getSortedOffers } from '../../utils';

function MainPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const currentSortType = useAppSelector((state) => state.sortType);

  const dispatch = useAppDispatch();

  const handleCityClick = (city: City) => {
    dispatch(changeCity(city));
  };

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardHover = (id: number | null) => {
    setActiveCard(id);
  };

  const offersInCurrentCity = getOffersInCurrentCity(offers, currentCity.name);
  const sortedOffers = getSortedOffers(currentSortType, offersInCurrentCity);
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
          <CitiesList currentCity={currentCity} onCityClick={handleCityClick} />
        </div>
        <div className="cities">
          <div className={cn('cities__places-container', 'container', {
            'cities__places-container--empty': isEmpty,
          })}
          >
            {isEmpty
              ? <EmptyMainPage cityName={currentCity.name}/>
              : (
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersInCurrentCity.length} places to stay in {currentCity.name}</b>
                  <SortingMenu currentSortType={currentSortType} />
                  <CardList offers={sortedOffers} onCardHover={handleCardHover} classType={'main'} />
                </section>
              )}
            <div className="cities__right-section">
              {isEmpty
                ? ''
                : <Map className="cities__map" city={currentCity} selectedOfferId={activeCard} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
