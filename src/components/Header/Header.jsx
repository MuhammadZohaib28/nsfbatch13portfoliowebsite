import React from 'react'
import './Header.css'
import Button from '../../common/Button'


const Header = () => {

  let menuItems = [
    {
      name: "Home",
      route: "/home",
    },
    {
      name: "About Me",
      route: "/aboutme"
    },
    {
      name: "Services",
      route: "/services"
    },
    {
      name: "My Work",
      route: "/mywork"
    },
    {
      name: "Contact",
      route: "/contact"
    },

  ]



  return (
    <header>
      <h1 className=''>NSF</h1>


      <ul>
        {

          menuItems.map((item, index) => (


            <li key={index}>{item.name}</li>


          ))

        }
      </ul>



        <Button buttonName={"Connect With Me"} isPrimary={true}/>


        <Button buttonName={"My Resume"} />


        
        


       



     
    </header>
  )
}

export default Header