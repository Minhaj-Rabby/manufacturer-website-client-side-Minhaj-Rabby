import { async } from "@firebase/util";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ConfirmModal from "../../SmallComponent/ConfirmModal/ConfirmModal";

const ManageProduct = () => {
	const [products, setProducts] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [confirm, setConfirm] = useState(false);
	const [id, setId] = useState("");
	useEffect(() => {
		fetch("https://stark-brook-44073.herokuapp.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	const handleDeleteOparation = async (id) => {
		setShowModal(true);
		setId(id);
	};
	useEffect(() => {
		const de = async () => {
			if (confirm) {
				const result = await axios.delete(
					`https://stark-brook-44073.herokuapp.com/product/${id}`
				);
				if (result?.data.deletedCount) {
					const restData = products.filter((item) => item._id !== id);
					setProducts(restData);
					setConfirm(false);
					toast.success("Product Deleted");
				}
			}
		};
		de();
	}, [confirm, id, products]);
	return (
		<div className="container mx-auto">
			<h2 className="font-bold text-2xl my-5">Manage Product</h2>
			<div>
				{products ? (
					<div className="overflow-x-auto">
						<table className="table w-full">
							{/* <!-- head --> */}
							<thead>
								<tr>
									<th>No</th>

									<th>Product Img</th>
									<th>Product Name</th>
									<th>Aviailable</th>
									<th>Delete</th>
								</tr>
							</thead>

							<tbody>
								{products.map((a, key) => (
									<tr key={a._id}>
										<th>{key + 1}</th>

										<td>
											<img
												className="w-20 h-20"
												src={a.img}
												alt=""
											/>
										</td>
										<td>{a.name}</td>

										<td>{a.aQuantity}</td>
										<td>
											<button
												className="btn"
												onClick={() => {
													handleDeleteOparation(
														a._id
													);
												}}
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : (
					<p>No product</p>
				)}
			</div>
			{showModal && (
				<ConfirmModal
					showModal={showModal}
					setShowModal={setShowModal}
					setConfirm={setConfirm}
				/>
			)}
		</div>
	);
};

export default ManageProduct;
