import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import CartIcon from '../cart_icon/CartIcon';
import CartDropdown from '../cart_dropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';


const Header = ({ currentUser, cartHidden }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/"><Logo /></Link>

			<div className="options">
				<Link className="option" to="/shop">SHOP</Link>
				<Link className="option" to="/contact">CONTACT</Link>
				{currentUser ? 
					<div className="option" onClick={() => auth.signOut()}>Sign Out</div>  :
					<Link className="option" to='/signin'>SIGN IN</Link>
        
				}
				<CartIcon/>
			</div>
			{
				cartHidden ? null : <CartDropdown/>
			}
		</div>
	);
};


const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	cartHidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);