import { Link } from "react-router-dom";
import NotFound from "../../images/notfound.webp";
import Header from "../../componenets/Header";
import './NotFound.css';


const Notfound = () => {
	return (
		<section>
			<div className="container notfound-container">
				<Header title="Click the button to begin the journey " image={NotFound}>
					<Link to="/home" className="btn">
						
						Let's Begin
					</Link>
				</Header>
			</div>
		</section>
	);
};

export default Notfound;
