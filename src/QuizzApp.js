import React, { useEffect, useState } from 'react';

import './QuizzApp.scss';

import { firebase } from './firebase';
import AuthContext from './context/AuthContext';
import { AppRouter } from './Router/AppRouter';
import constants from './utils/constants';

function QuizzApp() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribeFromAuth = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setTimeout(() => {
          fetch(`${constants.backendUrl}users/${user.uid}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + user.za,
            },
          })
            .then(response => response.json())
            .then(logedUser => {
              setCurrentUser({ user: logedUser.data, token: user.za });
              setIsLoading(false);
            });
        }, 1000);
      } else {
        setCurrentUser(null);
        setIsLoading(false);
      }
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isLoading, setIsLoading }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default QuizzApp;
