import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../collectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => {

	return (
		<div className="collection-preview">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{ items.slice(0, 4).map((item) => {
					return <CollectionItem key={item.id} item={item}/>;
				})}
			</div>
		</div>





	);


};

export default CollectionPreview;