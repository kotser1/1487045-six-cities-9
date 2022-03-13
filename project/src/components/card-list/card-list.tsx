import { useState } from 'react';

import Card from '../card/card';
import { Offer } from '../../types/offer';

type CardListProps = {
  offers: Offer[];
};

function CardList({offers}: CardListProps): JSX.Element {
  const [, setActiveCard] = useState<number | null>(null);

  const handleCardHover = (id: number | null) => {
    setActiveCard(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => (
        <Card
          key={item.id}
          offer={item}
          onActiveCardChange={handleCardHover}
        />))}
    </div>
  );
}

export default CardList;
