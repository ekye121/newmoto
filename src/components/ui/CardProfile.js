import React from "react";

function CardProfile(props) {
	return (
		<div
			style={{
				margin: "20px",
				height: "400px",
				padding: "15px",
				borderRadius: "35px",
				border: "5px solid #e8e8e8",
				boxShadow: "0 0 10px #e8e8e8",
				...props,
			}}
			className={
				props.className ||
				"d-flex flex-column justify-content-between align-items-center"
			}
		>
			{props.children}
		</div>
	);
}

export default CardProfile;
