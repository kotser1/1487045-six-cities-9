import Card from '../card/card';
import { Offer } from '../../types/offer';

type CardListProps = {
  offers: Offer[];
};

function CardList({offers}: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => <Card key={item.id} offer={item} />)}
    </div>
  );
}

export default CardList;
