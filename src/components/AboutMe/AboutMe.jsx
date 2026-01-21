import React from 'react'

import './AboutMe.css'



const AboutMe = () => {


    let aboutMeStats = [
        {
            years: "10+",
            description: "Years of Experience"
        },
        {
            years: "50+",
            description: "Projects Completed"
        },
        {
            years: "30+",
            description: "Happy Clients"
        },
    ]



    return (
        <div className='about-section'>

           

            <h1 className='hero-heading-name about-heading'>About Me</h1>

            <div className='about-section-paragraph'>
                <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>


                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>


                <div className='skills-parent'>
                    <div className='skill-container'>
                        <h2>HTML5 & CSS</h2>
                        <div className='bar first'></div>
                    </div>


                    <div className='skill-container'>
                        <h2>ReactJS</h2>
                        <div className='bar second'></div>
                    </div>


                    <div className='skill-container'>
                        <h2>JavaScript</h2>
                        <div className='bar third'></div>
                    </div>


                    <div className='skill-container'>
                        <h2 className='long-name'>Bootstrap & TailwindCSS</h2>
                        <div className='bar fourth'></div>
                    </div>
                </div>


                <div className='stats-container'>


                    {

                        aboutMeStats.map((item, index) => (

                            <div className='line-parent'>

                                <div className='stats-card'>
                                    <h1 className='hero-heading-name'>{item.years}</h1>
                                    <p>{item.description}</p>
                                </div>

                                <div className='line'></div>
                            </div>



                        ))

                    }



                </div>



            </div>
        </div>
    )
}

export default AboutMe