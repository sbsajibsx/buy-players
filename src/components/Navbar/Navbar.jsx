import { AiFillDollarCircle } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../../assets/logo.png";

const Navbar = ({prices}) => {
  return (
    <div>
      <div className="flex justify-between items-center w-11/12 mx-auto mt-2">
        <div>
          <img className="h-16" src={logo} alt="" />
        </div>
        <div className="flex justify-between items-center">
          <div className="md:flex justify-between items-center hidden">
            <div className="px-2 ml-2 rounded-xl text-slate-600">
              <a href="">Home</a>
            </div>
            <div className="px-2 ml-2 rounded-xl text-slate-600">
              <a href="">Fixture</a>
            </div>
            <div className="px-2 ml-2 rounded-xl text-slate-600">
              <a href="">Teams</a>
            </div>
            <div className="px-2 ml-2 rounded-xl text-slate-600">
              <a href="">Schedules</a>
            </div>
          </div>
          <div className="flex justify-center items-center p-3 border rounded-xl gap-2">
            <p>
              <span>{prices}</span> Coin
            </p>
            <p className="text-xl text-yellow-400">
              <AiFillDollarCircle />
            </p>
          </div>
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost md:hidden">
              <div className="bg-white rounded-full p-2">
                <CiMenuBurger />
              </div>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0 gap-1"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
