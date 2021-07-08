import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth.operations";
import styles from "./Register.module.css";

const InitialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [user, setUser] = useState(InitialState);
  const dispatch = useDispatch();

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(user));
    setUser(InitialState);
  };

  return (
    <form onSubmit={onHandleSubmit} className={styles.registerForm}>
      <label htmlFor="" className={styles.label}>
        Name
        <input
          id="name"
          name="name"
          type="text"
          className={styles.inputData}
          placeholder="Name*"
          value={user.name}
          onChange={onHandleChange}
          required
        />
      </label>

      <label htmlFor="email" className={styles.label}>
        Email
        <input
          id="email"
          name="email"
          type="mail"
          className={styles.inputData}
          placeholder="Email*"
          value={user.email}
          onChange={onHandleChange}
          required
        />
      </label>

      <label htmlFor="password" className={styles.label}>
        Password
        <input
          id="password"
          name="password"
          type="password"
          className={styles.inputData}
          placeholder="Password*"
          value={user.password}
          onChange={onHandleChange}
          required
        />
      </label>

      <button type="submit" className={styles.submitBtn}>
        Sign up
      </button>
    </form>
  );
};

export default Register;