import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import Menu from './components/Menu';
import Orders from './components/Orders';


const router =createBrowserRouter ([
  {path:"/",element: <Login/>},
  {path:"/menu",element: <Menu/>},
  {path:"/orders",element: <Orders/>},


])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

