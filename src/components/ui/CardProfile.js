import React from "react";

function CardProfile(props) {
	return (
		<div
			style={{
				margin: "20px",
				width: "300px",
				height: "300px",
				padding: "15px",
				borderRadius: "35px",
				border: "5px solid #e8e8e8",
				boxShadow: "0 0 10px #e8e8e8",
				...props,
			}}
			className={props.className}
		>
			{props.children}
		</div>
	);
}

export default CardProfile;
