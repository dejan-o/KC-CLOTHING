import { call, put, takeLatest, all } from 'redux-saga/effects';
import userActionTypes from './userTypes';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from './userActions';

export function* getSnapshotFromAuth(userAuth, additionalData){
	try{
		const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	}
	catch (error){
		yield put(signInFailure(error));
	}
}


export function* signInWithGoogle(){
	try{
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}



export function* signInWithEmail({ payload: { email, password } }){
	try{
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromAuth(user);
	} catch (error){
		yield put(signInFailure(error));
	}
}

export function* isUserAuthenticated(){
	try {
		const userAuth = yield getCurrentUser();
		if(!userAuth)
			return;
		const userRef = yield call(createUserProfileDocument, userAuth);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signOut(){
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailure(error));
	}
}

export function* onGoogleSignInStart(){
	yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signUp({ payload: { email, password, displayName } }){
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield put(signUpSuccess({ user, additionalData: { displayName } }));
	} catch (error) {
		yield put(signUpFailure(error));
	}
}

export function* signInAfterSignUp({ payload: { user, additionalData } }){
	try{
		yield getSnapshotFromAuth(user, additionalData);
	}
	catch(error){
		yield put(signInFailure(error));
	}
}

export function* onSingUpSuccess(){
	yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignUpStart(){
	yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* onEmailSignIn(){
	yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession(){
	yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOut(){
	yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export default function* userSagas(){
	yield all([call(onGoogleSignInStart), call(onEmailSignIn), call(onCheckUserSession), call(onSignOut), call(onSignUpStart), call(onSingUpSuccess)]);
}