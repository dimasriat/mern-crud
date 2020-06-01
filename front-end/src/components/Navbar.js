import React, { useState, useEffect } from "react";
import color from "./utils/color";

const NavButton = (props) => {
	const [active, setActive] = useState(false);
	useEffect(() => {
		if (props.currentPage == props.id) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [props.currentPage]);
	return (
		<li onClick={() => props.setPage(props.id)}>
			<div>{props.children}</div>
			<style jsx>{`
				li {
					height: 100%;
					padding: 1rem 0;
					display: flex;
					margin: 0;
					align-items: center;
					justify-content: center;
					width: 100%;
					border-bottom: 4px solid ${active ? "white" : color.p};
					font-weight: ${active ? "bold" : "normal"};
				}

				li:hover {
					border-bottom: 4px solid ${active ? "white" : color.s};
					font-weight: bold;
				}
			`}</style>
		</li>
	);
};

const Navbar = (props) => {
	return (
		<div className="container">
			<ul>
				<NavButton
					id="CREATE"
					currentPage={props.currentPage}
					setPage={props.setPage}
				>
					Create
				</NavButton>
				<NavButton
					id="READ"
					currentPage={props.currentPage}
					setPage={props.setPage}
				>
					Read
				</NavButton>
				<NavButton
					id="UPDATE"
					currentPage={props.currentPage}
					setPage={props.setPage}
				>
					Update
				</NavButton>
				<NavButton
					id="DELETE"
					currentPage={props.currentPage}
					setPage={props.setPage}
				>
					Delete
				</NavButton>
			</ul>
			<style jsx>{`
				.container {
					width: 100%;
					background-color: ${color.p};
					color: white;
					position: fixed;
					bottom: 0;
					width: 60%;
				}

				ul {
					list-style: none;
					margin: 0;
					padding: 0;
					display: flex;
					justify-content: space-evenly;
				}
			`}</style>
		</div>
	);
};

export default Navbar;
