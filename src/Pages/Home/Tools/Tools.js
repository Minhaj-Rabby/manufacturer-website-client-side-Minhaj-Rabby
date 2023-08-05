import React, { useEffect, useState } from "react";
import RequirAuth from "../../Login/RequireAuth/RequirAuth";
import Purchase from "../../Purchase/Purchase/Purchase";
import Tool from "./Tool";
import { SERVERURL } from "../../../server_url";

const Tools = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(`${SERVERURL}/products`)
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);

	return (
		<div id="tools" className="container mx-auto py-12 px-2">
			<h2 className="uppercase my-8 font-bold text-2xl text-center">Tools</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{items.map((item) => (
					<Tool key={item._id} item={item} />
				))}
			</div>
		</div>
	);
};

export default Tools;
