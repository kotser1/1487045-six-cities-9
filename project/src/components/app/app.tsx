import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Spinner from '../spinner/spinner';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import Page404 from '../../pages/page404/page404';
import PrivateRoute from '../private-route/private-route';

import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import { Review } from '../../types/review';
import { isCheckedAuth } from '../../utils';

type AppProps = {
  reviews: Review[];
}

function App({reviews}: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={(
            <MainPage />
          )}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={(
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          )}
        />
        <Route path={AppRoute.Property}>
          <Route
            path={AppRoute.PropertyId}
            element={
              <Property
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
