import { DEFAULT_BOOKMARK_SIZES, PROPERTY_BOOKMARK_SIZES } from '../../const';

type BookmarkProps = {
  btnInfo: string;
  isFavorite: boolean;
};

function Bookmark({btnInfo, isFavorite}: BookmarkProps): JSX.Element {
  const activeClass = `${btnInfo}__bookmark-button--active`;

  const btnWidth = (btnInfo === 'property') ? PROPERTY_BOOKMARK_SIZES.width : DEFAULT_BOOKMARK_SIZES.width;
  const btnHeight = (btnInfo === 'property') ? PROPERTY_BOOKMARK_SIZES.height : DEFAULT_BOOKMARK_SIZES.height;

  return (
    <button className={`${btnInfo}__bookmark-button button ${isFavorite && activeClass}`} type="button">
      <svg className={`${btnInfo}__bookmark-icon`} width={btnWidth} height={btnHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default Bookmark;
