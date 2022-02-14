import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  OFFERS_COUNT: 333,
  DISPLAYED_OFFERS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={Setting.OFFERS_COUNT} displayedOffersCount={Setting.DISPLAYED_OFFERS_COUNT}/>
  </React.StrictMode>,
  document.getElementById('root'));
