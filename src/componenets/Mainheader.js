import "../pages/home/Home.css";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const Mainheader = () => {
	return (
		<header className="main-header">
			<div className="container main-header-container">
				<div className="main-header-left">
					<h4>#100daysofWorkOut</h4>
					<h1>Join the Legends of Fitness Now</h1>
					<p>
						Those who do not discover time for exercise should discover time for
						disease.
					</p>
					<Link to="/plans" className="btn lg">
						Discover Now
					</Link>
				</div>
				<div className="main-header-right">
					<div className="main-header-circle"></div>
					<div className="main-header-img">
						<img src={Image} alt="main-header-img" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Mainheader;
