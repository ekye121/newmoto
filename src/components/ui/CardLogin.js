import { Card, Container } from "react-bootstrap";

function CardLogin(props) {
	return (
		<div>
			<Container
				className="d-flex align-items-end justify-content-center"
				style={{ minHeight: "50vh" }}
			>
				<div className="w-100" style={{ maxWidth: "400px" }}>
					<Card>
						<Card.Body>{props.children}</Card.Body>
					</Card>
				</div>
			</Container>
		</div>
	);
}

export default CardLogin;
