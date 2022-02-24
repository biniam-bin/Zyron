import React, { useState } from "react";
import SideBarLinks from "./SideBarLinks";
import GridViewIcon from "@mui/icons-material/GridView";
import { Link } from "react-router-dom";
import Links from "./Links";


const SideBar = () => {
   const [activeItem, setActiveItem] = useState("Home");

   const handleChange = (name) => {
     setActiveItem(name);
   };

  return (
    <div className="lg:flex flex-col  items-center hidden bg-[#212529] lg:w-80 z-20 shadow-xl shadow-[#000000] ">
      <div className="container h-20">
        <div className="logo-container h-16 flex items-center justify-center text-center">
          <h2 className="logo h-16 flex items-center justify-center text-white">
            The App Logo
          </h2>
        </div>
      </div>
      <div className="profile  h-28">
        <div className="profile-pic-wrapper flex items-center justify-center rounded-full bg-transparent border-cyan-400 border h-28 w-28">
          <img
            src="https://picsum.photos/100/100"
            className="w-24 h-24 rounded-full"
            alt=""
          />
        </div>
      </div>
      <div className="user-info h-12 text-center pb-9 flex items-center justify-center flex-col mt-2">
        <h2 className="user-name mt-7 text-lg font-serif h-6 text-white font-black">
          Biniam Daniel
        </h2>
        <p className="user-link text-xs text-gray-500 mt-1 font-thin">
          @biniam_daniel
        </p>
        <p className="user-link text-xs text-gray-300 mt-1 font-thin">
          0xc5d...cd215
        </p>
      </div>
      <div className="user-data flex items-center justify-between px-2 text-gray-200 h-24 w-full">
        {/* ///////////////////////////////////////////////////////// */}
        <div className="posts w-full flex flex-col py-8 items-center justify-center h-24 ">
          <h2 className="vaue text-gray-300" style={{ fontSize: "15px" }}>
            40
          </h2>
          <p className="text-gray-500 text-sm" style={{ fontSize: "12px" }}>
            posts
          </p>
        </div>
        <div className="w-px bg-gray-400 h-8"></div>
        {/* ///////////////////////////////////////////////////////// */}
        {/*  */}
        <div className="posts w-full flex flex-col py-8 items-center justify-center h-24 ">
          <h2 className="vaue text-gray-300" style={{ fontSize: "15px" }}>
            2.5k
          </h2>
          <p className="text-gray-500 text-sm" style={{ fontSize: "12px" }}>
            followers
          </p>
        </div>
        <div className="w-px bg-gray-400 h-8"></div>
        {/* ///////////////////////////////////////////////////////// */}
        {/*  */}
        <div className="posts w-full flex flex-col py-8 items-center justify-center h-24 ">
          <h2 className="vaue text-gray-300" style={{ fontSize: "15px" }}>
            124
          </h2>
          <p className="text-gray-500 text-sm" style={{ fontSize: "12px" }}>
            following
          </p>
        </div>
        {/*  */}
      </div>
      {/* ///////////////////////////////////////////////////////// */}

      {/* <SideBarLinks
        name={"Home"}
        path={"/"}
        isActive={activeItem == "Home" ? true : false}
        handleChange={(name) => handleChange(name)}
        />
      <SideBarLinks
        name={"New"}
        path={"/new"}
        isActive={activeItem == "New" ? true : false}
        handleChange={(name) => handleChange(name)}
        />
      <SideBarLinks
        name={"Feed"}
        path={"/feed"}
        isActive={activeItem == "Feed" ? true : false}
        handleChange={(name) => handleChange(name)}
        />
      <SideBarLinks
        name={"Direct"}
        path={"/direct"}
        isActive={activeItem == "Direct" ? true : false}
        handleChange={(name) => handleChange(name)}
      /> */}
      <Links/>
    </div>
  );
};

export default SideBar;
