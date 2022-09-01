import React from "react";

import swipeArrow from "./swipe-arrow.png";
import "./SwipeArrow.css";

function SwipeArrow() {
	return (
		<div className="swipe-arrow-container">
			<img src={swipeArrow} alt="swipe-arrow" className="swipe-arrow" />
			<a
				href="https://www.flaticon.com/free-icons/swipe"
				title="swipe icons"
				style={{ opacity: "0" }}
			>
				Swipe icons created by Royyan Wijaya - Flaticon
			</a>
		</div>
	);
}

export default SwipeArrow;
