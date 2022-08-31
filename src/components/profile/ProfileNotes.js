import { useState, useRef, useContext } from "react";
import { Col, Form, Button, CloseButton, Row } from "react-bootstrap";

import CardProfile from "../ui/CardProfile";
import SavedContext from "../../store/SavedContext";

function ProfileNotes(props) {
	const { saveProfileDataHandler } = useContext(SavedContext);
	const [notes, setNotes] = useState(props.notes || []);
	const noteRef = useRef();

	function addNoteHandler(e) {
		e.preventDefault();

		const currNote = noteRef.current.value;
		setNotes((prev) => {
			prev = [currNote, ...prev];
			noteRef.current.value = "";
			saveProfileDataHandler({ idx: props.idx, data: prev, type: "notes" });
			return prev;
		});
	}

	function deleteNoteHandler(i) {
		setNotes((prev) => {
			prev = prev.filter((_, idx) => i !== idx);
			saveProfileDataHandler({ idx: props.idx, data: prev, type: "notes" });
			return prev;
		});
	}

	return (
		<Col xs={12} sm={6}>
			<CardProfile
				maxWidth="100%"
				width=""
				height="400px"
				className="d-flex flex-column"
			>
				<h3 className="text-center">Notes</h3>
				<div
					style={{
						overflow: "auto",
						height: "300px",
						width: "100%",
						padding: "5px",
					}}
				>
					{notes?.map((note, i) => {
						return (
							<div className="d-flex mt-3" key={i}>
								<CloseButton
									onClick={() => deleteNoteHandler(i)}
									style={{ marginRight: "15px" }}
								/>
								<li style={{ listStyle: "none" }}>{note}</li>
							</div>
						);
					})}
				</div>
				<Form
					onSubmit={addNoteHandler}
					style={{
						bottom: "0px",
						position: "relative",
						marginTop: "10px",
					}}
				>
					<Row>
						<Col sm={9} xs={9} lg={10}>
							<Form.Control
								style={{
									borderRadius: "15px",
									width: "100%",
									padding: "10px",
								}}
								placeholder="add note..."
								type="text"
								required
								ref={noteRef}
							></Form.Control>
						</Col>
						<Col
							sm={3}
							xs={3}
							lg={2}
							className="d-flex align-items-center justify-content-end"
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
			</CardProfile>
		</Col>
	);
}

export default ProfileNotes;
