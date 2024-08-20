import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subscription = {
      "Email": email,
    };

    try {
      const response = await fetch('https://api.airtable.com/v0/appnTHlJCaYJJOfhN/tblLpBnM72RerRDjY', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer patCivRJrJBScuORc.8bd709c0d76ff06234939d1fad4f2008148d0846fdb72523613b5394381dd21e'
        },
        body: JSON.stringify({ fields: subscription }),
      });

      if (response.ok) {
        alert('Subscription successful!');
        setEmail('');  // Clear the form
      } else {
        alert('Failed to subscribe.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error subscribing.');
    }
  };

  return (
    <div id="gtco-subscribe">
      <div className="gtco-container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
            <h2 className="cursive-font">Subscribe</h2>
            <p>Be the first to know about the new events and offers.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <form className="form-inline" onSubmit={handleSubmit}>
              <div className="col-md-6 col-sm-6">
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <button type="submit" className="btn btn-default btn-block">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;