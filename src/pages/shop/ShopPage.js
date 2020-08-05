import React,{Component} from 'react';
import './ShopPage.scss';
import CollectionOverview from '../../components/collectionOverview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';
import { Route } from 'react-router-dom';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase';
import {updateCollections} from '../../redux/shop/shopActions';
import {connect} from 'react-redux';

class ShopPage extends Component {


	componentDidMount(){

		const collectionRef = firestore.collection('collections');
		
		collectionRef.onSnapshot(async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

			this.props.updateCollections(collectionsMap);
		});

	}


	render(){
	const {match} = this.props;

	return (
		<div  className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionOverview}/>
			<Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
		</div>        
	);
};
}



const mapDispatchToProps = dispatch => {
	return {
		updateCollections: collections => dispatch(updateCollections(collections))
	}
}

export default connect(null,mapDispatchToProps)(ShopPage);