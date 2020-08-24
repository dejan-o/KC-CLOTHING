import CollectionOverview from './CollectionOverview';
import { connect } from 'react-redux';
import { selectCollectionIsFetching } from '../../redux/shop/shopSelectors';
import WithSpinner from '../withSpinner/WithSpinner';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
	isLoading: selectCollectionIsFetching
});

const CollectionOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;

