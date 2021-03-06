import React, { useEffect, lazy, Suspense } from 'react';
import './ShopPage.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';
import Spinner from '../../components/spinner/Spinner';


const CollectionOverviewContainer = lazy(() => import('../../components/collectionOverview/CollectionOverviewContainer'));
const CollectionPageContainer = lazy(() => import('../collection/CollectionPageContainer'));

const ShopPage = ({ fetchCollections, match }) => {

	useEffect( () => {
		fetchCollections();
	}, [fetchCollections])
	

		return (
			<div  className="shop-page">
				<Suspense fallback={<Spinner/>}>
					<Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
					<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
				</Suspense>
			</div>        
		);
	};




const mapDispatchToProps = dispatch => {
	return {
		fetchCollections: () => dispatch(fetchCollectionsStart())
	};
};


export default connect(null, mapDispatchToProps)(ShopPage);