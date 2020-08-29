import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../collectionItem/CollectionItem';
import {withRouter} from 'react-router-dom';

const CollectionPreview = ({ title, items, history, match}) => {

	return (
		<div className="collection-preview">
			<h1 className="title" onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}>{title}</h1>
			<div className="preview">
				{ items.slice(0, 4).map((item) => {
					return <CollectionItem key={item.id} item={item}/>;
				})}
			</div>
		</div>





	);


};

export default withRouter(CollectionPreview);