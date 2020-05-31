import React, { useState } from "react";
import Axios from "axios";

const ChatApp = () => {
	const [chatRoom, setChatRoom] = useState([]); //isi chat roomnya
	const [chatForm, setChatForm] = useState(""); //isi form chatnya

	const onSubmit = (e) => { //saat disubmit formnya
		e.preventDefault(); //biar ga kereload pas disubmit

		setChatRoom((state) => [...state, `Dimas: ${chatForm}`]); //mengisi chat room dengan chat form yang barusan diketik
		setChatForm(""); //menghapus isi chat form

		//ini untuk berkomunikasi ke server dengan data berupa chatForm
		Axios.post("http://localhost:8000/", { chatForm }) 
			.then((res) => res.data) //mengambil isi data
			.then(
				(data) => setChatRoom((state) => [...state, data]), //data didapatkan
				(err) => setChatRoom((state) => [...state, `gagal mengirim gara2 ini -> ${err.toString()}`]) //data tidak didapatkan (error)
			);
	};

	return (
		<div className="container">
			<h1>AJAX Chat App</h1>
			<div>
				{chatRoom.map((chat) => (
					<p key={chat}>{chat}</p>
				))}
			</div>
			<form onSubmit={onSubmit} autoComplete="none">
				<div>
					<input
						type="text"
						name="chatForm"
						value={chatForm}
						onChange={(e) => setChatForm(e.target.value)}
					/>
					<input type="submit" name="sendbutton" value="send" />
				</div>
			</form>
			<style jsx>{`
				.container {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
				input {
					margin: 0 0.5rem;
				}
				p {
					margin: 0.5rem 0;
					padding 0.5rem;
					border: 1px solid lightgray;
					background-color: white;
					border-radius: 0.5rem;
				}
			`}</style>
		</div>
	);
};

export default ChatApp;
