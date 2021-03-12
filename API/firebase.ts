import * as firebase from 'firebase';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDcfdELZCaalOJtA2DM3PyudTHbflxpLnM',
  authDomain: 'joko-app-bb830.firebaseapp.com',
  projectId: 'joko-app-bb830',
  storageBucket: 'joko-app-bb830.appspot.com',
  messagingSenderId: '738017677572',
  appId: '1:738017677572:web:58f64cebf03996e1c6c051',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const dbh = firebase.firestore();

dbh.collection("cluster").doc("todos").set({
  todo: "test todo",
})