import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { HiSun, HiMoon, HiUser, HiOutlineShoppingCart } from "react-icons/hi2";

const NavBar = () => {
  const isDarkModePreferred =
    JSON.parse(localStorage.getItem("darkMode")) ??
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(isDarkModePreferred);

  const toggleMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <Link
          to="/"
          className="text-[#292929] dark:text-[#fff] lg:text-[#fff] hover:text-[#FFC0CB] dark:hover:text-[#FFC0CB] hover:bg-transparent"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/shop"
          className="text-[#292929] dark:text-[#fff] lg:text-[#fff] hover:text-[#FFC0CB] dark:hover:text-[#FFC0CB] hover:bg-transparent"
        >
          Shop
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="text-[#292929] dark:text-[#fff] lg:text-[#fff] hover:text-[#FFC0CB] dark:hover:text-[#FFC0CB] hover:bg-transparent"
        >
          Contact
        </Link>
      </li>
      <li>
        {user && (
          <Link
            to="/add-product"
            className="text-[#292929] dark:text-[#fff] lg:text-[#fff] hover:text-[#FFC0CB] dark:hover:text-[#FFC0CB] hover:bg-transparent"
          >
            Add Product
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar absolute top-0 left-0 z-50 max-w-8xl px-6 md:px-10 lg:px-16 py-4 mx-auto">
      <div className="navbar-start text-white flex gap-6">
        <div className="dropdown text-white bg-white/20 p-2.5 md:p-3 rounded-full lg:hidden">
          <label tabIndex={0}>
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100 dark:bg-[#292929]"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img
            src="https://i.ibb.co/GPQ47j1/glow-lounge-beauty-store-logo-white.png"
            alt="Glow Lounge Beauty Store"
            className="w-48"
          />
        </Link>
      </div>

      <div className="navbar-center text-white hidden lg:flex flex-grow">
        <ul className="flex gap-8">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        <div className="px-3 py-2 flex gap-2 items-center">
          {user ? (
            <div className="flex gap-2">
              <div className="dropdown dropdown-hover">
                <label tabIndex={0}>
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User Profile"
                      className="w-[35px] h-[35px] rounded-full"
                    />
                  ) : (
                    <button className="bg-white/20 p-2.5 rounded-full text-white hover:scale-95 duration-300">
                      <HiUser />
                    </button>
                  )}
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu menu-sm p-2 shadow bg-base-100 rounded-box w-36 md:w-40 lg:w-48 dark:bg-[#292929]"
                >
                  <li className="p-2.5"> {user.displayName}</li>
                  <li>
                    <Link
                      onClick={handleSignOut}
                      className="hover:bg-[#fff] hover:text-[#FFC0CB] dark:hover:bg-[#292929] dark:text-white dark:hover:text-[#FFC0CB]"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
              <Link to="/cart">
                <button className="bg-white/20 p-2.5 rounded-full text-white hover:scale-95 duration-300">
                  <HiOutlineShoppingCart />
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="flex text-white hover:text-[#FFC0CB] border px-4 py-1 rounded-md mr-2 hover:border-[#FFC0CB]"
              >
                Login
              </Link>
            </div>
          )}

          <button
            onClick={toggleMode}
            className="bg-white/20 p-2.5 rounded-full text-white hover:scale-95 duration-300"
          >
            {darkMode ? <HiSun /> : <HiMoon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
