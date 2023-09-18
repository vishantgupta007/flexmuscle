import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const FAQ = ({ question, answer }) => {
	const [activeFaq, setActiveFaq] = useState(false);
	return (
		<article className="faq">
			<div>
				<h4>{question}</h4>
				<button
					className="faq-icon"
					onClick={() => setActiveFaq((prev) => !prev)}
				>
					{activeFaq ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</div>

			<p className={`info ${activeFaq ? "show" : ""}`}>{answer}</p>
		</article>
	);
};

export default FAQ;
