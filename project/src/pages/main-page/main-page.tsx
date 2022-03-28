import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/';
import { changeCity } from '../../store/action';

import Header from '../../components/header/header';
import EmptyMainPage from '../../components/empty-main-page/empty-main-page';
import CitiesList from '../../components/cities-list/cities-list';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';

import { City } from '../../types/offer';
import { getOffersInCurrentCity } from '../../utils';

function MainPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);

  const dispatch = useAppDispatch();

  const handleCityClick = (city: City) => {
    dispatch(changeCity(city));
  };

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardHover = (id: number | null) => {
    setActiveCard(id);
  };

  const offersInCurrentCity = getOffersInCurrentCity(offers, currentCity.name);
  const isEmpty = offersInCurrentCity.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`
        page__main
        page__main--index
        ${isEmpty ? 'page__main--index-empty' : ''}`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList currentCity={currentCity} onCityClick={handleCityClick} />
        </div>
        <div className="cities">
          <div className={`
            cities__places-container
            container
            ${isEmpty ? 'cities__places-container--empty' : ''}`}
          >
            {isEmpty
              ? <EmptyMainPage cityName={currentCity.name}/>
              : (
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersInCurrentCity.length} places to stay in {currentCity.name}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                      Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"></use>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                  </form>
                  <CardList offers={offersInCurrentCity} onCardHover={handleCardHover} classType={'main'} />
                </section>
              )}
            <div className="cities__right-section">
              {isEmpty
                ? ''
                : <Map className="cities__map" city={currentCity} offers={offersInCurrentCity} selectedOfferId={activeCard} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
