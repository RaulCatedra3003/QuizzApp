import React, { useEffect, useState } from 'react';

import { firebase } from './firebase';
import AuthContext from './context/AuthContext';
import { AppRouter } from './Router/AppRouter';

function QuizzApp() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUser({
          token: user.za,
          uid: user.uid,
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
