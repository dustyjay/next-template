import Head from "next/head";
import DashboardLayout from "../../layouts/dashboard";
import SingleDashboard from "./single";

const Dashboard = () => (
  <div>
    <Head>
      <title>My Dashboard</title>
    </Head>
    <SingleDashboard />
  </div>
);

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
