import React, { useState, useEffect, Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderComponent from '../Header/Header';
import Footer from '../Footer/Footer';
import './SubscriptionList.css';

const SubscriptionList = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = async () => {
    try {
      const response = await fetch('https://api.airtable.com/v0/appnTHlJCaYJJOfhN/tblLpBnM72RerRDjY', {
        headers: {
          Authorization: 'Bearer patCivRJrJBScuORc.8bd709c0d76ff06234939d1fad4f2008148d0846fdb72523613b5394381dd21e',
        },
      });
      const data = await response.json();
      if (data.records) {
        setSubscriptions(data.records.map(record => ({
          id: record.id,
          email: record.fields.Email || '', // Handle undefined email field
        })));
      }
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSubscriptions = subscriptions.filter(subscription =>
    subscription.email && subscription.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Fragment>
        <Navbar />
        <HeaderComponent 
        title="Subscription List"
        textAlign="text-center"
        size="sm"
        />
        <div className="container">
      <div className="active-subscriptions">
        <strong>Active Subscriptions: {subscriptions.length}</strong>
      </div>
      <input
        type="text"
        className="form-control mb-4 subscription-search"
        placeholder="Search subscriptions..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div style={{ overflowX: 'auto', marginTop: "5%", marginBottom: '10%' }}>
        <table className="table table-bordered table-responsive">
          <thead className="thead-dark">
            <tr>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubscriptions.map((subscription) => (
              <tr key={subscription.id}>
                <td>{subscription.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
    </Fragment>
  );
};

export default SubscriptionList;