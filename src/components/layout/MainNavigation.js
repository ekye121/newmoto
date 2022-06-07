import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

import classes from "./MainNavigation.module.css";
import DefaultNavigation from "./DefaultNavigation";
import LoggedInNavigation from "./LoggedInNavigation";
import AuthContext from "../../store/AuthContext";

function MainNavigation() {
	const authContext = useContext(AuthContext);

	return (
		// <header className={classes.header}>
		// 	<Link to="/" className={classes.logo}>
		// 		NEWMOTO
		// 	</Link>

		// 	<DefaultNavigation />
		// 	<LoggedInNavigation />
		// </header>

		<Navbar bg="dark" expand="lg" variant="dark">
			<Container>
				<Navbar.Brand>
					<Link to="/newmoto" className={classes.logo}>
						NEWMOTO
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<div style={{ fontWeight: "bold" }}>
					{authContext.currUser ? (
						<LoggedInNavigation />
					) : (
						<DefaultNavigation />
					)}
				</div>
			</Container>
		</Navbar>
	);
}

export default MainNavigation;
