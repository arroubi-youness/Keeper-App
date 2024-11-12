import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Header(props) {


  
  return (
    <div className="w-full h-[90px]">
      <div className="mt-0 w-full bg-[#f5ba13]  h-5/6 flex justify-start items-center shadow-md">
        <h1 className="text-3xl font-medium text-white ml-6 mb-1 mclaren-regular">
          <HighlightIcon />
        </h1>
        <h1 className="text-3xl font-medium text-white   mt-1 mclaren-regular">
          Keeper
        </h1>
        <div onClick={props.appearLogout}   className="absolute right-1 top-3  mr-8 font-semibold">
        <h1 className="text-[42px] font-light cursor-pointer text-white ml-6   mclaren-regular">
        <i class='bx bx-user-circle'></i>
        </h1>
        </div>
      </div>
    </div>
  );
}
export default Header;
