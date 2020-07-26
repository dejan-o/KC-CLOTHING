import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAC-rmKxi3rvBLU6ggdSK8ySgVMNyuoD9c",
    authDomain: "kc-db-937f6.firebaseapp.com",
    databaseURL: "https://kc-db-937f6.firebaseio.com",
    projectId: "kc-db-937f6",
    storageBucket: "kc-db-937f6.appspot.com",
    messagingSenderId: "1008613810081",
    appId: "1:1008613810081:web:0b3826ed79ab3dc0b675e0",
    measurementId: "G-RW6YETC896"
  };



  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)
      return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){

      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });
      } catch (error) {
        console.log('error creating user', error.message);
      }


    }
  
    return userRef;
  }





  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;