import styles from "./Table.module.css";

function Table({ children }) {
  return (
    <div className={styles.table} role="table">
      {children}
    </div>
  );
}

export default Table;
