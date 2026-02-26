import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

export const MainHeader = () => {
  return (
    <div className="relative flex justify-center items-center w-full  text-white p-1.5 shadow-md bg-linear-to-r from-[#2763ef] via-[#1e40af] to-[#090f1c] header-navbar navbar-expand-md navbar-dark bg-gradient-x-red navbar-border">
      <div>
        <Link to="/home">
          <img src={logo} width="88" height="88" alt="Logo" />
        </Link>
      </div>

      <div className="absolute right-8 text-gray-200 text-1xl font-bold">
        <Link
          className="link hover:text-gray-300 transition-colors"
          to="/login"
        >
          LOGIN
        </Link>
      </div>
    </div>
  );
};
