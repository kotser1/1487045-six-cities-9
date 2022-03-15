import { Link } from 'react-router-dom';

import PremiumSticker from '../premium-sticker/premium-sticker';

import { Offer } from '../../types/offer';
import { AppRoute } from '../../const';

type CardProps = {
  offer: Offer;
  onActiveCardChange: (id:number | null) => void;
};

function Card({offer, onActiveCardChange}: CardProps): JSX.Element {
  const {isPremium, previewImage, title, price, rating, type, id} = offer;
  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => onActiveCardChange(id)}
      onMouseLeave={() => onActiveCardChange(null)}
    >
      {isPremium && (<PremiumSticker className='place-card__mark'/>)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Property}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Property}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type[0].toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default Card;
