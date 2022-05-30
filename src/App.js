import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Common/Navbar/Navbar";
import AddAReview from "./Pages/Dashboard/AddAReview/AddAReview";
import Dashbord from "./Pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequirAuth from "./Pages/Login/RequireAuth/RequirAuth";
import Purchase from "./Pages/Purchase/Purchase/Purchase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllOrder from "./Pages/Dashboard/AllOrder/AllOrder";
import Users from "./Pages/Dashboard/Users/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import AddAProduct from "./Pages/Dashboard/AddAProduct/AddAProduct";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import "tw-elements";
import Blogs from "./Pages/Blogs/Blogs";
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route
					path="/purchase/:id"
					element={
						<RequirAuth>
							<Purchase />
						</RequirAuth>
					}
				></Route>
				<Route
					path="dashboard"
					element={
						<RequirAuth>
							<Dashbord />
						</RequirAuth>
					}
				>
					<Route path="myorder" element={<MyOrder />}></Route>
					<Route path="addareview" element={<AddAReview />}></Route>
					<Route index element={<MyProfile />}></Route>
					<Route
						path="allorder"
						element={
							<RequireAdmin>
								<AllOrder />
							</RequireAdmin>
						}
					></Route>
					<Route
						path="users"
						element={
							<RequireAdmin>
								<Users />
							</RequireAdmin>
						}
					></Route>
					<Route
						path="addproduct"
						element={
							<RequireAdmin>
								<AddAProduct />
							</RequireAdmin>
						}
					></Route>
					<Route
						path="deleteproduct"
						element={
							<RequireAdmin>
								<ManageProduct />
							</RequireAdmin>
						}
					></Route>
				</Route>
				<Route path="myportfolio" element={<MyPortfolio />}></Route>
				<Route path="blogs" element={<Blogs />}></Route>
				<Route path="*" element={<ErrorPage />}></Route>
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
