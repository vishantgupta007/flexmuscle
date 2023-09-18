import React from "react";
import Image from "../images/values.jpg";
import Sectionhead from "./Sectionhead";
import { PiDiamondsFourFill } from "react-icons/pi";
import { values } from "../data";
import Card from "../Card";
import "../pages/home/Home.css";

const Values = () => {
	return (
		<section className="values">
			<div className="container values-container">
				<div className="values-left">
					<div className="values-img">
						<img src={Image} alt="gym-logo" />
					</div>
				</div>
				<div className="values-right">
					<Sectionhead icons={<PiDiamondsFourFill />} title="Values" />
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
						suscipit rem quidem alias consequatur quo magnam obcaecati
					</p>
					<div className="values-wrapper">
						{values.map((value) => {
							const { id, title, icon, desc } = value;
							return (
								<Card key={id} className="values-value">
									<span>{icon}</span>
									<h4>{title}</h4>
									<small>{desc}</small>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Values;
