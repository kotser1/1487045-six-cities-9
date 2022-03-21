import { useParams } from 'react-router-dom';

import Header from '../../components/header/header';
import PremiumSticker from '../../components/premium-sticker/premium-sticker';
import CommentsList from '../../components/comments-list/comments-list';
import CommentForm from '../../components/comment-form/comment-form';
import Map from '../../components/map/map';
import NearPlaces from '../../components/near-places/near-places';

import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { getOffersInCurrentCity } from '../../utils';


type PropertyProps = {
  offers: Offer[];
  reviews: Review[];
};


function Property({offers, reviews}: PropertyProps): JSX.Element {
  const params = useParams();
  const currentId = Number(params.id);
  const currentOffer = offers.filter((item) => item.id === currentId)[0];

  const {
    title,
    images,
    isPremium,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    city,
  } = currentOffer;

  const offersInCurrentCity = getOffersInCurrentCity(offers, city.name);
  const nearOffers = offersInCurrentCity.filter((item) => item.id !== currentId);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img
                    className="property__image"
                    src={image}
                    alt={title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <PremiumSticker className='property__mark' />}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type[0].toUpperCase() + type.slice(1)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} {maxAdults === 1 ? 'adult' : 'adults'}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item) => (
                    <li key={item} className="property__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={`
                      property__avatar-wrapper
                      user__avatar-wrapper
                      ${host.isPro && 'property__avatar-wrapper--pro'}`}
                  >
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <CommentsList reviews={reviews}/>
                <CommentForm />
              </section>
            </div>
          </div>
          <Map className="property__map" city={city} offers={offersInCurrentCity} selectedOfferId={currentId}/>
        </section>
        <div className="container">
          <NearPlaces offers={nearOffers} />
        </div>
      </main>
    </div>
  );
}

export default Property;
