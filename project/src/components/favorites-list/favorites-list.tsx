import FavoriteLocation from '../favorite-location/favorite-location';

import { Offer } from '../../types/offer';

type FavoritesListProps = {
  favoriteOffers: Offer[];
};

function FavoritesList({favoriteOffers} : FavoritesListProps): JSX.Element {
  const cities = new Set(favoriteOffers.map((favOffer) => favOffer.city.name));

  return (
    <ul className="favorites__list">
      {Array.from(cities).map((city) => <FavoriteLocation key={city} city={city} favoriteOffers={favoriteOffers} />)}
    </ul>
  );
}

export default FavoritesList;
