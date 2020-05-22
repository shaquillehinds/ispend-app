import * as firebase from "firebase";
import { expenses } from "../tests/fixtures/expenses";

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

const database = firebase.database();

// child_removed
database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((child) => {
//       expenses.push({
//         id: child.key,
//         ...child.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((child) => {
//     expenses.push({
//       id: child.key,
//       ...child.val(),
//     });
//   });
//   console.log(expenses);
// });

// expenses.forEach((expense) => delete expense.id);
// expenses.forEach((expense) => database.ref("expenses").push(expense));
// database.ref("expenses").push(expenses[2]);

// database.ref("notes/-M7m1e5DQWTn_iySyiwE").remove();

// database.ref("notes").push({
//   title: "Course",
//   body: "React",
// });

// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => {
//   database.ref("job/title").set("Senior Software Developer");
// }, 4000);

// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => console.log(e));

// database
//   .ref()
//   .set({
//     name: "Reizo",
//     age: 25,
//     stressLevel: 3,
//     job: {
//       title: "Web Developer",
//       company: "Google",
//     },
//     location: {
//       city: "Bridgetown",
//       country: "Barbados",
//     },
//   })
//   .then(() => console.log("Set Complete"))
//   .catch((e) => console.log("This failed", e));

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
//   "location/country": "USA",
// }).then(() => console.log("Update Complete"))
// .catch((e) => console.log("This failed", e));

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => console.log("isSingle Removed"))
//   .catch((e) => console.log("Error: " + e));
