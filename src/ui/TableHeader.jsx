import styles from "./TableHeader.module.css";

function TableHeader({ children }) {
  return <div className={styles.headerContainer}>{children}</div>;
}

export default TableHeader;
