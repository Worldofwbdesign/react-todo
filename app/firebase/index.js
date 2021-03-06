import firebase from 'firebase';


try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.API_KEY,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  // Initialize Firebase
  firebase.initializeApp(config);
} catch (e) {
  console.log('Something goes wrong', e);
}

export const githubProvider = new firebase.auth.GithubAuthProvider();
export let firebaseRef = firebase.database().ref();
export default firebase;
