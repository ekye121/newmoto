import { Link } from "react-router-dom";
import HomePageMoto from "../components/motos/HomePageMoto";

function HomePage() {
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
				<Link to="/login" style={{ textDecoration: "none" }}>
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
