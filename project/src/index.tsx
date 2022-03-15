import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import { mockOffers } from './mocks/offers';
import { mockReviews } from './mocks/reviews';

const Setting = {
  OFFERS_COUNT: 333,
  DISPLAYED_OFFERS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offersCount={Setting.OFFERS_COUNT}
      offers={mockOffers}
      reviews={mockReviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
