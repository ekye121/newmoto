import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// import classes from "./LoggedInNavigation.module.css";

function LoggedInNavigation() {
	return (
		<>
			<Navbar.Collapse className="justify-content-end">
				<Nav>
					<LinkContainer to="/search">
						<Nav.Link>
							<h5>SEARCH</h5>
						</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/learn">
						<Nav.Link>
							<h5>LEARN</h5>
						</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/saved">
						<Nav.Link>
							<h5>SAVED</h5>
						</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/profile">
						<Nav.Link>
							<h5>PROFILE</h5>
						</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</>
	);
}

export default LoggedInNavigation;
