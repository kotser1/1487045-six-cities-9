import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
