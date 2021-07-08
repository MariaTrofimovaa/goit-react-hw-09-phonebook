import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getContactsSuccess,
  addContactSuccess,
  removeContactSuccess,
  filterContact,
  getContactsRequest,
  getContactsFailure,
  addContactRequest,
  addContactFailure,
  removeContactRequest,
  removeContactFailure,
} from "./contacts.actions";

const itemsReducer = createReducer([], {
  [getContactsSuccess]: (_, action) => [...action.payload],
  [addContactSuccess]: (state, action) => {
    return [...state, action.payload];
  },
  [removeContactSuccess]: (state, action) => [
    ...state.filter((item) => item.id !== action.payload),
  ],
});

const filterReducer = createReducer("", {
  [filterContact]: (_, action) => action.payload,
});

const loader = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsFailure]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactFailure]: () => false,

  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactFailure]: () => false,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loader,
});

export default contactsReducer;
