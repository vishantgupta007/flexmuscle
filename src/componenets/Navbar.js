import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { links } from "../data";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
	const [navToggle, setNavToggle] = useState(false);

	return (
		<nav>
			<div className="container nav-container">
				<Link to="/">
					<h2>
						FLEX<span style={{ color: "#ffb116" }}>it</span>
					</h2>
				</Link>

				{/* for toggling the menu bar */}

				<ul className={`nav-links ${navToggle ? "show-nav" : "hide-nav"}`}>
					{links.map((link, index) => {
						const { name, path } = link;
						return (
							<li key={index}>
								{/* if isActive is true then apply class active-nav otherwise be blank */}
								<NavLink
									to={path}
									className="nav-link"
									activeClassName="active"
									onClick={() => setNavToggle((prev) => !prev)}
								>
									{name}
								</NavLink>
							</li>
						);
					})}
				</ul>
				<button
					className="nav-toggle-btn"
					onClick={() => setNavToggle((prev) => !prev)}
				>
					{navToggle ? <HiOutlineX /> : <HiMenuAlt3 />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
