import cn from 'classnames';

import { useAppDispatch } from '../../hooks/';
import { changeCity } from '../../store/action';
import { City } from '../../types/offer';
import { CITIES } from '../../const';

type CitiesListProps = {
  currentCity: City;
};

function CitiesList({currentCity}: CitiesListProps): JSX.Element {
  const locations = Object.values(CITIES);

  const dispatch = useAppDispatch();

  const handleCityClick = (city: City) => {
    dispatch(changeCity(city));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((item) => (
          <li key={item.name} className="locations__item">
            <a
              className={cn('locations__item-link', 'tabs__item', {
                'tabs__item--active': item.name === currentCity.name,
              })}
              href="/#"
              onClick={() => handleCityClick(item)}
            >
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;
