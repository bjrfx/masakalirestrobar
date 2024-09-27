import React from 'react'
const HeaderComponent = ({ textAlign, title, children, size, headerClass, headerImg, titleStyle }) => {
    
    return (
        <header id="gtco-header" className={`gtco-cover gtco-cover-${size}`} role="banner"
            style={{ backgroundImage: `url(${headerImg})` }} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="gtco-container">
                <div className="row">
                    {/* <div className="col-md-12 col-md-offset-0 text-left ">
                        <div className="row row-mt-15em">
                            <div className="col-md-7 mt-text " data-animate-effect="fadeInUp">
                                <span className="intro-text-small">Hand-crafted by <a href="https://bdotsoftware.com"
                                    target="_blank">BDot Sowtware.com</a></span>
                                <h1 className="cursive-font">All in good taste!</h1>
                            </div>
                            <div className="col-md-4 col-md-push-1 " data-animate-effect="fadeInRight">
                                <ReservationForm />
                            </div>
                        </div>
                    </div> */}
                    <div className={`col-md-12 col-md-offset-0  ${textAlign}`}>
                        <div className="row row-mt-15em">
                            <div className={`${headerClass}`} data-animate-effect="fadeInUp">
                            {/* <div className="col-md-7 mt-text " data-animate-effect="fadeInUp"> */}
                                <span className="intro-text-small">Spice Up Your Dining Experience with <a href="https://masakalirestrobar.ca"
                                    target="_blank">Masakali Bistro.</a></span>
                                <h1 className="cursive-font">{title}</h1>
                            </div>
                            <div className="col-md-4 col-md-push-1 " data-animate-effect="fadeInRight">
                                {children}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default HeaderComponent