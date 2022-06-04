import { useState } from "react";
import { Col, Form, Button, CloseButton, Row } from "react-bootstrap";

import CardProfile from "../ui/CardProfile";

function ProfileNotes() {
	const [notes, setNotes] = useState([]);

	function addNoteHandler() {}

	return (
		<Col>
			<CardProfile
				maxWidth="100%"
				width=""
				height="400px"
				className="d-flex flex-column"
			>
				<h3 className="text-center">Notes</h3>
				<div style={{ overflow: "auto", height: "300px", width: "100%" }}>
					{notes?.map((note, i) => {
						return (
							<div className="d-flex mt-3">
								<CloseButton style={{ marginRight: "15px" }} />
								<li key={i}>{note}</li>
							</div>
						);
					})}
				</div>
				<Form
					style={{ bottom: "0px", position: "relative", marginTop: "10px" }}
				>
					<Row>
						<Col sm={10} xs={9}>
							<Form.Control
								style={{
									borderRadius: "25px",
									width: "100%",
								}}
								placeholder="add note..."
								as="textarea"
								required
							></Form.Control>
						</Col>
						<Col sm={2} xs={3} className="d-flex align-items-center">
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
			</CardProfile>
		</Col>
	);
}

export default ProfileNotes;
