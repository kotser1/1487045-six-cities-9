import CardList from '../card-list/card-list';

import { Offer } from '../../types/offer';

type NearPlacesProps = {
  offers: Offer[];
};

function NearPlaces({offers}: NearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <CardList offers={offers} classType={'nearPlaces'} />
    </section>
  );
}

export default NearPlaces;
