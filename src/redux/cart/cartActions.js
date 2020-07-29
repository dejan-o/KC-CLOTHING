import cartTypes from './cartTypes';

export const toggleCartHidden = () => ({
	type: cartTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (payload) => ({
	type: cartTypes.ADD_ITEM,
	payload
});


export const clearItemFromCart = (payload) => ({
	type: cartTypes.CLEAR_ITEM_FROM_CART,
	payload
});

export const removeItem = (payload) => ({
	type: cartTypes.REMOVE_ITEM,
	payload
});