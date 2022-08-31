import React, { useState } from "react";

import { Container, Row, Button } from "react-bootstrap";

import ProfileJournal from "./ProfileJournal";
import ProfileMaintenance from "./ProfileMaintenance";
import ProfileMilesRode from "./ProfileMilesRode";
import ProfileMilestones from "./ProfileMilestones";
import ProfileNotes from "./ProfileNotes";
import DeleteConfirmModal from "../saved/DeleteConfirmModal";

function ProfileTabPage({ tabData, idx, deleteTabHandler }) {
	const [deleteConfirmModal, setDeleteConfirmModal] = useState(false);

	function deleteTabInModal() {
		deleteTabHandler(idx);
	}

	return (
		<Container>
			<ProfileMilesRode
				milesRode={tabData?.milesRode ?? 0}
				milesRodeLog={tabData.milesRodeLog || []}
				idx={idx}
			/>
			<Row>
				<ProfileNotes notes={tabData?.notes ?? []} idx={idx} />
				<ProfileMilestones milestones={tabData?.milestones ?? []} idx={idx} />
			</Row>
			<ProfileMaintenance maintenance={tabData?.maintenance ?? []} idx={idx} />
			<ProfileJournal journal={tabData?.journal ?? ""} idx={idx} />

			<div className="d-flex justify-content-center mt-4">
				<Button
					style={{
						borderRadius: "25px",
					}}
					variant="secondary"
					onClick={() => setDeleteConfirmModal(true)}
				>
					Delete
				</Button>
				<DeleteConfirmModal
					delete={deleteTabInModal}
					onHide={() => setDeleteConfirmModal(false)}
					show={deleteConfirmModal}
					type="tab"
				/>
			</div>
		</Container>
	);
}

export default ProfileTabPage;
