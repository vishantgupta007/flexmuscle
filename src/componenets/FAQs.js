import Sectionhead from "./Sectionhead";
import { faqs } from "../data";
import FAQ from "./FAQ";
import { FaQuestion } from "react-icons/fa";
import "../pages/home/Home.css";

const FAQs = () => {
	return (
		<section className="faqs">
			<div className="container faqs-container">
				<Sectionhead icon={<FaQuestion />} title="FAQs" />
				<div className="line"></div>
				<div className="faq-wrapper">
					{faqs.map((faq) => {
						const { id, question, answer } = faq;

						return <FAQ key={id} question={question} answer={answer} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default FAQs;
