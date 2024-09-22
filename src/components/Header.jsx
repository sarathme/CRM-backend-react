import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h3>CRM Capstone</h3>
      <div className={styles.user}>
        <img src="#" alt="User Image" />
        <h4>User Name</h4>
      </div>
    </header>
  );
}

export default Header;
