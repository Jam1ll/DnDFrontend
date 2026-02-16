import { Link } from "react-router-dom";

export const BasicHeader = () => {
  return (
    <nav className="w-full bg-[#26262d] text-white p-4 shadow-md">
      <ul className="flex flex-row gap-8 items-center justify-center list-none m-0 p-0">
        <li className="hover:text-gray-300 font-sans font-light cursor-pointer transition-colors">
          <Link className="link" to="/">
            INICIO
          </Link>
        </li>
        <li className="hover:text-gray-300 font-sans font-light cursor-pointer transition-colors">
          <Link className="link" to="/characters">
            PERSONAJES
          </Link>
        </li>
        <li className="hover:text-gray-300 font-sans font-light cursor-pointer transition-colors">
          <Link className="link" to="/campaigns">
            CAMPAÑAS
          </Link>
        </li>
      </ul>
    </nav>
  );
};
