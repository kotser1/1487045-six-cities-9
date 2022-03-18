import {Route, BrowserRouter, Routes} from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import Page404 from '../../pages/page404/page404';
import PrivateRoute from '../private-route/private-route';

import { AppRoute, AuthorizationStatus } from '../../const';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

type AppProps = {
  offers: Offer[];
  reviews: Review[];
}

function App({offers, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={(
            <MainPage
              offers={offers}
            />
          )}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={(
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers} />
            </PrivateRoute>
          )}
        />
        <Route path={AppRoute.Property}>
          <Route
            path={AppRoute.PropertyId}
            element={
              <Property
                offers={offers}
                reviews={reviews}
              />
            }
          />
        </Route>
        <Route
          path='*'
          element={<Page404 />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
