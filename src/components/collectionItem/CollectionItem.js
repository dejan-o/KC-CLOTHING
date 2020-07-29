import React from 'react';
import './CollectionItem.scss';
import CustomButton from '../customButton/CustomButton';
import { addItem } from '../../redux/cart/cartActions';
import { connect } from 'react-redux';
const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }}> </div>
			<div className='collection-footer'>
				<span className="name">{name}</span>
				<span className="price">{price}$</span>
			</div>
			<CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
		</div>




	);


};

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (item) => dispatch(addItem(item))
	};
};


export default connect(null, mapDispatchToProps)(CollectionItem);