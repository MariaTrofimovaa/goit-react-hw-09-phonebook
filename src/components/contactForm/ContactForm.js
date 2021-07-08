import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ContactForm.module.css";

import { addContact } from "../../redux/contacts/contacts.operations";
import { getContactsSelector } from "../../redux/contacts/contacts.selectors";


const initialState = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(initialState);
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSelector);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const contactExist = contacts.find(
      (item) => item.name === contact.name
    );

    if (contactExist) {
      alert(`Contact <-- ${contact.name} --> already exists`);
      return;
    }
    dispatch(addContact(contact)); 
    setContact(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <label>
          <input
            className={styles.inputData}
            type="text"
            name="name"
            placeholder="Name:"
            value={contact.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label>
          <input
            className={styles.inputData}
            type="tel"
            name="number"
            placeholder="Number:"
            value={contact.number} 
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={styles.addBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
