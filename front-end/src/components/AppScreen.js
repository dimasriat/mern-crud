import React from "react";

import CreatePage from "./pages/CreatePage";
import ReadPage from "./pages/ReadPage";
import UpdatePage from "./pages/UpdatePage";
import DeletePage from "./pages/DeletePage";

const AppScreen = (props) => {
	const pages = {
		CREATE: <CreatePage />,
		READ: <ReadPage />,
		UPDATE: <UpdatePage />,
		DELETE: <DeletePage />,
	};

	return (
		<div className="container">
			{pages[props.currentPage]}
			<style jsx>{`
				.container {
					width: 100%;
					background-color: white;
					height: 100%;
					display: flex;
					flex-direction: column;
					padding: 0 1rem;
				}
			`}</style>
		</div>
	);
};

export default AppScreen;
