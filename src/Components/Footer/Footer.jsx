import React from 'react'
import img_bg_1 from '../../assets/images/img_bg_1.jpg'
const Footer = () => {
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
								<li><a href="#"><i className="icon-chat"></i> Live Chat</a></li>
							</ul>
						</div>
						<div className="gtco-widget">
							<h3>Get Social</h3>
							<ul className="gtco-social-icons">
								{/* <li><a href="#"><i className="icon-twitter"></i></a></li> */}
								{/* <li><a href="#"><i className="icon-facebook"></i></a></li> */}
								<li><a href="#"><i className="icon-yelp"></i></a></li>
								<li><a href="https://www.instagram.com/masakalirestobar/"><i className="icon-instagram"></i></a></li>
							</ul>
						</div>
					</div>

					<div className="col-md-12 text-center copyright">
						<p><small className="block">&copy; 2024 Masakali. All Rights Reserved.</small>
							<small className="block">Designed by <a href="https://bdotsoftware.com"
									target="_blank">BDot Software.com</a> Images: <a href="https://masakaliottawa.ca"
									target="_blank">Masakali</a></small>
						</p>
					</div>

				</div>



			</div>
		</footer>
  )
}

export default Footer