import React from "react";
import { render } from "react-dom";
import Crud from "./src/Crud";

const Index = () => {
	return (
		<div>
			<Crud />
			<style jsx global>{`
				* {
					box-sizing: border-box;
				}
				body {
					margin: 0;
					padding: 0;
					font-family: Gilroy;
				}
			`}</style>
		</div>
	);
};

render(<Index />, document.getElementById("root"));
