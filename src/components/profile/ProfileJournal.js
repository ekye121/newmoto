import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";

import CardProfile from "../ui/CardProfile";
import SavedContext from "../../store/SavedContext";

function ProfileJournal() {
	const savedContext = useContext(SavedContext);
	const { userSavedProfileData: profileData, saveProfileDataHandler } =
		savedContext;
	const [text, setText] = useState("");

	useEffect(() => {
		if (profileData.journal) {
			setText(profileData.journal);
		}
	}, [profileData.journal]);

	function journalTextOnChange(e) {
		setText(e.target.value);
		saveProfileDataHandler(e.target.value, "journal");
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
