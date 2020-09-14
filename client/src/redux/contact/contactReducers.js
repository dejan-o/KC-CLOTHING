import contactTypes from './contactTypes';

const INITIAL_STATE = {
	contacts: null,
	isFetching: false,
	errorMsg: null
};


const contactReducer = (state=INITIAL_STATE, action) => {
	switch(action.type){
	case contactTypes.FETCH_CONTACTS_START:
		return { ...state, isFetching: true };
	case contactTypes.FETCH_CONTACTS_SUCCESS:
		return { ...state, isFetching: false, contacts: action.payload };
	case contactTypes.FETCH_CONTACTS_FAILURE:
		return { ...state, isFetching: false, errorMsg: action.payload };
	default:
		return state;
	}
};

export default contactReducer;