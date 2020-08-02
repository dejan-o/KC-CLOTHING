import React from 'react';
import CollectionPreview from '../collectionPreview/CollectionPreview';
import './CollectionOverview.scss';
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shopSelectors';
import {createStructuredSelector} from 'reselect';


const CollectionOverview = ({collections}) => {
    return (
        <div className="collection-overview">
            {collections.map(({ id, ...props }) => {
					return <CollectionPreview key={id} {...props} />;
				})}

        </div>
    );
}



const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionOverview);