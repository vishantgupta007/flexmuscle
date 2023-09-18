import Sectionhead from "./Sectionhead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../Card";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
import { useState } from "react";
import "../pages/home/Home.css";

const Testimonials = () => {
	const [index, setIndex] = useState(0);
	const { name, job, quote, avatar } = testimonials[index];

	const prevTestimon = () => {
		setIndex((prev) => prev - 1);
		if (index <= 0) {
			setIndex(testimonials.length - 1);
		}
	};
	const nextTestimon = () => {
		setIndex((prev) => prev + 1);
		if (index >= testimonials.length - 1) {
			setIndex(0);
		}
	};

	return (
		<section className="testimonials">
			<div className="container testimonials-container">
				<Sectionhead
					icon={<ImQuotesLeft />}
					title="Testimonials"
					className="testimonials-head"
				/>

				<Card className="testimonial">
					<div className="testimonial-avatar">
						<img src={avatar} alt={name} />
					</div>
					<p className="testimonial-quote">{quote}</p>
					<h5>{name}</h5>
					<small className="testimonial-title">{job}</small>
				</Card>
				<div className="testimonials-btn-container">
					<button className="testimonials-btn" onClick={prevTestimon}>
						{<IoIosArrowDropleftCircle />}
					</button>
					<button className="testimonials-btn" onClick={nextTestimon}>
						{<IoIosArrowDroprightCircle />}
					</button>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
