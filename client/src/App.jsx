import React from "react";
import Header from "./headr";
// import Footer from "./footer";
import Note from "./Note";
import AddNote from "./AddNote";
import Logout from "./logout";


function App() {
  const [Table, SetTable] = React.useState([]);

  const [showLogout,setShow]=React.useState(false);
  function appearLogout(){
    showLogout?setShow(false):setShow(true);
  }
  return (
    <div
      className="h-screen flex flex-col justify-between overflow-y-auto overflow-x-hidden bg-[#eeeeee]"
      style={{
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/cubes.png")',
      }}
    >
         
      <div className="relative">
      <Header appearLogout={appearLogout}/>
      {showLogout?<Logout/>:<></>}
      
</div>
<div>
      <AddNote AddTable={Table} MangeTable={SetTable} />
      </div>

      <div className="h-4/6   ">
        <div className="grid_first   mt-auto">
          {Table.map((note, index) => (
            <Note
              key={index}
              id={note.id}
              title={note.TitleNote}
              note={note.BodyNote}
              AddTttable={Table}
              MangeTttable={SetTable}
            />
          ))}
        </div>
       </div>
      <div className="mt-10 relative">
      </div>

    </div>
  );
}

export default App;
