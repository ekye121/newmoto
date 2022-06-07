import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// import classes from "./DefaultNavigation.module.css";

function DefaultNavigation() {
	return (
		<>
			<Navbar.Collapse className="justify-content-end">
				<Nav>
					<LinkContainer to="/newmoto/search">
						<Nav.Link>
							<h5>SEARCH</h5>
						</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/newmoto/learn">
						<Nav.Link>
							<h5>LEARN</h5>
						</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/newmoto/saved">
						<Nav.Link>
							<h5>SAVED</h5>
						</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/newmoto/login">
						<Nav.Link>
							<h5>LOGIN</h5>
						</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</>
	);
}

export default DefaultNavigation;
