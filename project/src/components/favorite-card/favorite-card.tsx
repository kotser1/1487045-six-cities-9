import { Link } from 'react-router-dom';

import PremiumSticker from '../premium-sticker/premium-sticker';
import Bookmark from '../bookmark/bookmark';

import { Offer } from '../../types/offer';
import { AppRoute } from '../../const';

type FavoriteCardProps = {
  offer: Offer;
};

function FavoriteCard({offer}: FavoriteCardProps): JSX.Element {
  const {isPremium, previewImage, title, price, rating, type, id, isFavorite} = offer;
  return (
    <article className="favorites__card place-card">
      {isPremium && (<PremiumSticker className='place-card__mark'/>)}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Property}/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt={title} />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark btnInfo='place-card' isFavorite={isFavorite}/>
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

export default FavoriteCard;
