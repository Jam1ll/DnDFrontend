import logo from "../../assets/images/logo.png";

export const MainHeader = () => {
  return (
    <>
      <div className="bg-[#1f125e] header-navbar navbar-expand-md navbar navbar-with-menu navbar-static-top navbar-dark bg-gradient-x-red navbar-border navbar-brand-center">
        <div className="flex justify-center items-center p-2">
          <img src={logo} width="88" height="88" />
        </div>
      </div>
    </>
  );
};
