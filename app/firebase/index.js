import firebase from 'firebase';


try {
  var config = {
    apiKey: "AIzaSyAFL7qUUy8iCSMaG3yENcJSs9sFguibEs4",
    authDomain: "roman-todo-app.firebaseapp.com",
    databaseURL: "https://roman-todo-app.firebaseio.com",
    projectId: "roman-todo-app",
    storageBucket: "roman-todo-app.appspot.com",
    messagingSenderId: "554466164182"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
} catch (e) {
  console.log('Something goes wrong', e);
}

export let firebaseRef = firebase.database().ref();

export default firebase;
