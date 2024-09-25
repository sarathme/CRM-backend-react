import styles from "./TabContent.module.css";

function TabContent({ children }) {
  return <div className={styles.content}>{children}</div>;
}

export default TabContent;
