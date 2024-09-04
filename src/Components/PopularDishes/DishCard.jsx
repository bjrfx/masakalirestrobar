import React from 'react'
const DishCard = ({img_2, name, description, price, href}) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <a href={href} className="fh5co-card-item image-popup">
                <figure>
                    <div className="overlay"><i className="ti-plus"></i></div>
                    <img src={img_2} alt="Food" className="img-responsive" />
                </figure>
                <div className="fh5co-text">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p><span className="price cursive-font">{price}</span></p>
                </div>
            </a>
        </div>
    )
}

export default DishCard