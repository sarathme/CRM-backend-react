import styles from "./Badge.module.css";

function Badge({ value, type }) {
  return (
    <div className={`${styles.badge} ${styles[type]}`}>
      <h3>{value}</h3>
    </div>
  );
}

export default Badge;
