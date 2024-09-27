import React, { useState } from 'react';
import img_1 from '../../assets/food/butterchickenfries.jpg';
import img_2 from '../../assets/food/chickentikkamasala.jpeg';
import img_3 from '../../assets/food/butterchicken.jpg';
import img_4 from '../../assets/food/hotnwings.jpg';
import img_5 from '../../assets/food/potatotornado.jpeg';
import img_6 from '../../assets/food/paneerpakora.jpg';
import Modal from '../Modal/Modal'; // Import the Modal component
import { Link, useNavigate } from 'react-router-dom';
import './PopularDishes.css';

const PopularDishes = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const openModal = (imgSrc) => {
		setSelectedImage(imgSrc);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedImage(null);
	};
	const navigate = useNavigate();
    const handleClick = (to) => (e) => {
        e.preventDefault();
        navigate(to);
        window.scrollTo(0, 450);
    };

	return (
		<div className="gtco-section">
			<div className="gtco-container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center gtco-heading">
						<h2 className="cursive-font primary-color">Popular Dishes</h2>
						<p>Discover the most loved dishes at Masakali Restro Bar, offering an authentic blend of flavors and tradition.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="fh5co-card-item" onClick={() => openModal(img_1)}>
							<figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_1} alt="Food" className="img-responsive" />
							</figure>
							<div className="fh5co-text">
								<h2>Butter Chicken Fries</h2>
								<p>Crispy fries topped with creamy butter chicken & garnished with fresh herbs.</p>
								<p><span className="price cursive-font">$19</span></p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="fh5co-card-item" onClick={() => openModal(img_2)}>
							<figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_2} alt="Food" className="img-responsive" />
							</figure>
							<div className="fh5co-text">
								<h2>Chicken Tikka Masala</h2>
								<p>Chicken tikka cooked in a masala gravy with tomatoes, onions, ginger, garlic, mixed peppers & cilantro.</p>
								<p><span className="price cursive-font">$24</span></p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="fh5co-card-item" onClick={() => openModal(img_3)}>
							<figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_3} alt="Food" className="img-responsive" />
							</figure>
							<div className="fh5co-text">
								<h2>Butter Chicken</h2>
								<p>Masakali's signature dish - needs no description.</p>
								<p><span className="price cursive-font">$24</span></p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="fh5co-card-item" onClick={() => openModal(img_4)}>
							<figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_4} alt="Food" className="img-responsive" />
							</figure>
							<div className="fh5co-text">
								<h2>Hot & Wings</h2>
								<p>Spicy chicken wings, fried to crispy perfection & coated in a fiery sauce.</p>
								<p><span className="price cursive-font">$19</span></p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="fh5co-card-item" onClick={() => openModal(img_5)}>
							<figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_5} alt="Food" className="img-responsive" />
							</figure>
							<div className="fh5co-text">
								<h2>Potato Tornado</h2>
								<p>Spiral-cut potatoes fried until crispy, seasoned with spices.</p>
								<p><span className="price cursive-font">$9</span></p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-6">
						<div className="fh5co-card-item" onClick={() => openModal(img_6)}>
							<figure>
								<div className="overlay"><i className="ti-plus"></i></div>
								<img src={img_6} alt="Food" className="img-responsive" />
							</figure>
							<div className="fh5co-text">
								<h2>Paneer Pakora</h2>
								<p>Soft paneer cubes dipped in spiced chickpea batter & deep-fried to golden perfection.</p>
								<p><span className="price cursive-font">$15</span></p>
							</div>
						</div>
					</div>

				</div>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Link onClick={handleClick('/menu')} to="/menu" className="btn btn-primary full-menu-btn">View Full Menu</Link>
				</div>
			</div>
			<Modal isOpen={isModalOpen} onClose={closeModal} imgSrc={selectedImage} />
		</div>
	);
};

export default PopularDishes;