import harleyPic from "./harley-pic.JPG";

function HomePageMoto() {
	return (
		<div>
			<img
				src={harleyPic}
				alt="harley-davidson"
				style={{
					// position: "absolute",
					// top: "-165px",
					// zIndex: "-1",
					objectFit: "cover",
					width: "100vw",
					height: "100vh",
				}}
			/>
		</div>
	);
}

export default HomePageMoto;
