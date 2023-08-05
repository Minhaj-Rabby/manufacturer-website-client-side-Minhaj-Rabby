import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { SERVERURL } from "../../../server_url";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch(`${SERVERURL}/review`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<div className="container mx-auto py-24 font-bold px-2">
			<h2 className="my-8 text-3xl text-center">Reviews</h2>
			<div className="carousel carousel-center rounded-box">
				{reviews.map((a) => (
					<ReviewCard review={a} key={a._id} />
				))}
			</div>
		</div>
	);
};

export default Reviews;
