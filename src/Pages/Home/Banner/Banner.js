import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
	const navigate = useNavigate();
	return (
		<div className="banner flex flex-col justify-center items-center">
			<p className="text-center b-l uppercase text-4xl ">
				Screwdrivers professional tools
			</p>
			<p className="text-center text-2xl my-8 md:w-[320px] b-p">
				You can never buy too much of a good thing.Don’t throw it, shop
				it!
			</p>
			<a
				href="#tools"
				className="rounded-sm btn bg-[#d3d2ce] text-[#3D464D] border-0 font-bold hover:text-white"
			>
				Shop Now
			</a>
		</div>
	);
};

export default Banner;
