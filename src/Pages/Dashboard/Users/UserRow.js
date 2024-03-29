import React from "react";
import { toast } from "react-toastify";
import { SERVERURL } from "../../../server_url";

const UserRow = ({ a, refetch }) => {
	const makeAdmin = () => {
		fetch(
			`${SERVERURL}/user/admin/${a?.email}`,
			{
				method: "PUT",
				headers: {
					authorization: `Bearer ${localStorage.getItem(
						"accessToken"
					)}`,
				},
			}
		)
			.then((res) => {
				if (res.status === 403) {
					toast.error("Failed to make an admin");
				}
				return res.json();
			})
			.then((data) => {
				if (data.modifiedCount > 0) {
					refetch();
					toast.success(`Successfully made an admin`);
				}
			});
	};
	return (
		<tr>
			<td>{a.email}</td>
			<td>
				{a.role !== "admin" && (
					<button onClick={makeAdmin} className="btn btn-xs">
						Make Admin
					</button>
				)}
			</td>
			<td>
				<button className="btn btn-xs">Remove User</button>
			</td>
		</tr>
	);
};

export default UserRow;
