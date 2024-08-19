import React from 'react'

const TestNavbar = () => {
  return (
    <nav className="gtco-nav" role="navigation">
			<div className="gtco-container">

				<div className="row">
					<div className="col-sm-4 col-xs-12">
						<div id="gtco-logo"><a href="#">Savory <em>.</em></a></div>
					</div>
					<div className="col-xs-8 text-right menu-1">
						<ul>
							<li><a href="menu.html">Menu</a></li>
							<li className="has-dropdown">
								<a href="services.html">Services</a>
								<ul className="dropdown">
									<li><a href="#">Food Catering</a></li>
									<li><a href="#">Wedding Celebration</a></li>
									<li><a href="#">Birthday's Celebration</a></li>
								</ul>
							</li>
							<li><a href="contact.html">Contact</a></li>
							<li className="btn-cta"><a href="#"><span>Reservation</span></a></li>
						</ul>
					</div>
				</div>

			</div>
		</nav>
  )
}

export default TestNavbar