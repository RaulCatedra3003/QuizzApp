import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { PublicRoute } from '../components/PublicRoute/PublicRoute';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

export const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(true);
    if (currentUser) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    setIsLoading(false);
  }, [currentUser]);

  return (
    <Router>
      <div>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <Switch>
            <PublicRoute isAuthenticated={isAuth} path='/login'>
              <LoginPage />
            </PublicRoute>
            <ProtectedRoute isAuthenticated={isAuth} path='/'>
              <HomePage />
            </ProtectedRoute>
          </Switch>
        )}
      </div>
    </Router>
  );
};
