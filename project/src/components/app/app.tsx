import {Route, BrowserRouter, Routes} from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import Page404 from '../../pages/page404/page404';
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
          element={(
            <MainPage
              offersCount={offersCount}
              displayedOffersCount={displayedOffersCount}
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          )}
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
