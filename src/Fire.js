 import firebase from 'firebase';


  var config = {
    apiKey: "AIzaSyBhVa2GpYDup-qSElD3lBvQ8aolSgTLDNY",
    authDomain: "collab-editor4.firebaseapp.com",
    databaseURL: "https://collab-editor4.firebaseio.com",
    projectId: "collab-editor4",
    storageBucket: "collab-editor4.appspot.com",
    messagingSenderId: "1076693035984"
  };

  var fire = firebase.initializeApp(config);
  export default fire;

