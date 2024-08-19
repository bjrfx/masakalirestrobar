import React from 'react';

const OurServices = () => {
  return (
    <div id="gtco-features" className="gtco-section">
      <div className="gtco-container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
            <h2 className="cursive-font">Our Services</h2>
            <p>At Masakali Indian Restrobar, we are committed to delivering an unforgettable dining experience that goes beyond just great food. Our services are designed to ensure that every visit to Masakali is marked by impeccable hospitality, personalized attention, and a genuine love for Indian cuisine.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="feature-center">
              <span className="icon">
                <i className="ti-face-smile"></i>
              </span>
              <h3>Dine-In Experience</h3>
              <p>Indulge in an authentic Indian dining experience in our beautifully decorated restaurant.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="feature-center">
              <span className="icon">
                <i className="ti-thought"></i>
              </span>
              <h3>Event Hosting</h3>
              <p>Host your events at Masakali with professional service, personalized menus, and a warm, inviting ambiance.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="feature-center">
              <span className="icon">
                <i className="ti-truck"></i>
              </span>
              <h3>Takeout & Delivery</h3>
              <p>Enjoy Masakali’s exquisite dishes at home with our convenient takeout and fast delivery service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;