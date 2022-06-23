
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routing from "./Routing";

import "antd/dist/antd.css";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;


/*
фильтрация
пагинация
поиск
роутинг
загрузка изображений
*/
