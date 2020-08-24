import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAC-rmKxi3rvBLU6ggdSK8ySgVMNyuoD9c',
	authDomain: 'kc-db-937f6.firebaseapp.com',
	databaseURL: 'https://kc-db-937f6.firebaseio.com',
	projectId: 'kc-db-937f6',
	storageBucket: 'kc-db-937f6.appspot.com',
	messagingSenderId: '1008613810081',
	appId: '1:1008613810081:web:0b3826ed79ab3dc0b675e0',
	measurementId: 'G-RW6YETC896'
};


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();

	objectsToAdd.forEach(element => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, element);
	});

	return await batch.commit();

};



export const convertCollectionsSnapshotToMap = (collections) => {

	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();
		return {
			routename: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		};
	});
	return transformedCollection.reduce( (accumulator, current) => {
		accumulator[current.title.toLowerCase()] = current;
		return accumulator;
	}, {} );
};




export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth)
		return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists){

		const { displayName, email } = userAuth;
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
};


export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};




firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;