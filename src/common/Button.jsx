import React from 'react'
import './Button.css'

const Button = ({ buttonName, isPrimary }) => {
  return (


    <button className={`${isPrimary ? "primary-button" : "resume-button"} `}>


      {buttonName}
    </button>


  )
}

export default Button