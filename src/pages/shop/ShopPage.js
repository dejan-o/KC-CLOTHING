import React,{Component} from 'react';
import './ShopPage.scss';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shopActions';
import CollectionOverviewContainer from '../../components/collectionOverview/CollectionOverviewContainer';
import CollectionPageContainer from '../collection/CollectionPageContainer';




class ShopPage extends Component {

	
	componentDidMount(){
		this.props.fetchCollections();
	}


	render(){
	const {match} = this.props;

	return (
		<div  className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
			<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
		</div>        
	);
};
}



const mapDispatchToProps = dispatch => {
	return {
		fetchCollections: () => dispatch(fetchCollectionsStart())
	}
}


export default connect(null,mapDispatchToProps)(ShopPage);