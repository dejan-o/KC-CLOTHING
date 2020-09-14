import { takeLatest, call, put, all } from 'redux-saga/effects';
import contactTypes from './contactTypes';
import { firestore, convertContactsSnapshotToArray } from '../../firebase/firebase';
import { fetchContactsSuccess, fetchContactsFailure} from './contactActions';

export function* fetchContactsAsync(){

	try{
		const collectionRef = firestore.collection('contacts');
		const snapshot = yield collectionRef.get();
		const contactsArray = yield call(convertContactsSnapshotToArray, snapshot);
		yield put(fetchContactsSuccess(contactsArray));
	} catch (error){
		yield put(fetchContactsFailure(error));

	}

}

export function* fetchContactsStart(){
	yield takeLatest(contactTypes.FETCH_CONTACTS_START, fetchContactsAsync);
}

export default function* contactSagas(){
	yield (all([call(fetchContactsStart)]));
}