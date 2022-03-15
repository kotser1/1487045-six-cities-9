import FavoriteLocation from '../favorite-location/favorite-location';
import { Offer } from '../../types/offer';

type FavoritesListProps = {
  offers: Offer[];
};

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const cities = new Set(favoriteOffers.map((favOffer) => favOffer.city.name));

  return (
    <ul className="favorites__list">
      {Array.from(cities).map((city) => <FavoriteLocation key={city} city={city} favoriteOffers={favoriteOffers} />)}
    </ul>
  );
}

export default FavoritesList;
