import React from 'react'
import { Link } from 'react-router-dom'
import { LuPanelLeft, LuPanelRight } from "react-icons/lu";
import { useState } from 'react'
import { SidebarData } from './SidebarData';
import './Navbar.css'
const Navbar = () => {
  const [sidebar, setsidebar] = useState(false);
  const toggleSidebar = () => {
    setsidebar(!sidebar);
  }

  return (
    <div className={sidebar ? 'navbar-active' : 'navbar'}>

      <div className='logo'>
        {
          sidebar == false ?
            <Link to='#' className='openlogo'><LuPanelLeft size={25} onClick={toggleSidebar} /></Link>
            :
            <Link to='#' className='closelogo' onClick={toggleSidebar}><LuPanelRight size={25} /></Link>
        }
      </div>
      <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <h1>Tools</h1>
          {
            SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>

    </div>
  )
}

export default Navbar
