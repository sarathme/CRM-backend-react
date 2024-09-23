import styles from "./Heading.module.css";

function Heading({ children, type = "primary" }) {
  if (type === "secondary") return <h2 className={styles[type]}>{children}</h2>;
  if (type === "tertiary") return <h3 className={styles[type]}>{children}</h3>;
  return <h1 className={styles[type]}>{children}</h1>;
}

export default Heading;
