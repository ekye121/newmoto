import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// import classes from "./DefaultNavigation.module.css";

function DefaultNavigation() {
	return (
		<>
			<Navbar.Collapse className="justify-content-end">
				<Nav>
					<LinkContainer to="/search">
						<Nav.Link>SEARCH</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/learn">
						<Nav.Link>LEARN</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/saved">
						<Nav.Link>SAVED</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/login">
						<Nav.Link>LOGIN</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</>
	);
}

export default DefaultNavigation;
