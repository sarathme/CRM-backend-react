import { NavLink } from "react-router-dom";
import styles from "./DashboardNav.module.css";

function DashboardNav() {
  return (
    <div className={styles.navContainer}>
      <NavLink to="feedbacks">Feedbacks</NavLink>
      <NavLink to="queries">Queries</NavLink>
      <NavLink to="products">Products</NavLink>
      <NavLink to="customers">Customers</NavLink>
    </div>
  );
}

export default DashboardNav;
