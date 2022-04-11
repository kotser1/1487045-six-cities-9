import { useRef, useState } from 'react';
import cn from 'classnames';

import { useAppDispatch } from '../../hooks';
import { changeSortType } from '../../store/app-data/app-data';
import { SortTypes } from '../../const';

type SortingMenuProps = {
  currentSortType: string;
};

function SortingMenu({currentSortType}: SortingMenuProps): JSX.Element {
  const list = useRef<HTMLUListElement | null>(null);
  const [openedMenu, setOpenedMenu] = useState(false);

  function handleMenuClick() {
    setOpenedMenu(!openedMenu);
  }

  const dispatch = useAppDispatch();

  const handleSortOptionClick = (option: string) => {
    dispatch(changeSortType(option));
    setOpenedMenu(!openedMenu);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleMenuClick}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        ref={list}
        className={cn('places__options', 'places__options--custom', {'places__options--opened' : openedMenu})}
      >
        {Object.values(SortTypes).map((item) => (
          <li
            key={item}
            className={cn('places__option', {'places__option--active': item === currentSortType})}
            tabIndex={0}
            onClick={() => handleSortOptionClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingMenu;
