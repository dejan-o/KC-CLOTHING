import { createSelector } from 'reselect';



const selectContact = state => state.contact;




export const selectContacts = createSelector(
	[selectContact],
	contact => contact.contacts
);

export const selectContactsIsLoading = createSelector(
	[selectContact],
	contact => contact.isFetching
);