import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './les_pages/login';
import  App  from '../src/App';
 import { BrowserRouter,Routes,Route,Navigate  } from 'react-router-dom';
 import { AuthProvider } from './context/AuthProvider';  
 import UseAuth from "./hooks/UseAuth";  


const ProtectedRoute = ({ children  }) => {
    const { isAuthenticated } = UseAuth(); 
    return isAuthenticated() ? children  : <Navigate to="/login" />;
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>

    <AuthProvider>
        <Routes>
            <Route index element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route 
                path='/App' 
                element={
                <ProtectedRoute>
                    <App />
                </ProtectedRoute>
                } 
            />
        </Routes>
</AuthProvider>
    </BrowserRouter>

);

 
