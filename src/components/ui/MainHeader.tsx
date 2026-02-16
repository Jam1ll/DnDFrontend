import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export const MainHeader = () => {
  return (
    <div className="relative flex justify-center items-center w-full p-2 bg-[#1f125e] header-navbar navbar-expand-md navbar-dark bg-gradient-x-red navbar-border">
      <div>
        <img src={logo} width="88" height="88" alt="Logo" />
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
