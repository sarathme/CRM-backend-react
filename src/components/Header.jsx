import { useState } from "react";
import { useAuth } from "../contexts/authContextProvider";
import styles from "./Header.module.css";
import { HiChevronDown } from "react-icons/hi2";

function Header() {
  const { user, logout } = useAuth();

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className={styles.header}>
      <h3>CRM Capstone</h3>
      <div
        className={styles.user}
        onClick={() => setShowDropdown((state) => !state)}>
        <img src="/user-default.png" alt="User Image" />
        <h4>
          {user.name.toUpperCase()}{" "}
          <span>
            <HiChevronDown size={32} />
          </span>
        </h4>
        {showDropdown && (
          <div className={`${styles.dropdown}`}>
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
