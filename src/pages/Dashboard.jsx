import Heading from "../ui/Heading";
import TabContent from "../components/TabContent";
import DashboardNav from "../ui/DashboardNav";

import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Heading>Dashboard</Heading>
      <DashboardNav />
      <TabContent>
        <Outlet />
      </TabContent>
    </>
  );
}

export default Dashboard;
