import { createAction } from "@reduxjs/toolkit";

const getContactsRequest = createAction("contacts/fetchContactsRequest");
const getContactsSuccess = createAction("contacts/fetchContactsSuccess");
const getContactsFailure = createAction("contacts/fetchContactsFailure");

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactFailure = createAction("contacts/addContactFailure");

const removeContactRequest = createAction("contacts/removeContactRequest");
const removeContactSuccess = createAction("contacts/removeContactSuccess");
const removeContactFailure = createAction("contacts/removeContactFailure");

const filterContact = createAction("contacts/filterСhange");

export {
  filterContact,
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  removeContactRequest,
  removeContactSuccess,
  removeContactFailure,
  getContactsRequest,
  getContactsSuccess,
  getContactsFailure,
};
