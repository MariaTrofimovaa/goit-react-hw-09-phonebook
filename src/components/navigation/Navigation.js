import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthSelector } from "../../redux/auth/auth.selectors";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const isAuth = useSelector(getIsAuthSelector);

  return (
    <div className={styles.thumb}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Main
          </NavLink>
        </li>
        {isAuth && (
          <li className={styles.item}>
            (
            <NavLink
              to="/contacts"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Contacts
            </NavLink>
            )
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
