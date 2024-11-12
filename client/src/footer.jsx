import React from "react";
function Footer(){
    let  date  =new Date();
    let year = date.getFullYear();
    
    return <div className="w-full h-1/6 flex flex-col justify-end   mt-4    "><div className="w-full h-1/2  flex items-center justify-center  "><p className="text-xl text-[#d0d5db] mb-0 ">Copyright ⓒ  {year}</p></div></div>;
}

export default Footer;