import React from "react";
import { useQuery } from "react-query";

import Spinner from "../../Common/Spinner/Spinner";

const AllOrder = () => {
	const { data: orders, isLoading } = useQuery("allOrder", () =>
		fetch("https://stark-brook-44073.herokuapp.com/bookings").then(
			(res) => res.json()
		)
	);
	if (isLoading) {
		<Spinner />;
	}
	return (
		<div>
			<h2>Total Order {orders?.length}</h2>
			{orders && (
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
								<th>Email</th>
								<th>Phone</th>
								<th>Address</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((a, key) => (
								<tr key={a}>
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
									<td>{a.email}</td>
									<td>{a.phone}</td>
									<td>{a.address}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default AllOrder;
