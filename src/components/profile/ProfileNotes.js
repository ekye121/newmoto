import { useState, useRef, useContext, useEffect } from "react";
import { Col, Form, Button, CloseButton, Row } from "react-bootstrap";

import CardProfile from "../ui/CardProfile";
import SavedContext from "../../store/SavedContext";

function ProfileNotes() {
	const savedContext = useContext(SavedContext);
	const { userSavedProfileData: profileData, saveProfileDataHandler } =
		savedContext;
	const [notes, setNotes] = useState([]);
	const noteRef = useRef();

	useEffect(() => {
		if (profileData.notes) {
			setNotes(profileData.notes);
		}
	}, [profileData.notes]);

	function addNoteHandler(e) {
		e.preventDefault();

		const currNote = noteRef.current.value;
		setNotes((prev) => {
			prev = [currNote, ...prev];
			noteRef.current.value = "";
			saveProfileDataHandler(prev, "notes");
			return prev;
		});
	}

	function deleteNoteHandler(i) {
		setNotes((prev) => {
			prev = prev.filter((_, idx) => i !== idx);
			saveProfileDataHandler(prev, "notes");
			return prev;
		});
	}

	return (
		<Col>
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
					style={{ bottom: "0px", position: "relative", marginTop: "10px" }}
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
								as="textarea"
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
