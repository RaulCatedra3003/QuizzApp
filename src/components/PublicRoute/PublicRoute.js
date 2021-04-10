import { Redirect, Route } from 'react-router';

export const PublicRoute = ({ isAuthenticated, children, ...props }) => {
  return isAuthenticated ? (
    <Redirect to='/' />
  ) : (
    <Route {...props}>{children}</Route>
  );
};
