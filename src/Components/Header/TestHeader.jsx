import React from 'react'
import headerImg from '../../assets/images/img_bg_1.jpg'
const TestHeader = () => {
  return (
    <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner"
    style={{ backgroundImage: `url(${headerImg})` }} data-stellar-background-ratio="0.5">
			<div className="overlay"></div>
			<div className="gtco-container">
				<div className="row">
					<div className="col-md-12 col-md-offset-0 text-left">


						<div className="row row-mt-15em">
							<div className="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
								<span className="intro-text-small">Hand-crafted by <a href="http://gettemplates.co"
										target="_blank">GetTemplates.co</a></span>
								<h1 className="cursive-font">All in good taste!</h1>
							</div>
							<div className="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
								<div className="form-wrap">
									<div className="tab">

										<div className="tab-content">
											<div className="tab-content-inner active" data-content="signup">
												<h3 className="cursive-font">Table Reservation</h3>
												<form action="#">
													<div className="row form-group">
														<div className="col-md-12">
															<label for="activities">Persons</label>
															<select name="#" id="activities" className="form-control">
																<option value="">Persons</option>
																<option value="">1</option>
																<option value="">2</option>
																<option value="">3</option>
																<option value="">4</option>
																<option value="">5+</option>
															</select>
														</div>
													</div>
													<div className="row form-group">
														<div className="col-md-12">
															<label for="date-start">Date</label>
															<input type="text" id="date" className="form-control" />
														</div>
													</div>
													<div className="row form-group">
														<div className="col-md-12">
															<label for="date-start">Time</label>
															<input type="text" id="time" className="form-control" />
														</div>
													</div>

													<div className="row form-group">
														<div className="col-md-12">
															<input type="submit" className="btn btn-primary btn-block"
																value="Reserve Now" />
														</div>
													</div>
												</form>
											</div>


										</div>
									</div>
								</div>
							</div>
						</div>


					</div>
				</div>
			</div>
		</header>
  )
}

export default TestHeader