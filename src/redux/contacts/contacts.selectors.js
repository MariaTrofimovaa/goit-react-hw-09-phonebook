import { createSelector } from "reselect";

const getContactsSelector = (state) => state.contacts.items;

const filterSelector = (state) => state.contacts.filter;

const getLoader = (state) => state.contacts.loading;

const getFilteredContacts = createSelector(
  [getContactsSelector, filterSelector],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export { getContactsSelector, filterSelector, getLoader, getFilteredContacts };
