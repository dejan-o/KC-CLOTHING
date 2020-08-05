import SHOP_DATA from './shop.data';
import shopTypes from './shopTypes';

const INITIAL_STATE = {
	collections: SHOP_DATA
};


const shopReducer = (state=INITIAL_STATE, action) => {
	switch(action){
	case shopTypes.UPDATE_COLLECTIONS:
		return {...state, collections: action.payload}
	
	default:
		return state;
	}
};

export default shopReducer;