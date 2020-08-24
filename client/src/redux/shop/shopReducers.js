
import shopTypes from './shopTypes';

const INITIAL_STATE = {
	collections: null,
	isFetching: false,
	errorMsg: null
};


const shopReducer = (state=INITIAL_STATE, action) => {
	switch(action.type){
	case shopTypes.FETCH_COLLECTIONS_START:
		return { ...state, isFetching: true };
	case shopTypes.FETCH_COLLECTIONS_SUCCESS:
		return { ...state, isFetching: false, collections: action.payload };
	case shopTypes.FETCH_COLLECTIONS_FAILURE:
		return { ...state, isFetching: false, errorMsg: action.payload };
	default:
		return state;
	}
};

export default shopReducer;