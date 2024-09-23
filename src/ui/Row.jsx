import styles from "./Row.module.css";
function Row({ type = "vertical", children, className = "" }) {
  return (
    <div className={`${styles.row} ${styles[type]} ${className}`}>
      {children}
    </div>
  );
}

export default Row;
