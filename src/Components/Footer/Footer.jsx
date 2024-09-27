import React, { useEffect } from 'react';
import img_bg_1 from '../../assets/images/img_bg_1.jpg';
import FooterLogos from './FooterLogos';

const Footer = () => {
	const tawkEnabled = false;
  useEffect(() => {
    if(tawkEnabled) {
		// Initialize Tawk.to script
		var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
		(function () {
		  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
		  s1.async = true;
		  s1.src = 'https://embed.tawk.to/66f360a9e5982d6c7bb3cbb4/1i8jb363r';
		  s1.charset = 'UTF-8';
		  s1.setAttribute('crossorigin', '*');
		  s0.parentNode.insertBefore(s1, s0);
		})();
	
		// Wait for the Tawk.to API to load and then minimize the chat window
		const checkTawkToLoaded = setInterval(() => {
		  if (window.Tawk_API && window.Tawk_API.onLoad) {
			window.Tawk_API.onLoad = function () {
			  window.Tawk_API.minimize(); // Minimize the widget when it loads
			};
			clearInterval(checkTawkToLoaded);
		  }
		}, 500); // Poll every 500ms to check if the API has loaded
	}
  }, []);

  // Function to manually open the chat window
  const openLiveChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <footer id="gtco-footer" role="contentinfo" style={{ backgroundImage: `url(${img_bg_1})` }} 
      data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="gtco-container">
        <div className="row row-pb-md">
          <div className="col-md-12 text-center">
            <div className="gtco-widget">
              <h3>Get In Touch</h3>
              <ul className="gtco-quick-contact">
                <li><a href="tel:+16137896777"><i className="icon-phone"></i> +1 613 789 6777</a></li>
                <li><a href="mailto:contact@masakalirestrobar.ca"><i className="icon-mail2"></i> contact@masakalirestrobar.ca</a></li>
                <li>
                  <button onClick={openLiveChat} style={{ background: 'none', border: 'none', color: '#fbb448' }}>
                    <i className="icon-chat"></i> Live Chat
                  </button>
                </li>
              </ul>
            </div>

            <div className="gtco-widget">
              <h3>Get Social</h3>
              <ul className="gtco-social-icons">
                <li><a href="#"><i className="icon-yelp"></i></a></li>
                <li><a href="https://www.instagram.com/masakalirestobar/"><i className="icon-instagram"></i></a></li>
              </ul>
            </div>
			<FooterLogos />
          </div>
          <div className="col-md-12 text-center copyright">
            <p><small className="block">&copy; 2024 Masakali Indian Restobar. All Rights Reserved.</small>
              <small className="block">Designed by <a href="https://bdotsoftware.com"
                  target="_blank">BDOT Software.com</a> Images: <a href="https://masakaliottawa.ca"
                  target="_blank">Masakali</a></small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;