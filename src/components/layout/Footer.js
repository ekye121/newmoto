import React from "react";

function Footer() {
	return (
		<footer
			style={{
				backgroundColor: "#000",
				height: "300px",
				width: "100%",
			}}
		>
			<div className="d-flex justify-content-around align-items-center text-white w-100 h-100">
				<div>
					<div>SUPPORT</div>
				</div>
				<div>
					<div>ABOUT</div>
				</div>
				<div>
					<div>SOCIAL MEDIA</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
