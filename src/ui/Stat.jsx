import { HiOutlineStar } from "react-icons/hi";
import styles from "./Stat.module.css";
import Heading from "./Heading";

function Stat({ icon, title, stat, group }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>
        <Heading type="tertiary">{title}</Heading>
        <Heading type="tertiary">{group}</Heading>
      </div>
      <div className={styles.stat}>{stat}</div>
    </div>
  );
}

export default Stat;
