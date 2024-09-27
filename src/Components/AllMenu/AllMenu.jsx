import React, { Fragment, useState, useEffect } from 'react';
import MenuCard from './MenuCard';
import Modal from '../Modal/Modal';
import { vegAppetizers, nonVegAppetizers, tandooriAppetizers, saucyAppetizers, vegCurries, nonVegCurries, roti, naan, steamedRice, sides, desserts, vegBiryani, nonVegBiryani } from '../../data/menudata';
import star from '../../assets/icons/star.svg';
import glutenFreeIcon from '../../assets/icons/gluten-free.png';
import nutsIcon from '../../assets/icons/nuts.png';
import veganIcon from '../../assets/icons/vegan.png';

const AllMenu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        veg: false,
        nonVeg: false,
        glutenFree: false,
        vegan: false,
        nutsFree: false,
        recommended: false,
    });
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Simulating data fetching delay
        setTimeout(() => {
            setLoading(false); // Set loading to false after data fetch
        }, 2000); // Adjust the delay as per your data fetching time
    }, []);

    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleFilterChange = (filterName) => {
        setFilters((prev) => ({ ...prev, [filterName]: !prev[filterName] }));
    };

    const applyFilters = (menuItems) => {
        return menuItems.filter(item => {
            if (filters.veg && !item.veg) return false;
            if (filters.nonVeg && item.veg) return false;
            if (filters.glutenFree && item.containsGluten) return false;
            if (filters.vegan && !item.vegan) return false;
            if (filters.nutsFree && item.containsNuts) return false;
            if (filters.recommended && !item.recommended) return false;
            if (searchTerm && !item.name.toLowerCase().includes(searchTerm)) return false;
            return true;
        });
    };

    const sections = [
        { title: 'Veg Appetizers', items: vegAppetizers },
        { title: 'Non-Veg Appetizers', items: nonVegAppetizers },
        { title: 'Tandoori Appetizers', items: tandooriAppetizers },
        { title: 'Saucy Appetizers', items: saucyAppetizers },
        { title: 'Veg Curries', items: vegCurries },
        { title: 'Non-Veg Curries', items: nonVegCurries },
        { title: 'Roti', items: roti },
        { title: 'Naan', items: naan },
        { title: 'Steamed Rice', items: steamedRice },
        { title: 'Sides', items: sides },
        { title: 'Desserts', items: desserts },
        { title: 'Veg Biryani', items: vegBiryani },
        { title: 'Non-Veg Biryani', items: nonVegBiryani },
    ];

    return (
        <Fragment>
            <div className="gtco-section">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <h2 className="cursive-font primary-color">All Dishes</h2>
                            <p>Discover the most loved dishes at Masakali Restro Bar, offering an authentic blend of flavors and tradition.</p>
                        </div>
                    </div>

                    <div className="icon-description">
                        <p><img src={star} alt="Recommended" width="20rem" height="20rem" /> This is a highly recommended dish.</p>
                        <p><img src={glutenFreeIcon} alt="Gluten Free" width="20rem" height="20rem" /> This dish is gluten-free, suitable for people with gluten sensitivity.</p>
                        <p><img src={nutsIcon} alt="Contains Nuts" width="20rem" height="20rem" /> This dish contains cashew nuts, not suitable for those with cashew nut allergies.</p>
                        <p><img src={veganIcon} alt="Vegan" width="20rem" height="20rem" /> This dish is vegan-friendly, made without any animal products.</p>
                    </div>

                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search items..."
                        className="form-control mb-4"
                        value={searchTerm}
                        onChange={handleSearch}
                    />

                    {/* Filters */}
                    <div className="filters mb-4">
                        <label style={{marginRight: "5px"}}>
                            <input style={{marginRight: "3px"}} type="checkbox" checked={filters.veg} onChange={() => handleFilterChange('veg')} />
                            Veg
                        </label>
                        <label style={{marginRight: "5px"}}>
                            <input style={{marginRight: "3px"}} type="checkbox" checked={filters.nonVeg} onChange={() => handleFilterChange('nonVeg')} />
                            Non-Veg
                        </label>
                        <label style={{marginRight: "5px"}}>
                            <input style={{marginRight: "3px"}} type="checkbox" checked={filters.glutenFree} onChange={() => handleFilterChange('glutenFree')} />
                            Gluten Free
                        </label>
                        <label style={{marginRight: "5px"}}>
                            <input style={{marginRight: "3px"}} type="checkbox" checked={filters.vegan} onChange={() => handleFilterChange('vegan')} />
                            Vegan
                        </label>
                        <label style={{marginRight: "5px"}}>
                            <input style={{marginRight: "3px"}} type="checkbox" checked={filters.nutsFree} onChange={() => handleFilterChange('nutsFree')} />
                            Nuts Free
                        </label>
                        <label style={{marginRight: "5px"}}>
                            <input style={{marginRight: "3px"}} type="checkbox" checked={filters.recommended} onChange={() => handleFilterChange('recommended')} />
                            Recommended
                        </label>
                    </div>

                    {/* Sections */}
                    {sections.map((section, index) => (
                        <div key={index}>
                            <hr />
                            <h1 style={{textDecoration: "underline"}}>{section.title.toLocaleUpperCase()}</h1>
                            <hr />
                            <div className="row">
                                {applyFilters(section.items).map((item, idx) => (
                                    <MenuCard
                                        key={idx}
                                        itemChoiceOfGravy={item.ChoiceOfGravy}
                                        itemDescription={item.description}
                                        itemImg={item.img}
                                        itemName={item.name}
                                        itemPrice={item.price}
                                        openModal={openModal}
                                        recommended={item.recommended}
                                        containsGluten={item.containsGluten}
                                        containsNuts={item.containsNuts}
                                        vegan={item.vegan}
                                        loading={loading} // Pass loading state
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Modal isOpen={isModalOpen} onClose={closeModal} imgSrc={selectedImage} />
            </div>
        </Fragment>
    );
};

export default AllMenu;