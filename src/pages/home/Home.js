import React from "react";
import Mainheader from "../../componenets/Mainheader";
import Programms from "../../componenets/Programms";
import Values from "../../componenets/Values";
import FAQs from "../../componenets/FAQs";
import Testimonials from "../../componenets/Testimonials";
// import Footer from "../../componenets/Footer";
import './Home.css';




const Home = () => {
	return (
		<>
			<Mainheader />
			<Programms />
			<Values />
			<FAQs />
			<Testimonials />
			{/* <Footer /> */}
		</>
	);
};

export default Home;
