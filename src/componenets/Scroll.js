import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scroll = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behaviour: "smooth" });
	}, [pathname]);
};

export default Scroll;
