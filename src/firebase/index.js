import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAdRWa1KvEUtIf3oAPS9PeJ8kTSw3_xFqQ',
  authDomain: 'quizzapp-e60d2.firebaseapp.com',
  projectId: 'quizzapp-e60d2',
  storageBucket: 'quizzapp-e60d2.appspot.com',
  messagingSenderId: '318668382968',
  appId: '1:318668382968:web:60b88e49fad25ca033510d',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const singIn = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const logIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export function getCurrentUserToken() {
  if (!firebase.auth().currentUser) {
    return null;
  }

  return firebase.auth().currentUser.getIdToken();
}

export function logout() {
  return firebase.auth().signOut();
}

export { firebase };
