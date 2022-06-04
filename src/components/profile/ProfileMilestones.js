import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

import CardProfile from "../ui/CardProfile";

function ProfileMilestones() {
	const [notes, setNotes] = useState([
		"jaiops adjpo ad saospdj opa sjdop ajd aopsdj",
	]);

	return (
		<Col>
			<CardProfile maxWidth="100%" width="" height="400px">
				<h3>Milestones</h3>
				<div>
					{notes?.map((note, i) => {
						return <ul key={i}>{note}</ul>;
					})}
				</div>
				<Form>
					<Form.Control></Form.Control>
					<Button>Add</Button>
				</Form>
			</CardProfile>
		</Col>
	);
}

export default ProfileMilestones;
