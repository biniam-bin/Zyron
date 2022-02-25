import React, { useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewIcon from "@mui/icons-material/GridView";
import {Link} from "react-router-dom"
import Links from "./Links";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <div className="navbar w-full fixed h-14 flex items-center justify-center bg-[#212529] z-20 ">
        <div className="search-wrapper flex items-center w-4/6 ">
          <form className=" w-full flex items-center">
            <div className="search flex items-center bg-[#43474a] h-9 p-0 rounded-md w-11/12 md:4/6 lg:w-4/6 text-gray-400">
              <SearchSharpIcon className=" mr-2 m-1" />
              <input placeholder="Search here" className="h-9 bg-transparent w-full focus:outline-none" />
            </div>
          </form>
        </div>
        <div className="lg:opacity-0 flex cursor-pointer items-center text-white">
          <MenuRoundedIcon onClick={handleToggleMenu} />
        </div>
      </div>
      {toggleMenu && (
        <div className="h-auto z-50 absolute w-full">
          <div
            onClick={() => setToggleMenu(false)}
            className="dropdown h-20 z-40 w-full bg-[#212529]"
          >
            {/* <div className="nav-item bg-[#212529] hover:bg-[#374151] rouned h-12 w-full cursor-pointer border-x-1 mr-4 px-4 text-white border-r-[#212529] border-l-[#212529] flex items-center">
              <Link to="/" className="flex items-center">
                <GridViewIcon className="mx-4" />
                Home
              </Link>
            </div>
            <div className="nav-item bg-[#212529] hover:bg-[#374151] rouned h-12 w-full cursor-pointer border-x-1 mr-4 px-4 text-white border-r-[#212529] border-l-[#212529] flex items-center">
              <Link to="/feed" className="flex items-center">
                <GridViewIcon className="mx-4" />
                Feed
              </Link>
            </div>
            <div className="nav-item bg-[#212529] hover:bg-[#374151] rouned h-12 w-full cursor-pointer border-x-1 mr-4 px-4 text-white border-r-[#212529] border-l-[#212529] flex items-center">
              <Link to="/" className="flex items-center">
                <GridViewIcon className="mx-4" />
                Home
              </Link>
            </div>
            <div className="nav-item bg-[#212529] hover:bg-[#374151] rouned h-12 w-full cursor-pointer border-x-1 mr-4 px-4 text-white border-r-[#212529] border-l-[#212529] flex items-center">
              <Link to="/" className="flex items-center">
                <GridViewIcon className="mx-4" />
                Home
              </Link>
            </div> */}
            <Links />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
