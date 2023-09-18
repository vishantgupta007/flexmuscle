import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./componenets/Navbar";
import About from "./pages/about/About";
import Notfound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Gallery from "./pages/gallery/Gallery";
// import Scroll from "./componenets/Scroll";
import Footer from "./componenets/Footer";
import Trainers from "./pages/trainers/Trainers";
import Contact from "./pages/contact/Contact";






export const App = () => {
	return (
		<BrowserRouter>
			{/* <Scroll /> */}
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="gallery" element={<Gallery />} />
				<Route path="plans" element={<Plans />} />
				<Route path="contact" element={<Contact />} />
				<Route path="trainers" element={<Trainers />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};
				

export default App;
