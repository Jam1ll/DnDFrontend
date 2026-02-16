import { Link } from "react-router-dom";

export const BasicHeader = () => {
  return (
    <>
      <nav className="w-full bg-[#26262d] text-white p-4 shadow-md">
        <ul className="flex flex-row gap-8 items-center justify-center list-none m-0 p-0">
          <li className="hover:text-blue-400 cursor-pointer transition-colors font-medium">
            <Link className="link" to="/">
              Inicio
            </Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors font-medium">
            <Link className="link" to="/characters">
              Mis personajes
            </Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors font-medium">
            <Link className="link" to="/campaigns">
              Campañas
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
