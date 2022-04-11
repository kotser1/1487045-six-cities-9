import { Route, Routes } from 'react-router-dom';

import Spinner from '../spinner/spinner';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import Page404 from '../../pages/page404/page404';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';

import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import { isCheckedAuth } from '../../utils';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import { getLoadedDataStatus } from '../../store/offers-data/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
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
              <Property />
            }
          />
        </Route>
        <Route
          path='*'
          element={<Page404 />}
        />
      </Routes>
    </HistoryRouter>

  );
}

export default App;
