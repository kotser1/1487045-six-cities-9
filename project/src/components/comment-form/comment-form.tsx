import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { RATES, MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH } from '../../const';

function CommentForm(): JSX.Element {
  const [ratingData, setRatingData] = useState<number | null>(null);
  const [commentData, setCommentData] = useState('');

  const params = useParams();
  const currentId = Number(params.id);

  const dispatch = useAppDispatch();

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRatingData(Number(e.target.value));
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentData(e.target.value);
  };

  const isDisabled = () => (ratingData === null || commentData.length <= MIN_COMMENT_LENGTH || commentData.length > MAX_COMMENT_LENGTH);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sendReviewAction({
      rating: ratingData,
      comment: commentData,
      id: currentId,
    }));
    setRatingData(null);
    setCommentData('');
  };


  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATES.map((rate) => (
          <Fragment key={rate.value}>
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
          </Fragment>
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
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled()} >Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
