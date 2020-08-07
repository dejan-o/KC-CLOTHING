import shopTypes from './shopTypes';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase';


const fetchCollectionsSuccess = payload => {
	return {
		type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
		payload
	};
};

const fetchCollectionsStart = () => {
	return {
		type: shopTypes.FETCH_COLLECTIONS_START
	};
};

const fetchCollectionsFailure = () => {
	return {
		type: shopTypes.FETCH_COLLECTIONS_FAILURE
	};
};


export const fetchCollectionsStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection('collections');
		dispatch(fetchCollectionsStart());

		collectionRef.get().then(snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			dispatch(fetchCollectionsSuccess(collectionsMap));
		}).catch(err => dispatch(fetchCollectionsFailure(err)));

	};
};

