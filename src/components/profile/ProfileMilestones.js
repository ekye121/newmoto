import { useState, useRef, useContext } from "react";
import { Col, Form, Button, Row } from "react-bootstrap";

import CardProfile from "../ui/CardProfile";
import SavedContext from "../../store/SavedContext";

const defaultMilestones = [
	["10,000 Miles", false],
	["5,000 Miles", false],
	["2,000 Miles", false],
	["1,000 Miles", false],
	["500 Miles", false],
	["First ride", false],
	["Sign up for Newmoto", true],
];

function ProfileMilestones(props) {
	const { saveProfileDataHandler } = useContext(SavedContext);
	const [milestones, setMilestones] = useState(
		props.milestones.length ? props.milestones : defaultMilestones
	);
	const [milestoneFormCheck, setMilestoneFormCheck] = useState(false);
	const milestoneInputRef = useRef();

	function addMilestoneHandler(e) {
		e.preventDefault();

		const currMilestone = milestoneInputRef.current.value;
		setMilestones((prev) => {
			prev = [[currMilestone, false], ...prev];
			milestoneInputRef.current.value = "";
			saveProfileDataHandler({
				idx: props.idx,
				data: prev,
				type: "milestones",
			});
			return prev;
		});
	}

	function onFormCheckHandler(i) {
		setMilestones((prev) => {
			prev[i][1] = !prev[i][1];
			setMilestoneFormCheck(!milestoneFormCheck);
			saveProfileDataHandler({
				idx: props.idx,
				data: prev,
				type: "milestones",
			});
			return prev;
		});
	}

	return (
		<Col xs={12} sm={6}>
			<CardProfile
				maxWidth="100%"
				width=""
				height="400px"
				className="d-flex flex-column"
			>
				<h3 className="text-center">Milestones</h3>
				<div
					style={{
						overflow: "auto",
						height: "300px",
						width: "100%",
						padding: "5px",
					}}
				>
					<Form>
						{milestones?.map(([milestone, checked], i) => {
							return (
								<div className="d-flex mt-3" key={i}>
									<Form.Check
										type="checkbox"
										label={milestone}
										checked={checked}
										onChange={() => onFormCheckHandler(i)}
									/>
								</div>
							);
						})}
					</Form>
				</div>
				<Form
					onSubmit={addMilestoneHandler}
					style={{ bottom: "0px", position: "relative", marginTop: "10px" }}
				>
					<Row>
						<Col sm={9} xs={9} lg={10}>
							<Form.Control
								style={{
									borderRadius: "15px",
									width: "100%",
									padding: "10px",
								}}
								placeholder="add milestone..."
								type="text"
								required
								ref={milestoneInputRef}
							></Form.Control>
						</Col>
						<Col
							sm={3}
							xs={3}
							lg={2}
							className="d-flex align-items-center justify-content-end"
						>
							<Button
								style={{ borderRadius: "25px" }}
								type="submit"
								variant="secondary"
							>
								Add
							</Button>
						</Col>
					</Row>
				</Form>
			</CardProfile>
		</Col>
	);
}

export default ProfileMilestones;
