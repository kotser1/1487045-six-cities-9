import { useCallback, useState } from 'react';

import SortingMenu from '../../components/sorting-menu/sorting-menu';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';

import { useAppSelector } from '../../hooks/';
import { getSortedOffers } from '../../utils';
import { Offer, City } from '../../types/offer';

type MainContentProps = {
  currentCity: City;
  offersInCurrentCity: Offer[];
};

function MainContent({currentCity, offersInCurrentCity}: MainContentProps): JSX.Element {
  const currentSortType = useAppSelector(({APP}) => APP.sortType);

  const sortedOffers = getSortedOffers(currentSortType, offersInCurrentCity);

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardHover = useCallback((id: number | null) => {
    setActiveCard(id);
  }, []);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersInCurrentCity.length} places to stay in {currentCity.name}</b>
          <SortingMenu currentSortType={currentSortType} />
          <CardList offers={sortedOffers} onCardHover={handleCardHover} classType={'main'} />
        </section>
        <div className="cities__right-section">
          <Map className="cities__map" city={currentCity} selectedOfferId={activeCard} />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
