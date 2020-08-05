import React,{Component} from 'react';
import './ShopPage.scss';
import CollectionOverview from '../../components/collectionOverview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';
import { Route } from 'react-router-dom';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase';
import {updateCollections} from '../../redux/shop/shopActions';
import {connect} from 'react-redux';
import WithSpinner from '../../components/withSpinner/WithSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

	state = {
		loading: true
	}

	unsubscribeFromSnapshot = null
	componentDidMount(){

		const collectionRef = firestore.collection('collections');
		

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			console.log(collectionsMap);
			this.props.updateShopData(collectionsMap);
			this.setState({loading: false})

		});

	}


	render(){
	const {match} = this.props;

	return (
		<div  className="shop-page">
			<Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={this.state.loading} {...props}/>}/>
			<Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={this.state.loading} {...props}/>}/>
		</div>        
	);
};
}



const mapDispatchToProps = dispatch => {
	return {
		updateShopData: collections => dispatch(updateCollections(collections))
	}
}

export default connect(null,mapDispatchToProps)(ShopPage);