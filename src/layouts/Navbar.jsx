import ToggleTheme from "./ToggleTheme";
import NavSearch from "./NavSearch";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
const Navbar = () => {
  let location = useLocation();
  return (
    <div className='navbar bg-base-100 rounded-b-lg shadow-md sticky top-0 z-50'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/favorite'>Favorite</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        {location.pathname === "/quotes" ? (
          <NavSearch />
        ) : (
          <Link to='/quotes'>
            <div className='flex justify-center'>
              <BiSearchAlt size={25} />
              <h3 className='font-mono text-xl pl-2'>Search</h3>
            </div>
          </Link>
        )}
      </div>
      <div className='navbar-end'>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
