import {userActionTypes} from './userTypes';

export const setCurrentUser = payload => {
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payload
    }
}

