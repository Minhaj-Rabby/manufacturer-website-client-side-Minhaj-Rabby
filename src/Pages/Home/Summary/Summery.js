import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const Summery = () => {
	const [customer, setCustomer] = useState({});
	const [review, setReview] = useState({});
	const [tProduct, setTProduct] = useState({});
	useEffect(() => {
		fetch("https://stark-brook-44073.herokuapp.com/totalcoustomer")
			.then((res) => res.json())
			.then((data) => setCustomer(data));
		fetch("https://stark-brook-44073.herokuapp.com/totalreview")
			.then((res) => res.json())
			.then((data) => setReview(data));
		fetch("https://stark-brook-44073.herokuapp.com/totalproduct")
			.then((res) => res.json())
			.then((data) => setTProduct(data));
	}, []);
	
	return (
		<div className="container mx-auto py-8 px-2">
			<h1 className="text-3xl font-bold my-6">Business summary</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				<div className="flex flex-col justify-center items-center">
					<img
						className="w-24 h-28"
						src="https://i.ibb.co/jW6rVRq/group-removebg-preview.png"
						alt=""
					/>
					<span className="text-4xl">{customer?.length}</span>
					<p>Customer</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<img
						className="w-24 h-28"
						src=" https://i.ibb.co/kxGJ3Zg/feedback-removebg-preview.png"
						alt=""
					/>
					<span className="text-4xl">{review?.length}</span>
					<p>Reviews</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<img
						className="w-24 h-24"
						src="https://i.ibb.co/8PZWzFM/image-removebg-preview.png"
						alt=""
					/>
					<span className="text-4xl">{tProduct?.length}</span>
					<p>Tools</p>
				</div>
			</div>
		</div>
	);
};

export default Summery;
