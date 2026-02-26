import { Link } from "react-router-dom";
import { GiCastle, GiPerson, GiBookCover } from "react-icons/gi";
import { ExploreDropdown } from "./ExploreDropdown";

export const BasicHeader = () => {
  return (
    <nav className="relative z-50 w-full bg-[#222222] text-white p-4 shadow-md">
      <ul className="flex flex-row gap-8 items-center justify-center list-none m-0 p-0">
        <li className="hover:text-blue-300 font-sans font-light cursor-pointer transition-all hover:scale-105">
          <Link className="link flex items-center gap-2" to="/home">
            <GiCastle size={20} className="text-blue-200" />
            <span className="tracking-wide">INICIO</span>
          </Link>
        </li>

        <li className="hover:text-blue-300 font-sans font-light cursor-pointer transition-all hover:scale-105">
          <Link className="link flex items-center gap-2" to="/characters">
            <GiPerson size={20} className="text-blue-200" />
            <span className="tracking-wide">PERSONAJES</span>
          </Link>
        </li>

        <li className="hover:text-blue-300 font-sans font-light cursor-pointer transition-all hover:scale-105">
          <Link className="link flex items-center gap-2" to="/campaigns">
            <GiBookCover size={20} className="text-blue-200" />
            <span className="tracking-wide">CAMPAÑAS</span>
          </Link>
        </li>

        <li className="relative group font-sans font-light cursor-pointer transition-all hover:scale-105">
          <ExploreDropdown />
        </li>
      </ul>
    </nav>
  );
};
