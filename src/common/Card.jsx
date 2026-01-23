import React from 'react'
import './Card.css'

const Card = ({ isServiceCard, number, headingName, description, url, imageSource, isImageCard }) => {
    return (
        <div className={isImageCard ? 'image-card' : 'card'}>
            {isServiceCard ? (
                <>
                    <span>{number}</span>

                    <h1 className='hero-heading-name'>{headingName}</h1>

                    <p>{description}</p>

                    <h3>Read More</h3>
                </>
            ) : (
                <a href={url}>
                    <img src={imageSource} alt="" className='card-image' />
                </a>
            )}
        </div>
    )
}

export default Card