import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";


const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/gallery",
      element: <Gallery />,
      id: 2,
    },
    {
      link: "/about",
      element: <About />,
      id: 3,
    }
   
  ];

  
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id}/>
      ))}
    </Routes>
  );
};

export default Routing;
