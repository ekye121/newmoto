import React, { useState, useRef, useContext, useEffect } from "react";
import { Row, Col, Button, Form, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import CardProfile from "../ui/CardProfile";
import SavedContext from "../../store/SavedContext";

function MilesRode() {
	const savedContext = useContext(SavedContext);
	const { userSavedProfileData: profileData, saveProfileDataHandler } =
		savedContext;
	const [maintenanceLog, setMaintenanceLog] = useState([]);
	const [datePick, setDatePick] = useState(new Date());
	const maintenanceInputRef = useRef();

	useEffect(() => {
		if (profileData.maintenanceLog) {
			setMaintenanceLog(profileData.maintenanceLog);
		}
	}, [profileData.maintenanceLog]);

	function addMaintenanceHandler(e) {
		e.preventDefault();

		const date = datePick.toString().split(" ").slice(0, 4).join(" ");
		const text = maintenanceInputRef.current.value;
		setMaintenanceLog((prev) => {
			prev = [[date, text], ...prev];
			maintenanceInputRef.current.value = "";
			saveProfileDataHandler(prev, "maintenanceLog");
			return prev;
		});
	}

	const CalCustomInput = React.forwardRef((props, ref) => (
		<Button
			onClick={props.onClick}
			ref={ref}
			variant="secondary"
			style={{ borderRadius: "25px" }}
		>
			{props.value}
		</Button>
	));

	return (
		<Row>
			<Col>
				<CardProfile className="d-flex flex-column">
					<h3 className="text-center">Moto Maintenance History</h3>
					<div style={{ overflow: "auto", width: "100%", height: "100%" }}>
						<Table striped hover>
							<thead>
								<tr>
									<th>Date</th>
									<th>Notes/Serviced</th>
								</tr>
							</thead>
							<tbody>
								{maintenanceLog.map(([date, text], i) => {
									return (
										<tr key={i}>
											<td>{date}</td>
											<td>{text}</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					</div>
					<div>
						<Form
							onSubmit={addMaintenanceHandler}
							style={{
								bottom: "0px",
								position: "relative",
								marginTop: "10px",
							}}
						>
							<Row>
								<Col xs={12} sm={8} lg={9}>
									<Form.Control
										style={{
											borderRadius: "15px",
											width: "100%",
											padding: "10px",
										}}
										placeholder="add maintenance..."
										type="text"
										required
										ref={maintenanceInputRef}
									></Form.Control>
								</Col>
								<Col
									xs={6}
									sm={2}
									lg={2}
									className="d-flex justify-content-end mt-2"
								>
									<DatePicker
										selected={datePick}
										onChange={(date) => setDatePick(date)}
										customInput={<CalCustomInput />}
									/>
								</Col>
								<Col
									xs={6}
									sm={2}
									lg={1}
									className="d-flex justify-content-end mt-2"
								>
									<Button
										style={{ borderRadius: "25px" }}
										type="submit"
										variant="secondary"
									>
										Add
									</Button>
								</Col>
							</Row>
						</Form>
					</div>
				</CardProfile>
			</Col>
		</Row>
	);
}

export default MilesRode;
