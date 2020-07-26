import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

const Header = ({ currentUser }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/"><Logo /></Link>

			<div className="options">
				<Link className="option" to="/shop">SHOP</Link>
				<Link className="option" to="/contact">CONTACT</Link>
				{currentUser ? 
					<div className="option" onClick={() => auth.signOut()}>Sign Out</div>  :
					<Link className="option" to='/signin'>Sign In</Link>
        
				}
			</div>

		</div>
	);
};

export default Header;