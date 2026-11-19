import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!isOpen);
  return (
    <div>
      <nav className="w-full flex items-center justify-between bg-slate-900 px-6 py-4 text-white">
        <div className="text-xl font-bold normal text-green-300">Word Peas</div>

        <div className=" hidden md:flex space-x-8 list-none">
          <li>
            <a href="Shop" className="hover:text-blue-400 transition">
              Shop
            </a>
          </li>
          <li>
            <a href="Newstand" className="hover:text-blue-400 transition">
              Newstand
            </a>
          </li>
          <li>
            <a href="About" className="hover:text-blue-400 transition">
              Who we are
            </a>
          </li>
          <li>
            <a href="MyProfile" className="hover:text-blue-400 transition">
              My profile
            </a>
          </li>
          <li>
            <a
              href="Basket"
              className="rounded-[2px] p-[2px] bg-green-500 hover:text-blue-400 transition"
            >
              Basket(3)
            </a>
          </li>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
            arial-expanded={isOpen}
          >
            {/* Conditional render Close (X) or Hamburger icon */}
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 616 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M4 6h16MA 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu(Renders when isOpen is true on small screen)*/}
        {isOpen && (
          <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 spacy-y-2">
            <a
              href="#shop"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 rounded hover: bg-slate-700"
            >
              Shop
            </a>
            <a
              href="#newstand"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 rounded hover: bg-slate-700"
            ></a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block-py-2 px-3 rounded hover:bg-slate-700"
            ></a>
            <a
              href="#myprofile"
              onClick={() => setIsOpen(false)}
              className="block-py-2 px-3 rounded hover: bg-slate-700s"
            ></a>
            <a
              href="#basket"
              onClick={() => setIsOpen(false)}
              className="block-py-2 px-3 rounded hover: bg-slate-700"
            ></a>
          </div>
        )}
      </nav>
    </div>
  );
}
