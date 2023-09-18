import React from "react";
import './Plans.css';
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../Card";
import { plans } from "../../data";
import Header from "../../componenets/Header";


const Plans = () => {
	return (
		<>
			<Header image={HeaderImage} title="PLANS">
				It's never too late, Choose Your Plan And get started with us
			</Header>
			<section>
				<div className="container plans-container">
					{plans.map((plan) => {
						const { id, name, desc, price, features } = plan;
						return (
							<Card id={id}>
								<h3>{name}</h3>
								<small>{desc}</small>
								<h1>${price}</h1>
								<h2>/mo</h2>
								<h4>Features</h4>

								{features.map((item) => {
									const { index, available, feature } = item;
									return (
										<p key={index} className={!available ? "disable" : ""}>
											{feature}
										</p>
									);
								})}
								<button className="btn lg">Choose Plan</button>
							</Card>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Plans;
