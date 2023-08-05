import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import ConfirmModal from "../../SmallComponent/ConfirmModal/ConfirmModal";
import { SERVERURL } from "../../../server_url";

const MyOrder = () => {
	const [user, loading, error] = useAuthState(auth);
	const [products, setProducts] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [confirm, setConfirm] = useState(false);
	const [id, setId] = useState("");
	const navigate = useNavigate();
	const handleDeleteOparation = (id) => {
		setShowModal(true);
		setId(id);
	};
	useEffect(() => {
		if (user.email) {
			fetch(
				`${SERVERURL}/booking?email=${user.email}`,
				{
					method: "GET",
					headers: {
						authorization: `Bearer ${localStorage.getItem(
							"accessToken"
						)}`,
					},
				}
			)
				.then((res) => {
					if (res.status === 401 || res.status === 403) {
						//home
						signOut(auth);
						localStorage.removeItem("accessToken");
						navigate("/");
					}
					return res.json();
				})
				.then((data) => setProducts(data));
		}
	}, [user.email]);

	useEffect(() => {
		const de = async () => {
			if (confirm) {
				const result = await axios.delete(
					`${SERVERURL}/booking/${id}`
				);
				if (result?.data.deletedCount) {
					const restData = products.filter((item) => item._id !== id);
					setProducts(restData);
					setConfirm(false);
					toast.success("Oreder Cancel");
				}
			}
		};
		de();
	}, [confirm, id, products]);

	return (
		<div className="">
			{products ? (
				<div className="overflow-x-auto">
					<table className="table w-full">
						{/* <!-- head --> */}
						<thead>
							<tr>
								<th>No</th>
								<th>User Name</th>
								<th>Product Img</th>
								<th>Product Name</th>
								<th>Order Quantity</th>
								<th>Cancle Order</th>
								<th>Payment</th>
							</tr>
						</thead>

						<tbody>
							{products.map((a, key) => (
								<tr key={a._id}>
									<th>{key + 1}</th>
									<td>{a.name}</td>
									<td>
										<img
											className="w-20 h-20"
											src={a.productImg}
											alt=""
										/>
									</td>
									<td>{a.productName}</td>
									<td>{a.quantity}</td>
									<td>
										<button
											className="btn"
											onClick={() => {
												handleDeleteOparation(a._id);
											}}
										>
											Cancle Order
										</button>
									</td>
									<td>
										<button className="btn">Pay</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<p>No product order</p>
			)}
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

export default MyOrder;
