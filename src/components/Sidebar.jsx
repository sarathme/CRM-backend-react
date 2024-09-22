import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul role="list">
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="queries">Queries</NavLink>
        </li>
        <li>
          <NavLink to="feedbacks">Feedbacks</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
        <li>
          <NavLink to="customers">Customers</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
