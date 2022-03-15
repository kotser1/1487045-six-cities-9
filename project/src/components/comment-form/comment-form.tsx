import { ChangeEvent, useState } from 'react';
import { RATES } from '../../const';

function CommentForm(): JSX.Element {
  const [, setRatingData] = useState('');
  const [commentData, setCommentData] = useState('');

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRatingData(e.target.value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentData(e.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATES.map((rate) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={rate.value}
              id={`${rate.value}-stars`}
              type="radio"
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${rate.value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={rate.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={commentData}
        onChange={handleCommentChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
