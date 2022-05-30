import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import st from "./ReviewCard.module.css";

const ReviewCard = (props) => {
	const { img, name, rating, discription } = props.review;
	let ratings = [];
	if (rating) {
		for (let i = 0; i < rating; i++) {
			ratings.push(
				<FontAwesomeIcon
					className="text-blue-600"
					key={i}
					icon={faStar}
				/>
			);
		}
	}

	for (let i = ratings.length; i < 5; i++) {
		ratings.push(<FontAwesomeIcon key={i} icon={faStar} />);
	}

	return (
		<div
			className={`flex flex-col items-center justify-center shadow-xl rounded p-6 ${st.bg} carousel-item mx-6 w-80`}
			
		>
			<img
				className="w-32 h-32"
				style={{ borderRadius: "50%" }}
				src={img}
				alt="person"
			/>
			<h5 className="my-3">{name}</h5>
			<div className="flex">{ratings}</div>
			<p className="my-3">{discription}</p>
		</div>
	);
};

export default ReviewCard;
