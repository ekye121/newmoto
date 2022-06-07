import { Card, Container } from "react-bootstrap";

function CardLogin(props) {
	return (
		<div>
			<Container
				className="d-flex align-items-end justify-content-center"
				style={{ minHeight: "60vh" }}
			>
				<div className="w-100" style={{ maxWidth: "400px" }}>
					<Card
						style={{
							margin: "20px",
							padding: "15px",
							borderWidth: "5px",
							borderRadius: "35px",
							borderColor: "#e8e8e8",
							boxShadow: "0 0 10px #e8e8e8",
						}}
					>
						<Card.Body>{props.children}</Card.Body>
					</Card>
				</div>
			</Container>
		</div>
	);
}

export default CardLogin;
