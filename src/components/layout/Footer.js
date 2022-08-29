import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function Footer() {
	return (
		<footer
			style={{
				backgroundColor: "#212529",
				height: "300px",
				width: "100%",
			}}
		>
			<div
				className="d-flex justify-content-around align-items-center text-white w-100 h-100"
				style={{ color: "#6c757d" }}
			>
				<div>
					<OverlayTrigger overlay={<Tooltip>Coming soon</Tooltip>}>
						<h5 style={{ cursor: "pointer" }}>SUPPORT</h5>
					</OverlayTrigger>
				</div>
				<div>
					<OverlayTrigger overlay={<Tooltip>Coming soon</Tooltip>}>
						<h5 style={{ cursor: "pointer" }}>ABOUT</h5>
					</OverlayTrigger>
				</div>
				<div>
					<OverlayTrigger overlay={<Tooltip>Coming soon</Tooltip>}>
						<h5 style={{ cursor: "pointer" }}>SOCIAL MEDIA</h5>
					</OverlayTrigger>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
