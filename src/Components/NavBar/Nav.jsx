import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import User from '../../assets/assets/user.png';

const Nav = ({setIsShowDetails}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(res => {
            console.log(res.user)
        })
        .catch(err => console.error(err.message));

        navigate('/register');
    }
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-black font-semibold normal-case text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-pink-600 to-white"></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">
            <li onClick={()=> setIsShowDetails(false)}> <Link to='/'>Home</Link> </li>
            <li> <Link to='/about'>About</Link> </li>
            <li> <Link to='/career'>Career</Link> </li>
            {
                user &&  <li> <Link to='/dashboard'>Dashboard</Link> </li>
            }
           
          </ul>
        </div>
        <div className="navbar-end ">
            <img src={User} alt="" className="w-10 mr-4"/>
            {
                user ? <>
                <span>{user.email}</span> <button onClick={handleLogOut} className="px-5  py-2 rounded-md font-medium text-white border-none bg-black">Sign out</button> 
                </> : 
                <Link to='/login'><button  className="px-5 py-2 rounded-md  text-white font-medium bg-black border-none">Sign in</button> </Link>
            }
        </div>
      </div>
    </div>
  );
};

export default Nav;
