import React from "react";
import { useNavigate } from "react-router-dom";

import "./Tool.css";
const Tool = (props) => {
	const { _id, name, price, aQuantity, img } = props.item;
	const navigate = useNavigate();
	return (
		<div className="tool card  bg-base-100 shadow-xl rounded-sm border-2">
			<figure>
				<img src={img} alt="item" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p className="uppercase">In Stock : {aQuantity}</p>
				<p className="font-bold text-xl">{price} $</p>
				<div className="tool-btn  card-actions justify-start">
					<button
						onClick={() => {
							//getId(_id);
							navigate(`/purchase/${_id}`);
						}}
						className="rounded-sm btn bg-[#d3d2ce]  text-[#3D464D] border-0 font-bold hover:text-white"
					>
						Book Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Tool;
