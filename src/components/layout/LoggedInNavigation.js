import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// import classes from "./LoggedInNavigation.module.css";

function LoggedInNavigation() {
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
					<LinkContainer to="/profile">
						<Nav.Link>PROFILE</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</>
	);
}

export default LoggedInNavigation;
