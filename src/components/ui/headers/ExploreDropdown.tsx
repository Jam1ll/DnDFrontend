import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoCompassOutline,
  IoBookOutline,
  IoShieldOutline,
  IoStarOutline,
  IoSparklesOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { GiElfHelmet } from "react-icons/gi";

export const ExploreDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative font-sans font-light">
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 hover:text-blue-300 transition-all hover:scale-105 cursor-pointer focus:outline-none z-50 relative"
      >
        <IoCompassOutline size={22} className="text-blue-200" />
        <span className="tracking-wide font-light">EXPLORAR</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/0 pointer-events-auto cursor-default"
            onClick={closeMenu}
          ></div>

          <div className="absolute left-0 top-full mt-3 w-52 bg-[#2a2a2a] border border-white/10 rounded-md shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
            <ul className="flex flex-col m-0 p-0 list-none">
              <li>
                <Link
                  to="/manuals"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-slate-200 hover:bg-blue-600 hover:text-white transition-colors border-b border-white/5"
                >
                  <IoBookOutline size={18} className="opacity-80" />
                  <span>Manuales</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/races"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-slate-200 hover:bg-blue-600 hover:text-white transition-colors border-b border-white/5"
                >
                  <GiElfHelmet size={18} className="opacity-80" />
                  <span>Razas</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/classes"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-slate-200 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <IoShieldOutline size={18} className="opacity-80" />
                  <span>Clases</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/feats"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-slate-200 hover:bg-blue-600 hover:text-white transition-colors border-b border-white/5"
                >
                  <IoStarOutline size={18} className="opacity-80" />
                  <span>Dotes</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/spells"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-slate-200 hover:bg-blue-600 hover:text-white transition-colors border-b border-white/5"
                >
                  <IoSparklesOutline size={18} className="opacity-80" />
                  <span>Conjuros</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/backgrounds"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-slate-200 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <IoDocumentTextOutline size={18} className="opacity-80" />
                  <span>Trasfondos</span>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
