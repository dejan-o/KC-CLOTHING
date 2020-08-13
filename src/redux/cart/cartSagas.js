import {call, all, takeLatest, put} from 'redux-saga/effects';

import {clearCart} from './cartActions';
import userTypes from '../user/userTypes';

export function* clearCartOnSignOutSuccess(){
    yield put(clearCart());
}


export function* onSignOutSucces(){
    yield takeLatest(userTypes.SIGN_OUT_SUCCESS, clearCartOnSignOutSuccess);
}

export default function* cartSagas() {
    yield (all([call(onSignOutSucces)]))
}