import React,{Component} from 'react';
import './ShopPage.scss';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../redux/shop/shopActions';
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
			<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>}/>
		</div>        
	);
};
}



const mapDispatchToProps = dispatch => {
	return {
		fetchCollections: () => dispatch(fetchCollectionsStartAsync())
	}
}


export default connect(null,mapDispatchToProps)(ShopPage);