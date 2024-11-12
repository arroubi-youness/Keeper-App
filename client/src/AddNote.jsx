import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import axios from 'axios';


function AddNote(props) {
  const [test, setTest] = React.useState(false);

  const [InputNote, SetNote] = React.useState({
    TitleNote: "",
    BodyNote: "",
  });
  const [index, setIndex] = React.useState(0);
  function MangeVaule(event) {
    const { name, value } = event.target;
    SetNote((PervValue) => ({
      ...PervValue,
      [name]: value,
    }));
  }
  const savenote= async(e)=>{
    const data={id_user:localStorage.getItem("id_user"),Note:InputNote};
    try {

      const response = await axios.post('http://localhost:5000/api/saveNote', data);

     console.log('Response:', response.data); 
    }catch (error) {
      console.error('Error:', error);
      // toast.error(`Error: ${error.response.data.message || 'Something went wrong!'}`);
      

     }}

  function AddNon() {
    props.MangeTable((PreiousValue) => [
      ...PreiousValue,
      { ...InputNote, id: index },
    ]);
    SetNote({ TitleNote: "", BodyNote: "" });

    setIndex(index + 1);
    savenote();
  }
  function appearStyle() {
    setTest(true);
  }

  return (
    <div className="w-full flex justify-center mb-10 ml-5">
      <div className="w-[40%] {$test ? 'h-[140px]' : 'h-[50px]'} mt-4 bg-white ml-4 shadow-xl rounded-[10px] flex flex-col">
        <input
          onChange={MangeVaule}
          onFocus={appearStyle}
          value={InputNote.TitleNote}
          name="TitleNote"
          className="focus:border-transparent focus:outline-transparent w-11/12 mt-3  ml-3 mclaren-regular"
          placeholder=" Title"
        />
        {test ? (
          <textarea
            onChange={MangeVaule}
            value={InputNote.BodyNote}
            name="BodyNote"
            style={{ minHeight: "80px" }}
            className="focus:border-transparent border-none resize-none focus:outline-transparent outline-none mt-3 w-11/12    ml-3 mclaren-regular"
            placeholder="Write the Note here. . ."
          />
        ) : null}
        <Zoom in={test}>
          <div className="relative top-4 mt-[-3%] ml-[90%]">
            <button
              onClick={AddNon}
              className=" w-[35px] h-[35px]  text-sm hover:bg-slate-300      text-white rounded-[50px] bg-[#f5ba13] mclaren-regular "
            >
              <AddIcon />
            </button>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default AddNote;
