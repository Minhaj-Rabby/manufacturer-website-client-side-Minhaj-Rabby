import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Spinner from "../../Common/Spinner/Spinner";

const Purchase = () => {
	const [product, setProduct] = useState([]);
	const { id } = useParams();
	const [user, loading, error] = useAuthState(auth);
	useEffect(() => {
		fetch(`https://stark-brook-44073.herokuapp.com/product/${id}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, [id]);
	const [quantity, setQuantity] = useState(1);
	const { _id, price, img, aQuantity, name, discription, brand, mOQuantity } =
		product;

	const handleOnchange = (e) => {
		if (parseInt(e.target.value)) {
			setQuantity(parseInt(e.target.value));
		} else {
			setQuantity(mOQuantity);
		}
	};
	//handlePlaceOrder
	const handlePlaceOrder = (e) => {
		e.preventDefault();
		const order = {
			name: user.displayName,
			email: user.email,
			phone: e.target.phone.value,
			quantity,
			address: e.target.address.value,
			productName: name,
			productId: _id,
			productImg: img,
			brand,
		};
		console.log(order);
		fetch("https://stark-brook-44073.herokuapp.com/booking", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success("Order placing done");
				} else {
					toast.error("Order doesn't plece");
				}
				console.log(data);
			});
	};
	const handlePlusMinus = (v) => {
		if (quantity < aQuantity) {
			if (v === "plus") {
				setQuantity(quantity + 1);
			}
		}
		if (v === "minus") {
			if (quantity > 1) {
				setQuantity(quantity - 1);
			}
		}
	};
	if (!product) {
		return <Spinner />;
	}

	return (
		<div className="container mx-auto py-24">
			<div className="hero max-w-6xl mx-auto">
				<div className="hero-content flex-col lg:flex-row items-center gap-8">
					<div className="flex-1">
						<img src={img} className="w-full rounded border-2" />
					</div>
					<div className="flex-1">
						<h1 className="text-5xl font-bold">
							{/* Brandix Screwdriver */}
							{name}
						</h1>
						<p className="py-6">
							{/* Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi. */}
							{discription}
						</p>
						<hr className="font-bold text-[#3D464D] h-2" />
						<div className="flex my-4">
							<p>
								Availability:{" "}
								<span className="font-bold">{aQuantity}</span>
							</p>
							<p className="ml-8">Brand: {brand}</p>
						</div>
						<p className="font-bold text-3xl my-4">${price}</p>

						<form
							className="flex flex-col"
							onSubmit={handlePlaceOrder}
						>
							<div className="flex my-6">
								<span
									onClick={() => {
										handlePlusMinus("minus");
									}}
									className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200  border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 cursor-pointer"
								>
									-
								</span>
								<input
									onChange={handleOnchange}
									name="tQuantity"
									type="number"
									className="rounded-none  bg-gray-50 border text-gray-900  block  text-sm border-gray-300 p-2.5 w-[100px] "
									min={mOQuantity}
									value={quantity}
								/>
								<span
									onClick={() => handlePlusMinus("plus")}
									className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200  border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 cursor-pointer"
								>
									+
								</span>
							</div>
							<input
								name="name"
								type="text"
								value={user?.displayName}
								disabled
								className="input w-full max-w-xs rounded-sm input-bordered"
							/>
							<br />
							<input
								name="email"
								type="text"
								value={user?.email}
								disabled
								className="input w-full max-w-xs rounded-sm input-bordered"
							/>
							<br />
							<input
								name="phone"
								required
								type="text"
								placeholder="Your Number"
								className="input w-full max-w-xs rounded-sm input-bordered"
							/>
							<br />
							<textarea
								name="address"
								required
								className="textarea textarea-bordered rounded-sm max-w-xs"
								placeholder="Your Address"
							></textarea>
							<br />
							<button
								disabled={
									quantity > aQuantity ||
									quantity < mOQuantity
										? true
										: false
								}
								type="submit"
								className="rounded-sm btn bg-[#FFD333] text-[#3D464D] border-0 font-bold hover:text-white max-w-xs"
							>
								place order
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Purchase;
