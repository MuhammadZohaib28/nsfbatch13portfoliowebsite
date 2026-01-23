import React from 'react'
import './LatestWork.css'
import Card from '../../common/Card'
import Button from '../../common/Button'

const LatestWork = () => {

    let latestWork = [
        {
            image: "https://images.unsplash.com/photo-1610376094992-6c3913ce221c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "https://unsplash.com/photos/white-board-on-black-metal-fence-8M07EF_QGt0",
        },
        {
            image: "https://images.unsplash.com/photo-1610376094992-6c3913ce221c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "https://unsplash.com/photos/white-board-on-black-metal-fence-8M07EF_QGt0",
        },
        {
            image: "https://images.unsplash.com/photo-1610376094992-6c3913ce221c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "https://unsplash.com/photos/white-board-on-black-metal-fence-8M07EF_QGt0",
        },
        {
            image: "https://images.unsplash.com/photo-1610376094992-6c3913ce221c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "https://unsplash.com/photos/white-board-on-black-metal-fence-8M07EF_QGt0",
        },
        {
            image: "https://images.unsplash.com/photo-1610376094992-6c3913ce221c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "https://unsplash.com/photos/white-board-on-black-metal-fence-8M07EF_QGt0",
        },
        {
            image: "https://images.unsplash.com/photo-1610376094992-6c3913ce221c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "https://unsplash.com/photos/white-board-on-black-metal-fence-8M07EF_QGt0",
        },

    ]


    return (
        <div className='services-section latestwork-section '>

            <h1 className='hero-heading-name about-heading'>Latest Work</h1>



            <div className='services-card-container'>

                {latestWork.map((item, index) => (

                    <>
                        <Card isImageCard={true} isServiceCard={false} imageSource={item.image} url={item.url} />

                    </>
                ))}

            </div>

            <div className='seemorebtn'>

                <Button buttonName={"See More"} seeMoreButton={true} />
            </div>


        </div>
    )
}

export default LatestWork