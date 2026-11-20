import { NavLink } from "react-router";
import { menuTabs } from "../../utils/nav-menus";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-(--border)  bg-slate-900   text-white">
      <nav className="mx-auto flex w-full max-w-7xl  items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <NavLink to={"/"} className="text-xl font-bold text-green-300">
          Word Peas
        </NavLink>

        <ul className="flex items-center">
          {menuTabs.map((menu, i) => (
            <NavLink
              to={menu.link}
              key={i}
              className="hover:text-blue-400 transition px-4"
            >
              {menu.label}
            </NavLink>
          ))}
          <NavLink
            className="bg-green-500 px-3 py-0.5 rounded-sm"
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
