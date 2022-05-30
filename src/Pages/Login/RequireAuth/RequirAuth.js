import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Spinner from "../../Common/Spinner/Spinner";

const RequirAuth = (props) => {
	const [user, loading, error] = useAuthState(auth);
	const location = useLocation();
	if (loading) {
		return <Spinner></Spinner>;
	}
	if (!user) {
		return (
			<Navigate
				to={"/login"}
				state={{ from: location }}
				replace
			></Navigate>
		);
	}
	return props.children;
};

export default RequirAuth;
