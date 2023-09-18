import Card from "../Card";

const Trainer = ({ image, name, job, socials }) => {
	return (
		<Card className="trainer">
			<div className="trainer-img">
				<img src={image} alt={name} />
			</div>
			<h3>{name}</h3>
			<p>{job}</p>
			<div className="trainer-social">
				{socials.map((social, index) => {
					const { icon, link } = social;
					return (
						<a key={index} href={link} target="_blank noreferrer noopener">
							{icon}
						</a>
					);
				})}
			</div>
		</Card>
	);
};

export default Trainer;
