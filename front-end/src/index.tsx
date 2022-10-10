import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginPage } from './pages/login';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/login' element={<LoginPage/>} /> */}
       
  </Routes>
</BrowserRouter>
);



