import React from "react";
import { Container } from "react-bootstrap";
import Logout from "../components/login/Logout";

function ProfilePage() {
	return (
		<>
			<Logout />
			<Container>
				<div>Journal</div>
				<div>Miles Road</div>
				<div>Milestones</div>
				<div>Notes</div>
				<div>Fav Bikes</div>
			</Container>
		</>
	);
}

export default ProfilePage;
