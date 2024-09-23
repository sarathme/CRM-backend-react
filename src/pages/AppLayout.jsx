import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

import Container from "../components/Container";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default AppLayout;
