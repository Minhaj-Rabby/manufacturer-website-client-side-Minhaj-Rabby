import { async } from "@firebase/util";
import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddAReview = () => {
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const rating = {
			name: user?.displayName,
			img: user?.photoURL,
			discription: e.target.discription.value,
			rating: parseInt(e.target.rating.value),
		};
		const result = await axios.post(
			"https://stark-brook-44073.herokuapp.com/review",
			{
				...rating,
			}
		);
		if (result?.data.acknowledged) {
			toast("Successfully added ");
			navigate("/");
		}
		//console.log(rating);
	};
	return (
		<div>
			<h2>Add a Review </h2>
			<div>
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<textarea
						name="discription"
						className="textarea select-bordered w-full my-3"
						placeholder="Description"
						required
					></textarea>
					<label htmlFor="rating">Give rating</label>
					<select
						id="rating"
						name="rating"
						className="select select-bordered w-full max-w-xs my-3"
						required
					>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
					<button type="submit" className="btn w-24">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddAReview;
