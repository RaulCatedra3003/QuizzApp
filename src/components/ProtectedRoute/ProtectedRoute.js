import { Redirect, Route } from 'react-router';

export const ProtectedRoute = ({ isAuthenticated, children, ...props }) => {
  return isAuthenticated ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect to='/login' />
  );
};
