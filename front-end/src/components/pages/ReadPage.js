import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import color from "../utils/color";
import Axios from "axios";

const ReadPage = (props) => {
	const [panitia, setPanitia] = useState([]);
	useEffect(() => {
		Axios.get("http://localhost:8000/data")
			.then((response) => response.data)
			.then((data) => {
				setPanitia([...data]);
			});
	}, []);
	return (
		<Layout title="View The Data">
			<table>
				<thead>
					<tr>
						<th>Nama Lengkap</th>
						<th>Whatsapp</th>
						<th>Bidang</th>
						<th>Foto</th>
					</tr>
				</thead>
				<tbody>
					{panitia.map((orang) => (
						<tr key={orang.id}>
							<td>{orang.nama}</td>
							<td>{orang.whatsapp}</td>
							<td>{orang.bidang}</td>
							<td>
								<a href={`http://localhost:8000/assets/uploaded/${orang.foto}`}>{orang.foto}</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<style jsx>{`
				table {
					width: 100%;
				}
				thead th {
					text-align: left;
				}
				tbody td {
					border-top: 1px solid ${color.p};
				}
			`}</style>
		</Layout>
	);
};

export default ReadPage;
