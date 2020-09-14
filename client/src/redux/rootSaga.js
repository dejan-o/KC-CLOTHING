import { all, call } from 'redux-saga/effects';
import shopSagas from './shop/shopSagas';
import userSagas from './user/userSagas';
import cartSagas from './cart/cartSagas';
import contactSagas from './contact/contactSagas';

export default function* rootSaga(){
	yield all([
		call(shopSagas),
		call(userSagas),
		call(cartSagas),
		call(contactSagas)
	]);
}