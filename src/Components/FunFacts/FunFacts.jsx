import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const FunFacts = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  return (
    <div id="gtco-counter" className="gtco-section">
      <div className="gtco-container" ref={ref}>

        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
            <h2 className="cursive-font primary-color">Fun Facts</h2>
            <p>Discover the essence of our journey with top ratings, diverse cuisine, expert chefs, and a rich history.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-6" data-animate-effect="fadeInUp">
            <div className="feature-center">
              {inView && <CountUp className="counter" start={0} end={4.7} decimals={1} duration={3} />}
              <span className="counter-label">Avg. Rating</span>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6" data-animate-effect="fadeInUp">
            <div className="feature-center">
              {inView && <CountUp className="counter" start={0} end={84} duration={3} />}
              <span className="counter-label">Food Types</span>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6" data-animate-effect="fadeInUp">
            <div className="feature-center">
              {inView && <CountUp className="counter" start={0} end={6} duration={3} />}
              <span className="counter-label">Chef Cook</span>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6" data-animate-effect="fadeInUp">
            <div className="feature-center">
              {inView && <CountUp className="counter" start={0} end={2021} duration={3} />}
              <span className="counter-label">Year Started</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FunFacts;