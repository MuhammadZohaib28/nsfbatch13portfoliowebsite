import React from 'react'
import './MyServices.css'
import Card from '../../common/Card'

const MyServices = () => {

    let servicesData = [
        {
            Sno: 1,
            serviceName: "Web Development",
            serviceDescription: "Building responsive and dynamic websites using modern technologies ."
        },
        {
            Sno: 2,
            serviceName: "UI/UX Design",
            serviceDescription: "Designing user-friendly interfaces and enhancing user experience."
        },
        {
            Sno: 3,
            serviceName: "Social Media",
            serviceDescription: "Providing expert advice on frontend development and best practices."
        },
        {
            Sno: 4,
            serviceName: "Consultation",
            serviceDescription: "Offering guidance on project architecture and technology stack."
        },
        {
            Sno: 5,
            serviceName: "Performance Optimization",
            serviceDescription: "Improving website performance and loading times."
        },
        {
            Sno: 6,
            serviceName: "Cross-Browser Compatibility",
            serviceDescription: "Ensuring websites function seamlessly across different browsers."
        }
    ]

    return (
        <div className='services-section' id='myServices'>

            <h1 className='hero-heading-name about-heading'>My Services</h1>



            <div className='services-card-container'>

                {servicesData.map((item, index) => (

                    <>
                        <Card isServiceCard={true} number={item.Sno} headingName={item.serviceName} description={item.serviceDescription} />

                        
                    </>
                ))}

            </div>


        </div>


    )
}

export default MyServices