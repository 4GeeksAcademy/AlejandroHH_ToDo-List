import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Todolist from "./todolist.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="row mt-5 d-flex justify-content-center">
				<Todolist />
			</div>
		</div>
	);
};

export default Home;
