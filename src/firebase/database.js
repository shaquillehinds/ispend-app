import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8gsh-72Qt6HqPHKAMcdS23OVgrXWzTmU",
  authDomain: "ispend-e0a33.firebaseapp.com",
  databaseURL: "https://ispend-e0a33.firebaseio.com",
  projectId: "ispend-e0a33",
  storageBucket: "ispend-e0a33.appspot.com",
  messagingSenderId: "454386314617",
  appId: "1:454386314617:web:9c38c022da5641f4fa53a8",
};

firebase.initializeApp(firebaseConfig);
export default firebase.database();
