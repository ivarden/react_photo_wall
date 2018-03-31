// import * as firebase from "firebase";
import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDUE9nE_SxWGy2b8kksW_Tukg8Si0ja7J8',
  authDomain: 'photowall-18632.firebaseapp.com',
  databaseURL: 'https://photowall-18632.firebaseio.com',
  projectId: 'photowall-18632',
  storageBucket: 'photowall-18632.appspot.com',
  messagingSenderId: '801016777050',
};

firebase.initializeApp(config);

export const database = firebase.database();
export default firebase;
