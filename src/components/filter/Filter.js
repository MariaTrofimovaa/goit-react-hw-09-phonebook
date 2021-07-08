import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filtter.module.css";

import { filterSelector } from "../../redux/contacts/contacts.selectors";
import { filterContact } from "../../redux/contacts/contacts.actions";

const Filter = () => {
  const filter = useSelector(filterSelector);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <label>
      <input
        className={styles.input}
        type="text"
        name="filter"
        placeholder="Find contact by name"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
