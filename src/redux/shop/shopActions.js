import shopTypes from './shopTypes';

export const updateCollections = payload => {
    return {
        type: shopTypes.UPDATE_COLLECTIONS,
        payload
    }
}


