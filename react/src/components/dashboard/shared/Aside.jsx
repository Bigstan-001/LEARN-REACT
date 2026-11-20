import { NavLink } from "react-router";
import { dashboardTabs } from "../../../utils/nav-menus";

const Aside = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-slate-600 text-white">
      <div className="flex h-16 items-center border-b border-slate-800 px-6">
        <NavLink to="/" className="text-xl font-bold text-green-300">
          Word Peas
        </NavLink>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {dashboardTabs.map((tab) => (
            <li key={tab.link}>
              <NavLink
                to={tab.link}
                end
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-slate-800 text-green-300"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {tab.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
