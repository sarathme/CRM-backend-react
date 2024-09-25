import styles from "./TabFooter.module.css";
function TabFooter({ children }) {
  return <div className={styles.footer}>{children}</div>;
}

export default TabFooter;
