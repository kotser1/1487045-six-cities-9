import {Route, BrowserRouter, Routes} from 'react-router-dom';

import MainPage from '../main-page/main-page';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import Page404 from '../page404/page404';
import PrivateRoute from '../private-route/private-route';

import { AppRoute, AuthorizationStatus } from '../../const';

type AppProps = {
  offersCount: number;
  displayedOffersCount: number;
}

function App({offersCount, displayedOffersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage offersCount={offersCount} displayedOffersCount={displayedOffersCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Property}
          element={<Property />}
        />
        <Route
          path='*'
          element={<Page404 />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
