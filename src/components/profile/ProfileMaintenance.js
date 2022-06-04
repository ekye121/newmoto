import React from "react";
import { Row, Col } from "react-bootstrap";

import CardProfile from "../ui/CardProfile";

function ProfileMaintenance() {
	return (
		<Row>
			<Col>
				<CardProfile maxWidth="100%" width="" height="400px">
					<h3>Moto Maintenance</h3>
					<div></div>
				</CardProfile>
			</Col>
		</Row>
	);
}

export default ProfileMaintenance;
