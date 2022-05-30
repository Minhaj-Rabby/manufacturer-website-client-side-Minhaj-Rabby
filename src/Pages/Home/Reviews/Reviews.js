import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("https://stark-brook-44073.herokuapp.com/review")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<div className="container mx-auto py-24 font-bold px-2">
			<h2 className="my-8 text-3xl">Reviews</h2>
			<div className="carousel carousel-center rounded-box">
				{reviews.map((a) => (
					<ReviewCard review={a} key={a._id} />
				))}
			</div>
		</div>
	);
};

export default Reviews;
