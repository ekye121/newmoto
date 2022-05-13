import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css";
import Footer from "./Footer";

function Layout(props) {
	return (
		<div className="flex-column">
			<MainNavigation className={classes.main} />
			<main>{props.children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
