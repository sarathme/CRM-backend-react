import { HiMiniStar } from "react-icons/hi2";
import Stat from "../ui/Stat";
import styles from "./Stats.module.css";

function Stats({ children }) {
  return <div className={styles.statsContainer}>{children}</div>;
}

export default Stats;
