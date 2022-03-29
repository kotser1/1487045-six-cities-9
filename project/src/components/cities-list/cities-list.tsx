import cn from 'classnames';
import { CITIES } from '../../const';
import { City } from '../../types/offer';

type CitiesListProps = {
  currentCity: City;
  onCityClick: (city: City) => void;
};

function CitiesList({currentCity, onCityClick}: CitiesListProps): JSX.Element {
  const locations = Object.values(CITIES);

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
              onClick={() => onCityClick(item)}
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
