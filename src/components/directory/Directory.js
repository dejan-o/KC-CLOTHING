import React from 'react';
import MenuItem from '../menu-item/Menu-item.js';
import './Directory.scss';
import {selectDirectorySections} from '../../redux/directory/directorySelectors';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
const Directory = ({sections}) => {

		return (
			<div className='directory-menu'>

				{ sections.map(({ id, ...sectionProps })=>  {
					return <MenuItem key={id} {...sectionProps}/>;
				} )}

			</div>
		);
	}




const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
}) 


export default connect(mapStateToProps)(Directory);