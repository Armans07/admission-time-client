import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">Logo</div>
          <div className="md:hidden">
            {/* Mobile Menu */}
            <button
              className="text-white focus:outline-none"
              onClick={() => alert('Mobile Menu Clicked')}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="hidden md:flex space-x-4">
              <li>
                <a href="/" className="text-white hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="colleges" className="text-white hover:text-gray-200">
                  Colleges
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  Admission
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  My College
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center space-x-4">

            {
              user &&
              <div className="online">
                <div>
                  <button className="btn btn-xs">{user.displayName}</button>
                </div>
              </div>
            }
            {user ? <button onClick={handleLogOut} className="bg-transparent text-white hover:bg-gray-100 hover:text-gray-800 px-3 py-2 border border-white hover:border-transparent rounded">
              Logout
            </button> :
              <Link to='/login'> <button className="bg-transparent text-white hover:bg-gray-100 hover:text-gray-800 px-3 py-2 border border-white hover:border-transparent rounded">
                Login
              </button></Link>}


          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
