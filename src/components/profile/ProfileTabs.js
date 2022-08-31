import React, { useState, useContext, useEffect } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

import SavedContext from "../../store/SavedContext";
import ProfileAddTab from "./ProfileAddTab";
import ProfileTabPage from "./ProfileTabPage";

function ProfileTabs() {
	const {
		userSavedProfileData,
		saveProfileDataHandler,
		deleteProfileTabHandler,
	} = useContext(SavedContext);
	const [tabKey, setTabKey] = useState("");
	const [profileData, setProfileData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (userSavedProfileData["0"]) {
			setProfileData(Object.entries(userSavedProfileData));
		}

		if (loading && userSavedProfileData["0"]) {
			setTabKey(userSavedProfileData["0"].name);
			setLoading(false);
		}
		if (loading && !userSavedProfileData["0"]) {
			setTabKey("+");
		}
	}, [userSavedProfileData, loading]);

	function changeTabNameHandler(data) {
		saveProfileDataHandler(data);
		setProfileData(Object.entries(userSavedProfileData));
	}

	function deleteTabHandler(idx) {
		window.scrollTo(0, 0);
		deleteProfileTabHandler(idx);
		const currProfileData = Object.entries(userSavedProfileData);
		setProfileData(currProfileData);
		if (currProfileData[0] && currProfileData[0][1]) {
			setTabKey(currProfileData[0][1]?.name);
		} else {
			setTabKey("+");
		}
	}

	return (
		<Container className="mb-5">
			<Tabs
				activeKey={tabKey}
				onSelect={(key) => setTabKey(key)}
				className="mb-3"
			>
				{profileData.map(([i, tabData]) => (
					<Tab eventKey={tabData.name} title={tabData.name} key={i}>
						<ProfileTabPage
							tabData={tabData}
							idx={i}
							deleteTabHandler={deleteTabHandler}
						/>
					</Tab>
				))}

				<Tab
					eventKey="+"
					title="+"
					style={{
						width: "100%",
						height: "100%",
						boxSizing: "border-box",
						marginTop: "30px",
					}}
				>
					<ProfileAddTab changeTabNameHandler={changeTabNameHandler} />
				</Tab>
			</Tabs>
		</Container>
	);
}

export default ProfileTabs;
