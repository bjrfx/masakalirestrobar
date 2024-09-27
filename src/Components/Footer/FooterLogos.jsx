import React from 'react';
import masakaliCuisine from '../../assets/logo/masakaliCuisine.png';
import rangDe from '../../assets/logo/rangde.png';
import masakali from '../../assets/logo/masakali.png';
import './FooterLogos.css';

const FooterLogos = () => {
    const linkStyle = {
        color: '#D4A96A', // Default color
        textDecoration: 'none',
        transition: 'color 0.3s ease-in-out',
    };

    return (
        <div className="gtco-widget">
            <h3 className="copyright">Our Locations</h3>
            <div className="row">
                {/* Masakali Cuisine */}
                <div className="col-md-3 text-center mt-1">
                    <img src={masakaliCuisine} alt="Masakali Cuisine" width="60%" />
                    <p>
                        <a 
                            href="tel:+16138783939" 
                            style={linkStyle} 
                            onMouseEnter={e => e.currentTarget.style.color = '#FBB448'} 
                            onMouseLeave={e => e.currentTarget.style.color = '#D4A96A'} // Set color back to white
                        >
                            <i className="icon-phone"></i> (613) 878-3939
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=5507+Hazeldean+Rd,+Stittsville" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={linkStyle} 
                            onMouseEnter={e => e.currentTarget.style.color = '#FBB448'} 
                            onMouseLeave={e => e.currentTarget.style.color = '#D4A96A'} // Set color back to white
                        >
                            <i className="icon-location"></i> 5507 HAZELDEAN RD, STITTSVILLE
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.masakaliottawa.ca" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={linkStyle} 
                            onMouseEnter={e => e.currentTarget.style.color = '#FBB448'} 
                            onMouseLeave={e => e.currentTarget.style.color = '#D4A96A'} // Set color back to white
                        >
                            <i className="icon-globe"></i> www.masakaliottawa.ca
                        </a>
                    </p>
                </div>

                {/* Masakali Byward */}
                <div className="col-md-3 text-center mt-5">
                    <img src={masakali} alt="Masakali" width="50%" />
                    <p>
                        <a 
                            href="tel:+16137896777" 
                            style={linkStyle} 
                            onMouseEnter={e => e.currentTarget.style.color = '#FBB448'} 
                            onMouseLeave={e => e.currentTarget.style.color = '#D4A96A'} // Set color back to white
                        >
                            <i className="icon-phone"></i> (613) 789-6777
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=97+Clarence+St,+Ottawa" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={linkStyle} 
                            onMouseEnter={e => e.currentTarget.style.color = '#FBB448'} 
                            onMouseLeave={e => e.currentTarget.style.color = '#D4A96A'} // Set color back to white
                        >
                            <i className="icon-location"></i> 97 CLARENCE ST (BYWARD MARKET)
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.masakalirestrobar.ca" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={linkStyle} 
                            onMouseEnter={e => e.currentTarget.style.color = '#FBB448'} 
                            onMouseLeave={e => e.currentTarget.style.color = '#D4A96A'} // Set color back to white
                        >
                            <i className="icon-globe"></i> www.masakalirestrobar.ca
                        </a>
                    </p>
                </div>

                {/* Rang De */}
                <div className="col-md-3 text-center mt-5">
                    <img src={rangDe} alt="Rang De" width="50%" />
                    <p>
                        <a 
                            href="tel:+16135950777" 
                            style={linkStyle} 
                            onMouseEnter={e => e.currentTarget.style.color = '#FBB448'} 
                            onMouseLeave={e => e.currentTarget.style.color = '#D4A96A'} // Set color back to white
                        >
                            <i className="icon-phone"></i> (613) 595-0777
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=700+March+Rd,+Kanata" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={linkStyle} 
                            onMouseEnter={e => e.currentTarget.style.color = '#FBB448'} 
                            onMouseLeave={e => e.currentTarget.style.color = '#D4A96A'} // Set color back to white
                        >
                            <i className="icon-location"></i> 700 MARCH RD, KANATA
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.rangdeottawa.ca" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={linkStyle} 
                            onMouseEnter={e => e.currentTarget.style.color = '#FBB448'} 
                            onMouseLeave={e => e.currentTarget.style.color = '#D4A96A'} // Set color back to white
                        >
                            <i className="icon-globe"></i> www.rangdeottawa.ca
                        </a>
                    </p>
                </div>

                {/* Masakali Hintonburg */}
                <div className="col-md-3 text-center mt-1">
                    <img src={masakaliCuisine} alt="Masakali Cuisine" width="60%" />
                    <p>
                        <a 
                            href="tel:+16137929777" 
                            style={linkStyle} 
                            onMouseEnter={e => e.currentTarget.style.color = '#FBB448'} 
                            onMouseLeave={e => e.currentTarget.style.color = '#D4A96A'} // Set color back to white
                        >
                            <i className="icon-phone"></i> (613) 792-9777
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=1111+Wellington+St,+Hintonburg" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={linkStyle} 
                            onMouseEnter={e => e.currentTarget.style.color = '#FBB448'} 
                            onMouseLeave={e => e.currentTarget.style.color = '#D4A96A'} // Set color back to white
                        >
                            <i className="icon-location"></i> 1111 WELLINGTON ST. (HINTONBURG)
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://www.masakaliottawa.ca" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={linkStyle} 
                            onMouseEnter={e => e.currentTarget.style.color = '#FBB448'} 
                            onMouseLeave={e => e.currentTarget.style.color = '#D4A96A'} // Set color back to white
                        >
                            <i className="icon-globe"></i> www.masakaliottawa.ca
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterLogos;