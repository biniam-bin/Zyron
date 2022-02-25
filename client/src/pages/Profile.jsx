import React from "react";
import "./profile.css";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
// background-image:#ff0000;background-image:
// radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0, transparent 50%),
// radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0, transparent 50%),
// radial-gradient(at 0% 50%, hsla(355,85%,93%,1) 0, transparent 50%),
// radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0, transparent 50%),
// radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0, transparent 50%),
// radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0, transparent 50%),
// radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0, transparent 50%);

const Profile = () => {
  return (
    <div className="profile h-auto flx justify-center">
      <div className="profile-bg w-full rounded-lg h-60 "> </div>
      <div className="profile  h-32">
        <div className="profile-pic-wrapper sticky -mt-8 right-9/12 ml-20 flex items-center justify-center rounded-full bg-transparent border-cyan-400 border h-32 w-32">
          <img
            src="https://picsum.photos/100/100"
            className="w-32 h-32 rounded-full"
            alt=""
          />
        </div>
      </div>
      <div className="user-info items-center flex flex-col w-full mt-10 text-gray-400 justify-center ">
        <div className="bg-[#212529] w-10/12 h-60 rounded-lg p-8 shadow-xl shadow-[#000000]">
          <div className="user-info-container ">
            <form>
              <div className="form-row flex items-center justify-start h-8">
                <h4 className="mr-3">Name</h4>
                <input
                  placeholder="Biniam Daniel"
                  className="  flex items-center px-5 bg-[#43474a] h-9 p-0 rounded-md w-full md:w-11/12 md:4/6 lg:w-4/6 text-gray-400 focus:outline-none"
                />
              </div>
              <div className="form-row flex items-center justify-start h-8 mt-3 -ml-1">
                <h4 className="mr-3">Profile</h4>
                <label for="file" className="cursor-pointer">
                  {/* <img
                    src="https://picsum.photos/100/100"
                    className="h-10 w-10"
                    // style="pointer-events: none"
                  /> */}
                  <CameraAltOutlinedIcon />
                </label>
                <input
                  placeholder="Biniam Daniel"
                  id="file"
                  type="file"
                  className="  flex items-center px-5 bg-[#43474a] h-9 p-0 rounded-md w-full md:max-w-28 md:4/6 lg:w-4/6 text-gray-400 focus:outline-none"
                />
              </div>
              <input
                type="submit"
                className="h-11 w-28 mt-5 bg-[#eb7922] rounded-md text-gray-800"
                value="Save"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="flex mt-5 justify-center">
        <div className="w-full h-72 bg-[#212529] rounded-md shadow-xl shadow-[#000000]"></div>
      </div>
    </div>
  );
};

export default Profile;
