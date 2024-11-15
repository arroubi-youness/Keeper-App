import React from 'react';
import UseAuth from "./hooks/UseAuth";  


const Logout = () => {
   const {logout} = UseAuth();

  return (
       <div className="w-[300px] mx-auto bg-white absolute right-8 z-10 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-4 pb-6">
          <div className="text-center my-4">
            
            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">Welcome</h3>
              <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                
                {localStorage.getItem('name_user')}
              </div>
            </div>
          </div>
          <div className="flex gap-2 px-2">
            <button onClick={logout} className="flex-1 rounded-full bg-[#f5ba13]   text-white font-bold     px-1 py-2">
              Log out 
            </button>
           
          </div>
        </div>
       
      </div>
   );
};

export default Logout;
