import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/app';

import { mockOffers } from './mocks/offers';
import { mockReviews } from './mocks/reviews';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={mockOffers}
        reviews={mockReviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
