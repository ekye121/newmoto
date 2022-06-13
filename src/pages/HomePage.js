import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HomePageMoto from "../components/motos/HomePageMoto";
import AuthContext from "../store/AuthContext";

function HomePage() {
	const authContext = useContext(AuthContext);
	const [user, setUser] = useState("");

	useEffect(() => {
		if (authContext.currUser) {
			setUser(authContext.currUser);
		}
	}, [authContext.currUser]);

	const textStyle = {
		margin: "10px",
		color: "#fff",
		opacity: ".75",
	};

	return (
		<>
			<div
				className="d-flex flex-column justify-content-center align-items-center"
				style={{
					position: "absolute",
					height: "100%",
					width: "100%",
				}}
			>
				<Link
					to={user ? "/profile" : "/login"}
					style={{ textDecoration: "none" }}
				>
					<h1
						style={{
							...textStyle,
							fontSize: "75px",
							fontWeight: "bold",
							color: "#212529",
							backgroundColor: "#fff",
							cursor: "pointer",
						}}
					>
						Start your journey
					</h1>
				</Link>
				<h3 style={textStyle}>For new and experienced riders.</h3>
				<h3 style={textStyle}>Search motorcycles for details.</h3>
				<h3 style={textStyle}>Track your motorcycle journey.</h3>
			</div>
			<HomePageMoto />
		</>
	);
}

export default HomePage;
