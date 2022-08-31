import React, { useState, useContext } from "react";
import { Row, Col, Form } from "react-bootstrap";

import CardProfile from "../ui/CardProfile";
import SavedContext from "../../store/SavedContext";

function ProfileJournal(props) {
	const { saveProfileDataHandler } = useContext(SavedContext);
	const [text, setText] = useState(props.journal);

	function journalTextOnChange(e) {
		setText(e.target.value);
		saveProfileDataHandler({
			idx: props.idx,
			data: e.target.value,
			type: "journal",
		});
	}

	return (
		<Row>
			<Col>
				<CardProfile maxWidth="100%" width="" height="400px">
					<h3>Journal</h3>
					<Form style={{ width: "100%", height: "100%", overflow: "auto" }}>
						<Form.Control
							as="textarea"
							style={{ width: "100%", height: "100%", borderRadius: "15px" }}
							placeholder="write something..."
							value={text}
							onChange={journalTextOnChange}
						/>
					</Form>
				</CardProfile>
			</Col>
		</Row>
	);
}

export default ProfileJournal;
