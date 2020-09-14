import React, {useEffect} from 'react';
import './Contact.scss';
import ContactItem from '../../components/contactItem/ContactItem';
import {fetchContactsStart} from '../../redux/contact/contactActions';
import  {createStructuredSelector} from 'reselect';
import {selectContacts, selectContactsIsLoading} from '../../redux/contact/contactSelectors';
import WithSpinner from '../../components/withSpinner/WithSpinner';
import {connect} from 'react-redux';

const Contact = ({contacts, isLoading, fetchContacts}) => {

	useEffect( () => {
		fetchContacts();
	}, [fetchContacts])

return (
<div className="contact">

	{contacts ? contacts.map((item,i) => {
		return <ContactItem key={i} place={item.place} address={item.address} phone={item.phone} email={item.email} hours={item.hours} />
	})
	:
	null

}
</div>
);

}


const mapStateToProps = createStructuredSelector({
	contacts: selectContacts,
	isLoading: selectContactsIsLoading
})


const mapDispatchToProps = dispatch => {
	return {
		fetchContacts: () => dispatch(fetchContactsStart())
	};
};


export default WithSpinner(connect(mapStateToProps, mapDispatchToProps)(Contact));


