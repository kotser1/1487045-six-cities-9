import { memo } from 'react';

import Card from '../card/card';
import { Offer } from '../../types/offer';
import { CARD_CLASSNAMES } from '../../const';

type CardListProps = {
  offers: Offer[];
  classType: string;
  onCardHover?: (id: number | null) => void;
};

function CardList({offers, classType, onCardHover}: CardListProps): JSX.Element {
  return (
    <div className={CARD_CLASSNAMES[classType].list}>
      {offers.map((item) => (
        <Card
          key={item.id}
          offer={item}
          onActiveCardChange={onCardHover}
          classType={classType}
        />))}
    </div>
  );
}

export default memo(CardList);
