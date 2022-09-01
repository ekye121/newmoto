import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css";
import Footer from "./Footer";
import MotoBG from "../ui/MotoBG";

function Layout(props) {
	return (
		<div style={{ height: "100%" }}>
			<MainNavigation className={classes.main} />
			<main style={{ height: "100%", minHeight: "91vh" }}>
				<MotoBG />
				{props.children}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
