import React, { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const SideBarLinks = ({ name, isActive, handleChange, path, Icon }) => {
  // const [activeItem, setActiveItem] = useState();

  // const handleChange = (name) => {
  //   setActiveItem(name);
  //   console.log(activeItem);
  // };

  return (
    <div
      style={isActive ? { backgroundColor: "rgb(55, 65, 81)" } : {}}
      className="bg-[#212529] hover:bg-[#374151] rouned h-12 w-full cursor-pointer border-x-1 mr-4 px-4 text-white border-r-[#212529] border-l-[#212529] flex items-center"
      onClick={(e) => handleChange(name)}
    >
      <Link to={path} className="flex items-center">
        {/* <GridViewIcon className="mx-4" /> */}
        <Icon className="mx-4" />
        <span style={{fontFamily: 'Lato'}} className="flex items-center">{name}</span>
      </Link>
    </div>
  );
};

export default SideBarLinks;
