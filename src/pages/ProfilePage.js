import React from "react";
import { Container, Row } from "react-bootstrap";

import Logout from "../components/login/Logout";
import ProfileJournal from "../components/profile/ProfileJournal";
import ProfileMaintenance from "../components/profile/ProfileMaintenance";
import ProfileMilesRode from "../components/profile/ProfileMilesRode";
import ProfileMilestones from "../components/profile/ProfileMilestones";
import ProfileNotes from "../components/profile/ProfileNotes";

function ProfilePage(props) {
	return (
		<>
			<Logout />
			<Container>
				<ProfileMilesRode />
				<Row>
					<ProfileNotes />
					<ProfileMilestones />
				</Row>
				<ProfileMaintenance />
				<ProfileJournal />

				{/* <div>Journal</div>
				<div>Milestones</div>
				<div>Notes</div>
				<div>Maintenance</div>
				<div>Fav Bikes</div> */}
			</Container>
		</>
	);
}

export default ProfilePage;
