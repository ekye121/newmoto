import harleyPic from "./harley-pic.JPG";

function HomePageMoto() {
	return (
		<div>
			<img
				src={harleyPic}
				alt="harley-davidson"
				style={{
					// top: "-165px",
					position: "absolute",
					zIndex: "-1",
					objectFit: "cover",
					width: "100vw",
					height: "100vh",
				}}
			/>
		</div>
	);
}

export default HomePageMoto;
