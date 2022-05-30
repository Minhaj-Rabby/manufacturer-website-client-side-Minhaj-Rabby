import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer/Footer";

const MyPortfolio = () => {
	return (
		<div>
			<div className="hero min-h-screen ">
				<div className="hero-content text-center">
					<div className="">
						<div className="overflow-x-auto">
							<table className="table w-full">
								<tbody>
									<tr>
										<th>Name</th>
										<td>
											<h2>Minhajul Islam Tapadar</h2>
										</td>
									</tr>

									<tr className="active">
										<th>Email</th>
										<td>minhaj12113@gmail.com</td>
									</tr>

									<tr>
										<th>Educational background</th>
										<td>
											B.Sc(Engg) in CSE . (4th Year 1st
											Semester)
										</td>
									</tr>
									<tr>
										<th>List of technologies or skills</th>
										<td>
											<ul>
												<li>HTML,CSS</li>
												<li>Bootstrap</li>
												<li>TailwindCSS</li>
												<li>Javascript,DOM</li>
												<li>React js</li>
												<li>Express js</li>
												<li>Mongodb (Basic)</li>
											</ul>
										</td>
									</tr>
									<tr>
										<th>Project Link</th>
										<td>
											<ul>
												<li>
													<p>
														<a
															target="_blank"
															href={
																"https://warehouse-management-40bc5.web.app/"
															}
														>
															https://warehouse-management-40bc5.web.app/
														</a>
														(It is a grosery stock
														website for dealer it is
														a full stact website)
													</p>
												</li>
												<li>
													<p>
														<a
															target="_blank"
															href={
																"https://minhaj-wedding-photography.web.app/"
															}
														>
															https://minhaj-wedding-photography.web.app/
														</a>
														(It is a single persons course selling website)
													</p>
												</li>
												<li>
													<p>
														<a
															target="_blank"
															href={
																"https://womens-bags-review.netlify.app/"
															}
														>
															https://womens-bags-review.netlify.app/
														</a>
														(It is a review related
														fontend design with
														react js)
													</p>
												</li>
											</ul>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MyPortfolio;
