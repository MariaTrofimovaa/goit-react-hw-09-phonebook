import React from "react";
import {useDispatch, useSelector } from "react-redux";

import { getNameSelector } from "../../redux/auth/auth.selectors";
import defaultAvatar from "../../images/avatar.png";
import { logOut } from "../../redux/auth/auth.operations";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const name = useSelector(getNameSelector);

  // const [avatar] = useState(defaultAvatar); 

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.userContainer}>
      <span className={styles.userTitle}>Welcome, {name}! </span>{" "}
      <img src={defaultAvatar} alt="" width="33" className={styles.avatarImg} />
      <button type="button" onClick={handleLogout} className={styles.logoutBtn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;