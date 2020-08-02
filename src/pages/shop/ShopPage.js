import React from 'react';
import './ShopPage.scss';
import CollectionOverview from '../../components/collectionOverview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';
import {Route} from 'react-router-dom';


const ShopPage = ({match}) => {

		return (
			<div  className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionOverview}/>
				<Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
			</div>        
		);
	}





export default ShopPage;