import React from 'react'
import profilepicture from '../../images/mypicture.png'

import './HeroSection.css'
import Button from '../../common/Button'

const HeroSection = () => {

    let myName = "Zohaib";

    return (
        <div className='herosection'>

            <img src={profilepicture} alt="" />


            <div className='hero-heading'>

                <span className='hero-heading-name'>I'm {myName}. </span>

                <span>A Frontend Developer based in Karachi, Pakistan.</span>



            </div>


            <p className='herosection-paragraph'>I'm a frontend developer based in Karachi, Pakistan having 1 year of expeirence working on multiple projects and on freelacing projects.  </p>


            <div className='herosection-btns'>
                <Button buttonName={"Connect with me"} isPrimary={true} />
                <Button buttonName={"My Resume"} />
            </div>



        </div>
    )
}

export default HeroSection