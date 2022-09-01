import React from "react";

import motoBG from "./motoBG.jpg";
import "./MotoBG.css";

function MotoBG() {
	return (
		<div className="moto-bg">
			<img
				src={motoBG}
				alt="motorcycle"
				style={{
					minWidth: "350px",
					width: "45%",
					opacity: ".2",
				}}
			/>
			<div style={{ opacity: "0" }}>
				<a href="https://www.freepik.com/free-vector/vintage-chopper-motorcycle-side-view-template_8084280.htm#query=adventure%20motorcycle&position=0&from_view=keyword">
					Image by dgim-studio
				</a>{" "}
				on Freepik
			</div>
		</div>
	);
}

export default MotoBG;
