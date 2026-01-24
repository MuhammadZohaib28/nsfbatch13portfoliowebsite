import HCaptcha from '@hcaptcha/react-hcaptcha'
import React from 'react'
import { CiVoicemail } from 'react-icons/ci'
import './Contact.css'

const Contact = () => {
    return (
        <div id='contact' className='contact'>

            <h1 className='contact-title'>Get in touch</h1>

            <div className='contact-container'>

                {/* LEFT SIDE */}
                <div className='contact-info'>

                    <h2>Let's Talk</h2>

                    <p>
                        I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
                    </p>

                    <div className='contact-details'>
                        <div className='contact-item'>
                            <CiVoicemail />
                            <span>greatstackdev@gmail.com</span>
                        </div>

                        <div className='contact-item'>
                            <CiVoicemail />
                            <span>+772-825-524</span>
                        </div>

                        <div className='contact-item'>
                            <CiVoicemail />
                            <span>CA, United States</span>
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <form className='contact-form'>

                    <label>Your Name</label>
                    <input type="text" placeholder='Enter your name' />

                    <label>Your Email</label>
                    <input type="email" placeholder='Enter your email' />

                    <label>Message</label>
                    <textarea rows={7} placeholder='Type your message here'></textarea>

                    <HCaptcha
                        sitekey="your-sitekey"
                        onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
                    />

                    <button type='submit'>Send Message</button>
                </form>

            </div>
        </div>
    )
}

export default Contact
