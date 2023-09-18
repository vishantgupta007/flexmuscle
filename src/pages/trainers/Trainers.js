import "./Trainers.css";
import Header from "../../componenets/Header";
import Trainer from '../../componenets/Trainer'
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import {
	IoLogoTwitter,
	IoLogoFacebook,
	IoLogoInstagram,
	IoLogoLinkedin,
} from "react-icons/io";



const Trainers = () => {
	return (
		<>
			<Header title="Our Trainers" image={HeaderImage}>
				Know all about our Professional Trainers and get a one-on-one
				interaction
			</Header>
			<section className="trainers">
				<div className="container trainer-container">
					{trainers.map((item) => {
						const { id, image, name, job, socials } = item;
						return (
							<Trainer
								key={id}
								image={image}
								name={name}
								job={job}
								socials={[
									{ icon: <IoLogoInstagram />, link: socials[0] },
									{ icon: <IoLogoTwitter />, link: socials[1] },
									{ icon: <IoLogoFacebook />, link: socials[2] },
									{ icon: <IoLogoLinkedin />, link: socials[3] },
								]}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Trainers;
