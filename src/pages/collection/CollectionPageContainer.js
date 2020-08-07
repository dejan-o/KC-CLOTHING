import CollectionPage from './CollectionPage';
import { connect } from 'react-redux';
import { selectCollectionLoaded } from '../../redux/shop/shopSelectors';
import WithSpinner from '../../components/withSpinner/WithSpinner';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectCollectionLoaded(state)
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;