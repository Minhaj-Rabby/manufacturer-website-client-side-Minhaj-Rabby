import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Common/Spinner/Spinner";
import UserRow from "./UserRow";

const Users = () => {
	const {
		data: users,
		isLoading,
		refetch,
	} = useQuery("allOrder", () =>
		fetch("https://stark-brook-44073.herokuapp.com/user", {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}).then((res) => res.json())
	);

	if (isLoading) {
		<Spinner />;
	}
	return (
		<div>
			{users && (
				<div className="overflow-x-auto">
					<table className="table w-full">
						{/* <!-- head --> */}
						<thead>
							<tr>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>
							{users.map((a, k) => (
								<UserRow a={a} key={k} refetch={refetch} />
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default Users;
