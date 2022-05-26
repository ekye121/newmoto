import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css";
import Footer from "./Footer";

function Layout(props) {
	return (
		<div className="">
			<MainNavigation className={classes.main} />
			<main style={{ minHeight: "90vh" }}>{props.children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
