import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();
  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    console.log(page, tempBtn)
    openSubmenu(page, { center, bottom });
  }
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")){
      closeSubmenu();
    }

  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="stripe logo" className='nav-logo'></img>
          <button className='btn toggle-btn' onClick={openSidebar}>
              <FaBars></FaBars>
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>Prodotti</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>Sviluppatori</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>Aziende</button>
          </li>
        </ul>
        <button className='btn signin-btn'>Accedi</button>
      </div>
    </nav>
  )
}

export default Navbar
