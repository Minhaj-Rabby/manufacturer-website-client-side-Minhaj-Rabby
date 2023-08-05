import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import Footer from "../../Common/Footer/Footer";

const Dashbord = () => {
	const [user] = useAuthState(auth);
	const [admin] = useAdmin(user);
	return (
		<div>
			<div className="drawer drawer-mobile ">
				<input
					id="my-drawer-2"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content ">
					{/* <!-- Page content here --> */}
					<div className="container mx-auto px-2">
						<Outlet />
					</div>
				</div>
				<div className="drawer-side ">
					<label
						htmlFor="my-drawer-2"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 overflow-y-auto w-80 bg-[#d3d2ce] text-[#3D464D]">
						{/* <!-- Sidebar content here --> */}
						{!admin && (
							<li>
								<Link to={"/dashboard/myorder"}>My Orders</Link>
							</li>
						)}
						{!admin && (
							<li>
								<Link to={"/dashboard/addareview"}>
									Add A Review
								</Link>
							</li>
						)}
						<li>
							<Link to={"/dashboard"}>My Profile</Link>
						</li>
						{admin && (
							<li>
								<Link to={"/dashboard/allorder"}>
									Manage All Orders
								</Link>
							</li>
						)}
						{admin && (
							<li>
								<Link to={"/dashboard/users"}>Make Admin</Link>
							</li>
						)}
						{admin && (
							<li>
								<Link to={"/dashboard/addproduct"}>
									Add a product
								</Link>
							</li>
						)}
						{admin && (
							<li>
								<Link to={"/dashboard/deleteproduct"}>
									Manage Product
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Dashbord;
