import {takeLatest, call, put, all} from 'redux-saga/effects';
import shopTypes from './shopTypes';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from '../shop/shopActions';

export function* fetchCollectionsAsync(){

    try{
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error){
			yield put(fetchCollectionsFailure(error))

}

}

export function* fetchCollectionsStart(){
    yield takeLatest(shopTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export default function* shopSagas(){
    yield (all([call(fetchCollectionsStart)]))
}

