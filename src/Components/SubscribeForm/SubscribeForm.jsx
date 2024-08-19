import React from 'react'

const SubscribeForm = () => {
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
						<form className="form-inline">
							<div className="col-md-6 col-sm-6">
								<div className="form-group">
									<label for="email" className="sr-only">Email</label>
									<input type="email" className="form-control" id="email" placeholder="Your Email" />
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
  )
}

export default SubscribeForm