import Header from "../../componenets/Header";
import Img from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/how.webp";
import VisionImage from "../../images/fitness.webp";
import MissionImage from "../../images/about3.jpg";
import './About.css';


const About = () => {
	return (
		<>
			<Header image={Img} title="ABOUT US">
				Your are going to have to let it hurt. Let it suck. The harder you work,
				the better you will look. Your appearance is not parallel to how heavy
				you lift, it is parallel to how hard you work.
			</Header>

			<section className="about-story">
				<div className="container about-story-container">
					<div className="about-section-image">
						<img src={StoryImage} alt="stoty-img" />
					</div>
					<div className="about-section-content">
						<h1>Our Story</h1>
						<hr />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
							fugiat error maxime similique cupiditate. Velit molestias hic qui
							facere deserunt. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Magni voluptas non debitis et repellat! Dolorem
							corporis voluptatem dolorum qui ipsa.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Laudantium beatae modi vitae aliquam mollitia, aperiam animi
							blanditiis dignissimos consequatur aut ducimus quo minus natus
							dolorum.
						</p>
					</div>
				</div>
			</section>

			<section className="vision-story">
				<div className="container vision-story-container">
					<div className="about-section-content">
						<h1>Our Vision</h1>
						<hr />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
							fugiat error maxime similique cupiditate. Velit molestias hic qui
							facere deserunt. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Magni voluptas non debitis et repellat! Dolorem
							corporis voluptatem dolorum qui ipsa.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Laudantium beatae modi vitae aliquam mollitia, aperiam animi
							blanditiis dignissimos consequatur aut ducimus quo minus natus
							dolorum.
						</p>
					</div>
					<div className="about-section-image">
						<img src={VisionImage} alt="Vision-img" />
					</div>
				</div>
			</section>

			<section className="about-mission">
				<div className="container mission-story-container">
					<div className="about-section-image">
						<img src={MissionImage} alt="mission-img" />
					</div>
					<div className="about-section-content">
						<h1>Our Mission</h1>
						<hr />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
							fugiat error maxime similique cupiditate. Velit molestias hic qui
							facere deserunt. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Magni voluptas non debitis et repellat! Dolorem
							corporis voluptatem dolorum qui ipsa.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Laudantium beatae modi vitae aliquam mollitia, aperiam animi
							blanditiis dignissimos consequatur aut ducimus quo minus natus
							dolorum.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
							reprehenderit tempora quibusdam voluptatum dolor rerum iusto odit
							iure ex! Animi dolorem vitae enim ea voluptatibus.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
