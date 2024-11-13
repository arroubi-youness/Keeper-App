import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

  function Note(props){

    function DeteNote() {
      props.MangeTttable(prevValue => 
          prevValue.filter(item => item.id !== props.id)
      );
  }
  
    return  <div className="w-[250px] h-fit  mt-[6px] ml-8 bg-[#ffffff] shadow-lg rounded-[10px]">
        <h1 className="text-black font-medium ml-3  pt-2 mclaren-regular">{props.title} </h1>
        <p className="text-black ml-3 mclaren-regular  font-extralight opacity-60 ">{props.note}</p>
        <div className="w-full flex justify-end  mt-2 mr-2 font-medium"><button onClick={DeteNote}  className="bg-transparent  mr-3 mb-1 text-[#f5ba13] text-sm"><DeleteIcon/></button></div>
     </div>;
  }
  export default Note;