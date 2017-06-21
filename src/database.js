import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD1W_bujrLv5GR3WAP9lh6K1x5JDliZENg',
  authDomain: 'nendohouse.firebaseapp.com',
  databaseURL: 'https://nendohouse.firebaseio.com',
  projectId: 'nendohouse',
  storageBucket: 'nendohouse.appspot.com',
  messagingSenderId: '1028604632366',
};
firebase.initializeApp(config);

const database = firebase.database();

export default database;
