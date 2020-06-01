import React, { useState } from "react";
import Navbar from "./components/Navbar";
import color from "./components/utils/color";
import AppScreen from "./components/AppScreen";

const Crud = () => {
	const [page, setPage] = useState("READ");
	return (
		<div className="back">
			<div className="container">
				<AppScreen currentPage={page} />
				<Navbar currentPage={page} setPage={setPage} />
			</div>
			<style jsx>{`
				.back {
					width: 100%;
					height: 100%;
					background-color: ${color.s};
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				.container {
					height: 100%;
					width: 60%;
					background-color: white;
				}
			`}</style>
		</div>
	);
};

export default Crud;
