import React from 'react'

import './AboutMe.css'

const AboutMe = () => {
    return (
        <div>

            <h1>About Me</h1>

            <div>
                <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>


                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>


                <div>
                    <div className='skill-container'>
                        <h2>HTML5 & CSS</h2>
                        <div className='bar'></div>
                    </div>


                    <div>
                        <h2>ReactJS</h2>
                        <div></div>
                    </div>


                    <div>
                        <h2>JavaScript</h2>
                        <div></div>
                    </div>


                    <div>
                        <h2>Bootstrap & TailwindCSS</h2>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe