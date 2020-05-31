import React from "react";
import { render } from "react-dom";
import ChatApp from "./src/ChatApp"; //ajax responds tester

const Index = () => {
	return (
		<div>
			<ChatApp />
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
