import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";

import Logout from "../components/login/Logout";
import ProfileJournal from "../components/profile/ProfileJournal";
import ProfileMaintenance from "../components/profile/ProfileMaintenance";
import ProfileMilesRode from "../components/profile/ProfileMilesRode";
import ProfileMilestones from "../components/profile/ProfileMilestones";
import ProfileNotes from "../components/profile/ProfileNotes";
import SavedContext from "../store/SavedContext";

function ProfilePage(props) {
	const savedContext = useContext(SavedContext);

	return (
		<>
			<Logout />
			<Container>
				<h3 style={{ margin: "25px" }}>
					{`Safe riding, ${savedContext.user.split("@")[0]}`}
				</h3>
				<ProfileMilesRode />
				<Row>
					<ProfileNotes />
					<ProfileMilestones />
				</Row>
				<ProfileMaintenance />
				<ProfileJournal />
			</Container>
		</>
	);
}

export default ProfilePage;
