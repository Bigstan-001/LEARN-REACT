import { NavLink } from "react-router";

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-(--border) bg-white px-6">
      <h1 className="text-lg font-semibold text-slate-900">Dashboard</h1>
      <div className="flex items-center gap-4">
        <NavLink to="/" className="text-sm text-slate-600 hover:text-slate-900">
          Back to site
        </NavLink>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-sm font-semibold text-white">
          Stan
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
