import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth.operations";
import styles from "./Login.module.css";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(initialState);

  const dispatch = useDispatch();

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn(user));
    setUser(initialState);
  };

  return (
    <form className={styles.loginForm} onSubmit={onHandleSubmit}>
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
        Log in
      </button>
    </form>
  );
};

export default Login;
