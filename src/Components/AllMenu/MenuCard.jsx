import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import star from '../../assets/icons/star.svg';
import glutenFreeIcon from '../../assets/icons/gluten-free.png';
import nutsIcon from '../../assets/icons/nuts.png';
import veganIcon from '../../assets/icons/vegan.png';
import './MenuCard.css';

const MenuCard = ({
    itemDescription,
    itemImg,
    itemName,
    itemPrice,
    openModal,
    recommended,
    containsGluten,
    containsNuts,
    vegan,
    itemChoiceOfGravy
}) => {
    const [imageLoaded, setImageLoaded] = useState(false); // State for image load

    // Function to handle image load
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="fh5co-card-item" onClick={() => imageLoaded && openModal(itemImg)}>
                <figure>
                    <div className="overlay"><i className="ti-plus"></i></div>
                    {!imageLoaded && <Skeleton height={200} width="100%" />} {/* Show skeleton until image is loaded */}
                    <img
                        src={itemImg}
                        alt="Food"
                        className={`img-responsive ${!imageLoaded ? 'hidden' : ''}`}
                        onLoad={handleImageLoad}
                        style={{ display: imageLoaded ? 'block' : 'none' }} // Hide image until it's loaded
                    />
                </figure>
                <div className="fh5co-text">
                    <h2 className="item-name">
                        {!imageLoaded ? (
                            <Skeleton width={150} />
                        ) : (
                            <>
                                {itemName}
                                {recommended && <img src={star} alt='star' width="20rem" height="20rem" style={{ marginLeft: "5px" }} />}
                                {!containsGluten && <img src={glutenFreeIcon} alt='Gluten Free' width="20rem" height="20rem" style={{ marginLeft: "5px" }} />}
                                {containsNuts && <img src={nutsIcon} alt='Nuts' width="20rem" height="20rem" style={{ marginLeft: "5px" }} />}
                                {vegan && <img src={veganIcon} alt='Vegan' width="20rem" height="20rem" />}
                            </>
                        )}
                    </h2>
                    {!imageLoaded ? (
                        <Skeleton width={100} />
                    ) : (
                        <b>{itemChoiceOfGravy}</b>
                    )}
                    <p>{!imageLoaded ? <Skeleton count={2} /> : itemDescription}</p>
                    <p className="item-price">
                        <span className="price cursive-font">{!imageLoaded ? <Skeleton width={50} /> : `$${itemPrice}`}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;