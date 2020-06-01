import React from "react";
import Layout from "../Layout";
import color from "../utils/color";

const ReadPage = (props) => {
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
					<tr>
						<td>Dimas Riatmodjo</td>
						<td>085867494951</td>
						<td>Koor. Web</td>
						<td>bentar</td>
					</tr>
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
