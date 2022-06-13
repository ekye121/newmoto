import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop(props) {
	const path = useLocation().pathname;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [path]);

	return <div>{props.children}</div>;
}

export default ScrollToTop;
