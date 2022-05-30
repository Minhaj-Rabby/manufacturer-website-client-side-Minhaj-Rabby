import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-base-200">
			<footer className="footer p-10 container mx-auto text-base-content ">
				<div>
					<img
						src="https://i.ibb.co/4WMh2Mq/Header-Icon.png"
						alt="logo"
						className="w-24 h-20"
					/>
					<p>
						Powertools Industries Ltd.
						<br />
						Providing reliable tech since 1992
					</p>
				</div>
				<div>
					<span className="footer-title">Quick Link</span>
					<Link to={"/"} className="link link-hover">
						Home
					</Link>
					<Link to={"/myportfolio"} className="link link-hover">
						MyPortfolio
					</Link>
					<Link to={"/blogs"} className="link link-hover">
						Blogs
					</Link>
				</div>

				<div>
					<span className="footer-title">Legal</span>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
