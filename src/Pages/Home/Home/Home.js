import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Common/Footer/Footer";
import RequirAuth from "../../Login/RequireAuth/RequirAuth";
import Purchase from "../../Purchase/Purchase/Purchase";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import Summery from "../Summary/Summery";
import Tools from "../Tools/Tools";

const Home = () => {
	return (
		<div>
			<Banner />
			<Tools />
			<Reviews />
			<Summery />
			<Footer />
		</div>
	);
};

export default Home;
