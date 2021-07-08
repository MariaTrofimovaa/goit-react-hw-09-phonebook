import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ContactList.module.css";
import Loader from "react-loader-spinner";

import { removeContact } from "../../redux/contacts/contacts.operations";
import {
  getFilteredContacts,
  getLoader,
} from "../../redux/contacts/contacts.selectors";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const loading = useSelector(getLoader);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeContact(id));
  }

  return (
    <>
      {loading && (
        <Loader type="ThreeDots" color="#8f73c2" height={80} width={80} />
      )}
      <ul className={styles.contactsList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.contact}>
            {contact.name}: {contact.number}
            <button
              className={styles.deleteBtn}
              type="button"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
