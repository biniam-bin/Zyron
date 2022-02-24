import React, { useState } from "react";
import SideBarLinks from "./SideBarLinks";
import { Link } from "react-router-dom";

import GridViewIcon from "@mui/icons-material/GridView";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Links = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleChange = (name) => {
    setActiveItem(name);
  };

  return (
    <>
      <SideBarLinks
        name={"Home"}
        Icon={GridViewIcon}
        path={"/main"}
        isActive={activeItem == "Home" ? true : false}
        handleChange={(name) => handleChange(name)}
      />
      <SideBarLinks
        name={"Explore"}
        Icon={SearchSharpIcon}
        path={"/main/explore"}
        isActive={activeItem == "Explore" ? true : false}
        handleChange={(name) => handleChange(name)}
      />
      <SideBarLinks
        name={"Profile"}
        Icon={PersonOutlineOutlinedIcon}
        path={"/main/profile"}
        isActive={activeItem == "Profile" ? true : false}
        handleChange={(name) => handleChange(name)}
      />
      <div
        // style={isActive ? { backgroundColor: "rgb(55, 65, 81)" } : {}}
        className="bg-[#212529] hover:bg-[#374151] rouned h-12 w-full cursor-pointer border-x-1 mr-4 px-4 text-red-500 border-r-[#212529] border-l-[#212529] flex items-center"
        // onClick={(e) => handleChange(name)}
      >
        <Link
          to="/login"
          className="flex items-center"
          style={{ fontFamily: "Lato" }}
        >
          {/* <GridViewIcon className="mx-4" /> */}
          <LogoutOutlinedIcon className="mx-4" />
          Logout
        </Link>
      </div>
    </>
  );
};

export default Links;
