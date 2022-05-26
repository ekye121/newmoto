import React from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

import FormGroup from "./SearchedFormGroup";

function SearchForm(props) {
	return (
		<div>
			{props.modelErrorMsg && (
				<Alert variant="danger" className="text-center">
					{props.modelErrorMsg}
				</Alert>
			)}
			{props.loading ? (
				<Alert variant="info" className="text-center">
					Loading...
				</Alert>
			) : (
				<Container style={{ marginTop: "10px", marginBottom: "50px" }}>
					<Form onSubmit={props.submitHandler}>
						<Row className="justify-content-center">
							<Col sm={4} className="justify-content-center mt-3">
								<FormGroup props={props} type="make" />
							</Col>
							<Col sm={4} className="justify-content-center mt-3">
								<FormGroup props={props} type="model" />
							</Col>
							<Col sm={1} className="d-flex align-self-end mt-3">
								<Button variant="primary" type="submit">
									Search
								</Button>
							</Col>
						</Row>
					</Form>
				</Container>
			)}
		</div>
	);
}

export default SearchForm;
