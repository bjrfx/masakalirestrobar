import React from 'react'
import './Tophead.css'
const Tophead = () => {
    return (
        <div className="topheader hdr  navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="topblock">
                            <div className="topnumber">
                                <p className="top">
                                    <i className="fa fa-mobile" style={{ fontSize: '15px' }}>
                                        <span className='tophead-number' style={{ marginLeft: '5px', fontFamily: 'Philosopher' }}><a
                                            href="tel:+1 (613) 789-6777" style={{ color: '#bbbbbb!important' }}>+1 (613) 789-6777</a></span></i>
                                    {/* <button className="btn-primary btn-sm" style={{ marginLeft: '15px', marginRight: '15px' }}>Call Us</button> */}
                                    {/* <a href="tel:+16137896777" className="btn-primary btn-sm" style={{ marginLeft: '15px', marginRight: '15px' }}>
                                        Call Us
                                    </a> */}

                                    <i className="fa fa-map-pin" style={{ fontSize: '15px', marginLeft: '10px' }}>
                                            <span style={{ marginLeft: '5px', fontFamily: 'Philosopher' }}><a
                                        href="tel:+1 (613) 792-9777" style={{ color: '#bbbbbb!important', marginRight: '10px' }}>97 Clarence St</a></span></i>
                                </p>
                            </div>
                            {/* <div className="tophicon">
                            <a href="https://www.facebook.com/"
                                style={{ color: '#b9b6b6' }}>
                                <i className="fab fa-facebook-f fasty" aria-hidden="true"></i></a>
                            <a href="https://www.instagram.com/" style={{ color: '#b9b6b6' }}>
                                <i className="fab fa-instagram fasty" aria-hidden="true"></i></a>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Tophead