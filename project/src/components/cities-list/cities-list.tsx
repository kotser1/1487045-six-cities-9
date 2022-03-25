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
              className={`locations__item-link
                tabs__item
                ${item.name === currentCity.name && 'tabs__item--active'}
              `}
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
