import React, { useEffect, useState } from 'react';

import './QuizzApp.scss';

import { firebase } from './firebase';
import AuthContext from './context/AuthContext';
import { AppRouter } from './Router/AppRouter';
import constants from './utils/constants';

function QuizzApp() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        fetch(`${constants.backendUrl}users/${user.uid}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + user.za,
          },
        })
          .then(response => response.json())
          .then(logedUser => {
            setCurrentUser(logedUser.data);
          });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default QuizzApp;
