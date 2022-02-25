import React from "react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { Link } from "react-router-dom";

const ExploreCard = ({ title, url, icon, color }) => {
  return (
    <Link to={url}>
      <div className="m-3 mt-5 w-40 rounded flex flex-col pt-7 items-center text-white justify-center h-40 bg-[#212529]">
        <CameraAltOutlinedIcon style={{ fontSize: 60, color }} />
        <h2 className="m-5">{title}</h2>
      </div>
    </Link>
  );
};

// Game
// fun
// Sports
// Educational
export default ExploreCard;
