import contactTypes from './contactTypes';
import { firestore, convertContactsSnapshotToArray } from '../../firebase/firebase';


export const fetchContactsSuccess = payload => {
	return {
		type: contactTypes.FETCH_CONTACTS_SUCCESS,
		payload
	};
};

export const fetchContactsStart = () => {
	return {
		type: contactTypes.FETCH_CONTACTS_START
	};
};

export const fetchContactsFailure = (payload) => {
	return {
		type: contactTypes.FETCH_CONTACTS_FAILURE,
		payload
	};
};


export const fetchContactsStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection('contacts');
		dispatch(fetchContactsStart());

		collectionRef.get().then(snapshot => {
			const contactsArray = convertContactsSnapshotToArray(snapshot);
			dispatch(fetchContactsSuccess(contactsArray));
		}).catch(err => dispatch(fetchContactsFailure(err)));

	};
};

