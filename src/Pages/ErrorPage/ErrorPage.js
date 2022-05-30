import React from "react";

const ErrorPage = () => {
	return (
		<div
			className="flex justify-center items-center container mx-auto"
			style={{ height: "92vh" }}
		>
			<div>
				<h1 className="text-xl md:text-6xl text-red-500">
					404 | Nothing here to see
				</h1>
			</div>
		</div>
	);
};

export default ErrorPage;
