import { useState } from "react";
import { Table } from "react-bootstrap";

function SearchedMotoDetailsTable(props) {
	const [toggleDetails, setToggleDetails] = useState({});

	function fixCamelCaseStr(str) {
		let s = str.replace(/([a-z](?=[A-Z]))/g, "$1 ").split(" ");
		s[0] = s[0][0].toUpperCase() + s[0].slice(1);
		s = s.join(" ");
		return s;
	}

	function toggleDetailsHandler(detailType) {
		setToggleDetails((prev) => {
			if (prev[detailType] === undefined) {
				prev[detailType] = false;
			}
			prev[detailType] = !prev[detailType];
			return { ...prev };
		});
	}

	return (
		<div id="motoDetails" style={{ marginTop: "90px" }}>
			<div
				style={{
					fontWeight: "bolder",
					fontSize: "35px",
					paddingLeft: "7px",
					marginBottom: "5px",
				}}
			>
				Details
			</div>

			{Object.entries(props).map(([detailType, details], i) => {
				return (
					<Table striped hover key={i}>
						<thead
							style={{ cursor: "pointer" }}
							onClick={() => toggleDetailsHandler(detailType)}
						>
							<tr>
								<th style={{ fontSize: "20px" }}>
									{fixCamelCaseStr(detailType)}
								</th>
								<th className="text-end" style={{ fontSize: "30px" }}>
									+
								</th>
							</tr>
						</thead>
						{toggleDetails[detailType] && (
							<tbody>
								{Object.entries(details).map(([title, detail], i) => {
									return (
										<tr key={i}>
											<td size="sm">{fixCamelCaseStr(title).slice(0, -5)}</td>
											<td>{detail}</td>
										</tr>
									);
								})}
							</tbody>
						)}
					</Table>
				);
			})}
		</div>
	);
}

export default SearchedMotoDetailsTable;
