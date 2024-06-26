import { NavLink } from "react-router-dom";
import elio_logo from "@/assets/images/elio_logo.png";
import useCheckRole from "@/hooks/common/useCheckRole";

const Header = () => {
  const { clientUserName, clientRole } = useCheckRole(null);

  return (
    <header className="w-full h-[120px]  border-b-2 border-deep-orange">
      <div className="flex w-[1200px] h-full mx-auto justify-between">
        <div className="flex w-[250px] shrink-0  items-center justify-center">
          <NavLink to="/" className="">
            <img
              src={elio_logo}
              alt="elio_logo"
              className="w-[170px] h-[94px]"
            />
          </NavLink>
        </div>
        <nav className="w-full m-4 text-deep-orange flex justify-between items-center text-[24px]">
          <NavLink to="/Board/List" className="p-4">
            Board
          </NavLink>

          {clientUserName ? (
            <div>
              {clientUserName}({clientRole})
            </div>
          ) : (
            <NavLink to="/SignUp" className="p-4">
              Sign Up
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
