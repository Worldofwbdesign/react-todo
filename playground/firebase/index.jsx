import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAFL7qUUy8iCSMaG3yENcJSs9sFguibEs4",
  authDomain: "roman-todo-app.firebaseapp.com",
  databaseURL: "https://roman-todo-app.firebaseio.com",
  projectId: "roman-todo-app",
  storageBucket: "roman-todo-app.appspot.com",
  messagingSenderId: "554466164182"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.1.0'
  },
  isRunning: true,
  user: {
    name: 'Roman',
    age: 28
  }
});

let todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('Todo is added', snapshot.key, snapshot.val());
})

let newTodosRef = todosRef.push({
  text: 'Walk with dog'
});

let newTodosRef2 = todosRef.push({
  text: 'Feed cat'
});
