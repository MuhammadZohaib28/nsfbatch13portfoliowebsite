import HCaptcha from '@hcaptcha/react-hcaptcha'
import React from 'react'
import { CiVoicemail } from 'react-icons/ci'

const Contact = () => {
    return (
        <div>

            <h1>Get in touch</h1>


            <div>

                <div>

                    <h1>Let's Talk</h1>

                    <p>
                        I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
                    </p>


                    <div>
                        <div>
                            <CiVoicemail />
                            <span>greatstackdev@gmail.com</span>
                        </div>


                        <div>
                            <CiVoicemail />
                            <span>+772-825-524</span>
                        </div>


                        <div>
                            <CiVoicemail />
                            <span>CA, United States</span>
                        </div>



                    </div>

                </div>



                <form>

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

                </form>

            </div>



        </div>
    )
}

export default Contact