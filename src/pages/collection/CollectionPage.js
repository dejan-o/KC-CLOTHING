import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shopSelectors'; 
import CollectionItem from '../../components/collectionItem/CollectionItem';
import './CollectionPage.scss';

const CollectionPage = ({collection: {items,title}}) => {
    
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
	return {
		collection: selectCollection(ownProps.match.params.collectionId)(state)
	}
}


export default connect(mapStateToProps)(CollectionPage);