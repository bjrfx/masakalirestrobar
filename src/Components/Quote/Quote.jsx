import React from 'react'
import img_bg_1 from '../../assets/images/img_bg_1.jpg'
const Quote = () => {
  return (
    <div className="gtco-cover gtco-cover-sm" style={{ backgroundImage: `url(${img_bg_1})` }}
			data-stellar-background-ratio="0.5">
			<div className="overlay"></div>
			<div className="gtco-container text-center">
				<div className="display-t">
					<div className="display-tc">
						<h1>&ldquo; Masakali’s exquisite flavors and warm hospitality keep me coming back, time and time again!&rdquo;</h1>
						<p>&mdash; Jane Smith</p>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Quote