import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBHf24nPLjy1wrRikVuWnKpI_nM2gNgB38',
  authDomain: 'crwn-db-56b36.firebaseapp.com',
  databaseURL: 'https://crwn-db-56b36.firebaseio.com',
  projectId: 'crwn-db-56b36',
  storageBucket: '',
  messagingSenderId: '121023190415',
  appId: '1:121023190415:web:820e89c030ea5d3f'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
