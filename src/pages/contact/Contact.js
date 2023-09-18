
import Header from "../../componenets/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import './Contact.css';


const Contact = () => {
	return (
		<>
			<Header title="Contact Us" image={HeaderImage}>
				If you have any question about us, our review, or just want to say
				hello, please feel free to contact us using the contact below.
			</Header>
			<section className="contact">
				<div className="container contact-container">
					<div className="contact-wrapper">
						<a
							href="mailto:supportfitnessgroup@gmail.com"
							target="_blank noreferrer noopener"
						>
							<MdEmail />
						</a>
						<a href="https://messenger.com" target="_blank noreferrer noopener">
							<BsMessenger />
						</a>
						<a
							href="https://wa.me/+91 78398279**"
							target="_blank noreferrer noopener"
						>
							<IoLogoWhatsapp />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
