import { Offer } from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoriteLocationProps = {
  city: string;
  favoriteOffers: Offer[];
}

function FavoriteLocation({city, favoriteOffers}: FavoriteLocationProps): JSX.Element {
  const cityOffers = favoriteOffers.filter((item) => item.city.name === city);

  return (
    <li key={city} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cityOffers.map((item) => (
          <FavoriteCard
            key={item.id}
            offer={item}
          />))}
      </div>
    </li>
  );
}

export default FavoriteLocation;
