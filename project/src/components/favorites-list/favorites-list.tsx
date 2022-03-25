import FavoriteLocation from '../favorite-location/favorite-location';
import { useAppSelector } from '../../hooks/';


function FavoritesList(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const cities = new Set(favoriteOffers.map((favOffer) => favOffer.city.name));

  return (
    <ul className="favorites__list">
      {Array.from(cities).map((city) => <FavoriteLocation key={city} city={city} favoriteOffers={favoriteOffers} />)}
    </ul>
  );
}

export default FavoritesList;
