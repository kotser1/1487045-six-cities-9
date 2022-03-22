import Comment from '../comment/comment';
import { Review } from '../../types/review';

type CommentsListProps = {
  reviews: Review[];
};

function CommentsList({reviews}: CommentsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Comment key={review.id} review={review} />)}
    </ul>
  );

}

export default CommentsList;
