import React, { useState } from 'react'
import './Header.css'
import Button from '../../common/Button'
import { FaBars, FaBurger } from 'react-icons/fa6'


const Header = () => {


  const [menuOpen, setMenuOpen] = useState(false);

  let menuItems = [
    {
      name: "Home",
      route: "#heroSection",
    },
    {
      name: "About Me",
      route: "#aboutMe"
    },
    {
      name: "Services",
      route: "#myServices"
    },
    {
      name: "My Work",
      route: "#latestWork"
    },
    {
      name: "Contact",
      route: "#contact"
    },

  ]



  return (
    <header className='header'>
      <h1 className=''>NSF</h1>



      <div className='small-screen-menu-button'>
        <FaBars onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      <div>
        {menuOpen && (
          <ul className='header-responsive-menu'>
            {
              menuItems.map((item, index) => (
                <li key={index}>
                  <a className='menu-items' href={item.route}>{item.name}</a>
                </li>
              ))
            }
          </ul>
        )}
      </div>




      <ul className='menu-items-bigger'>
        {

          menuItems.map((item, index) => (


            <li key={index}>
              <a className='menu-items ' href={item.route}>{item.name}</a>


            </li>


          ))

        }
      </ul>




      <div className='small-screen-button'>

        <Button buttonName={"Connect With Me"} isPrimary={true} />
      </div>






    </header>
  )
}

export default Header