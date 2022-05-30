import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
const Navbar = () => {
	const [user, loading, error] = useAuthState(auth);
	const logout = () => {
		signOut(auth);
		localStorage.removeItem("accessToken");
	};
	const menuItems = (
		<>
			<li className="mx-1">
				<NavLink to={"/"}>Home</NavLink>
			</li>

			<li className="mx-1">
				<NavLink to={"/myportfolio"}>MyPortfolio</NavLink>
			</li>
			<li className="mx-1">
				<NavLink to={"/Blogs"}>Blogs</NavLink>
			</li>
			{user && (
				<li className="mx-1">
					<NavLink to={"/dashboard"}>Dashboard</NavLink>
				</li>
			)}

			<li className="mx-1">
				{user ? (
					<button onClick={logout} className="btn btn-ghost">
						Sign Out
					</button>
				) : (
					<NavLink to={"/login"}>Login</NavLink>
				)}
			</li>
		</>
	);
	return (
		<div className="bg-[#d3d2ce] sticky top-0 z-50">
			<div className="container mx-auto">
				<div className="navbar flex justify-between h-6">
					<div className="navbar">
						<div className="dropdown">
							<label
								tabIndex="0"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</label>
							<ul
								tabIndex="0"
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
							>
								{menuItems}
							</ul>
						</div>
						<Link to={"/"} className="ml-1 normal-case text-xl">
							<img
								className="w-10"
								src="https://i.ibb.co/4WMh2Mq/Header-Icon.png"
								alt=""
							/>
							<span className=" ml-2 text-2xl text-white">
								Powertools
							</span>
						</Link>
					</div>
					<div className=" hidden lg:flex">
						<ul className="menu menu-horizontal p-0 text-[#3D464D]">
							{menuItems}
						</ul>
					</div>
					<div>
						<label
							htmlFor="my-drawer-2"
							tabIndex="1"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
