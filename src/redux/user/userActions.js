import userActionTypes from './userTypes';

export const setCurrentUser = payload => {
	return {
	type: userActionTypes.SET_CURRENT_USER,
	payload
	}
}

export const googleSignInStart = () => {
	return {
		type: userActionTypes.GOOGLE_SIGN_IN_START
	}
}

export const signInSuccess = payload => {
	return {
		type: userActionTypes.SIGN_IN_SUCCESS,
		payload
	}
}

export const signInFailure = payload => {
	return {
		type: userActionTypes.SIGN_IN_FAILURE,
		payload
	}
}

export const emailSignInStart = payload => {
	return {
		type: userActionTypes.EMAIL_SIGN_IN_START,
		payload
	}
}

export const checkUserSession = () => {
	return {
		type: userActionTypes.CHECK_USER_SESSION
	}
}

export const signOutStart = () => {
	return {
		type: userActionTypes.SIGN_OUT_START
	}
}

export const signOutSuccess = () => {
	return {
		type: userActionTypes.SIGN_OUT_SUCCESS
	}
}

export const signOutFailure = payload => {
	return {
		type: userActionTypes.SIGN_OUT_FAILURE,
		payload
	}
}


export const signUpStart = payload => {
	return {
		type: userActionTypes.SIGN_UP_START,
		payload
	}
}

export const signUpSuccess = ({user, additionalData}) => {
	return {
		type: userActionTypes.SIGN_UP_SUCCESS,
		payload: {user, additionalData}
	}
}

export const signUpFailure = payload => {
	return {
		type: userActionTypes.SIGN_UP_FAILURE,
		payload
	}
}