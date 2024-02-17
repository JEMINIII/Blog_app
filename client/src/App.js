import React from 'react';
// import ReactDOM from 'react-dom';
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Write } from "./pages/Write";
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import "./style.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


const Layout = () =>{
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children :[
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/post/:id",
        element : <Single />
      },
      {
        path : "/write",
        element : <Write />
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/single",
    element: <Single />
  },
  {
    path: "/write",
    element: <Write />
  },
]);

function App() {
  return (
    <div className="app">
    <div className="container">
    <RouterProvider router={router}/>
    </div>
    </div>
  );
}

export default App;
