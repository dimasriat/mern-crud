import React, { useRef } from "react";
import Layout from "../Layout";
import Axios from "axios";

const CreatePage = (props) => {
	const inputRef = {
		nama: useRef(null),
		whatsapp: useRef(null),
		bidang: useRef(null),
		foto: useRef(null),
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData();

		formData.append("nama", inputRef.nama.current.value);
		formData.append("whatsapp", inputRef.whatsapp.current.value);
		formData.append("bidang", inputRef.bidang.current.value);

		if (inputRef.foto.current.files[0]) {
			formData.append("foto", inputRef.foto.current.files[0]);
		}

		Axios.post("http://localhost:8000/add", formData)
			.then((response) => response.data)
			.then((data) => alert(data));
	};

	return (
		<Layout title="Insert New Data">
			<div>PANITIA OLIMPUS</div>
			<form onSubmit={formSubmitHandler}>
				<input
					type="text"
					placeholder="Nama Lengkap"
					ref={inputRef.nama}
				/>
				<input
					type="text"
					placeholder="Nomor Whatsapp"
					ref={inputRef.whatsapp}
				/>
				<input type="text" placeholder="Bidang" ref={inputRef.bidang} />
				<input type="file" ref={inputRef.foto} />
				<input type="submit" value="Add" />
			</form>
			<style jsx>{`
				form {
					display: flex;
					flex-direction: column;
				}

				input {
					margin: 0.5rem 0;
					padding: 0.5rem;
				}
			`}</style>
		</Layout>
	);
};

export default CreatePage;
