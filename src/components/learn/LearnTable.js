import { useState } from "react";
import { Table } from "react-bootstrap";

function LearnTable(props) {
	const [toggleTable, setToggleTable] = useState(false);

	return (
		<Table striped hover>
			<thead
				style={{ cursor: "pointer" }}
				onClick={() => setToggleTable((prev) => !prev)}
			>
				<tr>
					<th style={{ fontSize: "20px" }}>{props.title}</th>
					<th className="text-end" style={{ fontSize: "30px" }}>
						+
					</th>
				</tr>
			</thead>
			{toggleTable && (
				<tbody>
					{props.data?.map(([title, detail], i) => {
						return (
							<tr key={i}>
								<td>{title}</td>
								<td>{detail}</td>
							</tr>
						);
					})}
				</tbody>
			)}
		</Table>
	);
}

export default LearnTable;
