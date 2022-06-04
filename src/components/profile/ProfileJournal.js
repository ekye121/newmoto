import React from "react";
import { Row, Col } from "react-bootstrap";

import CardProfile from "../ui/CardProfile";

function ProfileJournal() {
	return (
		<Row>
			<Col>
				<CardProfile maxWidth="100%" width="" height="400px">
					<h3>Journal</h3>
					<div></div>
				</CardProfile>
			</Col>
		</Row>
	);
}

export default ProfileJournal;
