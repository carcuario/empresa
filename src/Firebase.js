import * as firebase from 'firebase';


const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCJGIIBL_fX8-X0D8qbkNv76-Bx2mlbBXw",
    authDomain: "empresa-24b92.firebaseapp.com",
    databaseURL: "https://empresa-24b92.firebaseio.com",
    projectId: "empresa-24b92",
    storageBucket: "empresa-24b92.appspot.com",
    messagingSenderId: "467531844772",
    appId: "1:467531844772:web:72566e5cd921bc2bf2ea31",
    measurementId: "G-61T959RBP6"

};
firebase.initializeApp(config);

firebase.firestore().settings(settings);



export default firebase;