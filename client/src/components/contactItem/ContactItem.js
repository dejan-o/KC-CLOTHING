import React from 'react'
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import CallTwoToneIcon from '@material-ui/icons/CallTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import QueryBuilderTwoToneIcon from '@material-ui/icons/QueryBuilderTwoTone';
import './ContactItem.scss';


const ContactItem = ({place, address, hours, email, phone}) => {
    return (
        <div className="contact-item">
		<div className="contact-item-header">
			{place}
		</div>

		<div className="contact-item-content">
			<div className="contact-content-group">

				<div className="contact-item-icon"><HomeTwoToneIcon /></div>
                <span>{address}</span>
			</div>

			<div className="contact-content-group">
			    <div className="contact-item-icon"><EmailTwoToneIcon /> </div>
                <span>{email}</span>
			</div>

			<div className="contact-content-group">
			    <div className="contact-item-icon"><CallTwoToneIcon /> </div>
                <span>{phone}</span>
			</div>

			<div className="contact-content-group">
			    <div className="contact-item-icon"><QueryBuilderTwoToneIcon /> </div>
                <span>{hours}</span>
			</div>

		</div>
	</div>
    )
}


export default ContactItem;