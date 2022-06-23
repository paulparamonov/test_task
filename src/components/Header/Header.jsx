import React from 'react'
import { Link, useLocation } from "react-router-dom";

import './Header.css'

function Header() {
    const location = useLocation();

    const NAV_ITEMS = [
        {
          title: "Главная",
          link: "/",
          id: 1,
        },
        {
          title: "Галерея",
          link: "/gallery",
          id: 2,
        },
        {
          title: "Обо мне",
          link: "/about",
          id: 3,
        }
      ];
  return (
    <div className='header'>
    <div className='container'>
    <div className='header__inner'>
    <Link to="/">
          <img className="logo"
            width="100px"
            src="https://www.logosvgpng.com/wp-content/uploads/2021/02/task-software-logo-vector.png"
            alt="logo"
          />
    </Link>
    <div className="navbar">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div></div>

       
    </div>
    </div>
    </div>
  )
}

export default Header;
