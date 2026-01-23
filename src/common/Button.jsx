import React from 'react'
import './Button.css'
import { FaArrowRight } from "react-icons/fa6";


const Button = ({ buttonName, isPrimary, seeMoreButton }) => {





  return (


    <button className={`${isPrimary ? "primary-button" : "resume-button"} ${seeMoreButton && "seemore-button"} `}>

      {buttonName} {seeMoreButton && <FaArrowRight fontSize={16} style={{ marginLeft: '16px' }} />}
    </button>


  )
}

export default Button