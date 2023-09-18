import React from "react";
import { FaCrown } from "react-icons/fa";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import Sectionhead from "./Sectionhead";
import { programs } from "../data";
import Card from "../Card";
import { Link } from "react-router-dom";

const Programms = () => {
	return (
		<section className="programms">
			<div className="container programms-container">
				<Sectionhead icon={<FaCrown />} title="Programms" />

				<div className="programm-wrapper">
					{programs.map((program) => {
						const { id, icon, title, info } = program;
						return (
							<Card key={id} className="programms-programm">
								<span>{icon}</span>
								<h4>{title}</h4>
								<small>{info}</small>
								<Link to="/plans" className="btn sm">
									Know More <BiSolidRightArrowAlt />
								</Link>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Programms;
