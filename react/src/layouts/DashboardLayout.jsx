import { Outlet } from "react-router";
import Aside from "../components/dashboard/shared/Aside";
import DashboardHeader from "../components/dashboard/shared/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Aside />
      <div className="ml-64 flex min-h-screen flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
