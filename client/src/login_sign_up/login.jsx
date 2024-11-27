import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; 
import { Navigate, useNavigate } from 'react-router-dom';
import UseAuth from "../hooks/UseAuth";  


import axios from 'axios';

 
function Form(props) {

  const { login } = UseAuth();
    const[isSigned,setSign]=useState(true);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");

const navigate = useNavigate();



    function setTofalse(){
        setSign(false);
    }
    function setTotrue(){
        setSign(true);
    }
    

   const handleForm= async(e)=>{
    e.preventDefault();
    // navigate("../App");
    const url = isSigned ? 'http://localhost:5000/api/login' :'http://localhost:5000/api/signup' ;
    const data = isSigned?{email,password}:{username,email,password};
    console.log(data);

    try {
         const response = await axios.post(url, data);

        console.log('Response:', response.data); 
        if (response.status === 201) {
           toast.success(response.data.message);
           if(response.data.message!=="User added successfully!"){
            login(response.data.accessToken);
            localStorage.setItem("id_user",response.data.userId);
            localStorage.setItem("name_user",response.data.username);



           }
           else{
             if (!isSigned) {
              setSign(true); 
               setEmail('');
          setPassword('');
       
           } 
           }
          
      }
      

       } catch (error) {
        console.error('Error:', error);
        toast.error(`Error: ${error.response.data.message || 'Something went wrong!'}`);
        

       }
    };


   
    
  return (
    <section className="bg-slate-300 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 shadow-xl">
     
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign {isSigned?'in to':'up'}  your account
          </h1>
          <form className="space-y-4 md:space-y-6"  onSubmit={handleForm}>
          {isSigned?<div></div>:<div >
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" alpha"
                required
              />
            </div>}
         
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                 
                
              </div>
              <a href="/fyuff" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[#f5ba13] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {isSigned?'Log in':'Sign up'}
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
               {isSigned? 'Don’t have an account yet?  ':'I already have  an account  '}
              <button onClick={isSigned?setTofalse:setTotrue} type="subimt"  className="font-medium text-primary-600 hover:underline dark:text-primary-500">
               {isSigned?'Sign up':'Log in'}
              </button>
               
            </p>
          </form>
        </div>
      </div>
    </div>
    <ToastContainer />

  </section>
  );
}

export default Form;
