import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../collectionItem/CollectionItem';

const CollectionPreview = ({title,items}) => {

    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                { items.slice(0,4).map(({id, ...props}) => {
                    console.log(props);
                    return <CollectionItem key={id} {...props}/>
                })}
            </div>
        </div>





    );


}

export default CollectionPreview;