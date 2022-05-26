import React from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

import SearchFormGroup from "./SearchFormGroup";
import SearchIcon from "./search-icon.png";

function SearchForm(props) {
	return (
		<div style={{ background: "rgb(232 232 232)" }}>
			{props.modelErrorMsg && (
				<Alert variant="danger" className="text-center">
					{props.modelErrorMsg}
				</Alert>
			)}
			{props.loading ? (
				<Alert variant="secondary" className="text-center">
					Loading...
				</Alert>
			) : (
				<Container
					style={{
						marginTop: "40px",
						marginBottom: "40px",
						paddingBottom: "15px",
						border: "2px solid transparent",
						background: "rgb(232 232 232)",
					}}
				>
					<Form onSubmit={props.submitHandler}>
						<Row className="justify-content-center">
							<Col sm={4} className="justify-content-center mt-3">
								<SearchFormGroup props={props} type="make" />
							</Col>
							<Col sm={4} className="justify-content-center mt-3">
								<SearchFormGroup props={props} type="model" />
							</Col>
							<Col sm={1} className="d-flex align-self-end mt-3">
								<Button
									id="buttonSearchMoto"
									variant="primary"
									type="submit"
									style={{
										// background: "#212529",
										border: "1px transparent",
										borderRadius: "25px",
									}}
								>
									<img
										src={SearchIcon}
										alt="search"
										style={{
											filter: "invert(100%)",
											width: "25px",
											height: "25px",
											imageRendering: "-webkit-optimize-contrast",
										}}
									/>
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
