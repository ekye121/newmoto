import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Container, Dropdown, Fade } from "react-bootstrap";

import SavedContext from "../../store/SavedContext";

function ProfileAddTab({ changeTabNameHandler }) {
	const { addProfileTabHandler, userSavedProfileData } =
		useContext(SavedContext);
	const [tabKey, setTabKey] = useState("");
	const [tabNames, setTabNames] = useState([]);
	const [tabIdx, setTabIdx] = useState(0);
	const [error, setError] = useState("");
	const addNewVal = useRef();
	const updateNameVal = useRef();

	useEffect(() => {
		setTabNames(
			Object.entries(userSavedProfileData).map(([_, data]) => data.name)
		);
		setTabKey(userSavedProfileData["0"]?.name ?? "");
	}, [userSavedProfileData]);

	function isValidInput(val) {
		if (val.trim().length > 0) {
			return true;
		}
		return false;
	}

	function addNewTabHandler(e) {
		e.preventDefault();

		setError("");

		const value = addNewVal.current.value.toString();

		if (tabNames.indexOf(value) > -1) {
			setError("Name already in use.");
			addNewVal.current.value = "";
			return;
		}

		if (!isValidInput(value)) {
			setError("Add a valid input.");
			addNewVal.current.value = "";
			return;
		}

		addProfileTabHandler(value);
		addNewVal.current.value = "";
	}

	function changeNameHandler(e) {
		e.preventDefault();
		setError("");
		const updatedName = updateNameVal.current.value.toString();

		if (tabNames.indexOf(updatedName) > -1) {
			setError("Name already in use.");
			updateNameVal.current.value = "";
			return;
		}

		if (!isValidInput(updatedName)) {
			setError("Add a valid input.");
			updateNameVal.current.value = "";
			return;
		}

		changeTabNameHandler({ idx: tabIdx, data: updatedName, type: "name" });

		const currProfileData = Object.entries(userSavedProfileData);
		setTabNames(currProfileData.map(([_, data]) => data.name));
		setTabKey(currProfileData[0][1].name);

		updateNameVal.current.value = "";
	}

	function dropdownSelectHandler(key) {
		setTabKey(key);
		setTabIdx(() => tabNames.indexOf(key));
	}

	return (
		<Container
			className="d-flex align-items-center flex-column"
			style={{ minWidth: "75%" }}
		>
			<Fade in={!!error}>
				<div
					style={{
						color: "red",
						marginBottom: "-15px",
						fontWeight: "bolder",
					}}
				>
					{error}
				</div>
			</Fade>
			<Form
				style={{ width: "100%", margin: "50px 0" }}
				className="d-flex justify-content-center flex-wrap"
				onSubmit={addNewTabHandler}
			>
				<Form.Group className="d-flex justify-content-center align-items-center">
					<Form.Label style={{ width: "200px" }}>Add new moto</Form.Label>
					<Form.Control
						type="text"
						placeholder="Moto name"
						style={{ margin: "0 10px", boxSizing: "border-box" }}
						ref={addNewVal}
						required
						maxLength={30}
					></Form.Control>
					<Button
						type="submit"
						variant="secondary"
						style={{ borderRadius: "25px" }}
					>
						Submit
					</Button>
				</Form.Group>
			</Form>

			<Form
				onSubmit={changeNameHandler}
				style={{ width: "100%", margin: "50px 0" }}
				className="d-flex justify-content-center flex-wrap"
			>
				<Form.Group className="d-flex justify-content-center align-items-center">
					<Form.Label style={{ marginRight: "10px" }}>Change name</Form.Label>
					<Dropdown onSelect={dropdownSelectHandler}>
						<Dropdown.Toggle
							variant="secondary"
							disabled={tabNames.length === 0}
							style={{ margin: "0 10px" }}
						>
							{tabKey}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{tabNames?.map((name, i) => (
								<Dropdown.Item key={i} eventKey={name}>
									{name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
				</Form.Group>

				<Form.Group className="d-flex justify-content-center align-items-center">
					<Form.Control
						type="text"
						placeholder="New name"
						style={{ margin: "10px 10px" }}
						ref={updateNameVal}
						required
						disabled={tabKey === ""}
						maxLength={30}
					></Form.Control>
					<Button
						type="submit"
						variant="secondary"
						style={{ borderRadius: "25px" }}
						disabled={tabKey === ""}
					>
						Submit
					</Button>
				</Form.Group>
			</Form>
		</Container>
	);
}

export default ProfileAddTab;
