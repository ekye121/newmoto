import React, { useContext } from "react";

import Logout from "../components/login/Logout";
import SavedContext from "../store/SavedContext";
import ProfileTabs from "../components//profile/ProfileTabs";

function ProfilePage() {
	const savedContext = useContext(SavedContext);

	return (
		<div style={{ background: "#fff", minHeight: "85vh", marginTop: "40px" }}>
			<div
				className="d-flex justify-content-between align-items-center container"
				style={{ margin: "30px auto" }}
			>
				<h3>{`Safe riding, ${savedContext.user.split("@")[0]}`}</h3>
				<Logout />
			</div>

			<ProfileTabs />
		</div>
	);
}

export default ProfilePage;
