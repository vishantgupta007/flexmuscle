import "../pages/home/Home.css";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className="container footer-container">
				<article>
					{/* <Link to="/" className="logo"> */}
					<h2>
						FLEX<span style={{ color: "#ffb116" }}>it</span>
					</h2>
					{/* </Link> */}
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus eligendi consequatur, odit sit blanditiis voluptatum?
					</p>
					<div className="footer-socials">
						<a
							href="http://twitter.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaTwitter />
						</a>
						<a
							href="http://facebook.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaFacebookF />
						</a>
						<a
							href="http://youtube.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaYoutube />
						</a>
						<a
							href="http://instagram.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaInstagram />
						</a>
					</div>
				</article>
				<article className="perma-links">
					<h4>Perma-Links</h4>
					<Link to="/about">About</Link>
					<Link to="/plans">Plans</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/trainers">Trainers</Link>
					<Link to="/contact">Contact</Link>
				</article>
				<article className="insights">
					<h4>Insights</h4>
					<Link to="/s">Blog</Link>
					<Link to="/s">Testimonials</Link>
					<Link to="/FAQ">FAQ</Link>
					<Link to="/s">Communities</Link>
					{/* <Link to="/s">FAQS</Link> */}
				</article>
				<article className="touch">
					<h4>Get In Touch</h4>
					<Link to="/contact">Contact Us</Link>
					<Link to="/s">Support</Link>
				</article>
			</div>
			<div className="footer-copyright">
				<small>2023 ShapeUp Studio &copy; All Rights Reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
