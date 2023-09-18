const Header = ({ image, title, children }) => {
	return (
		<header className="header">
			<div className="header-container">
				<div className="header-container-bg">
					<img src={image} alt="header-img" />
				</div>

				<div className="header-content">
					<h4>{title}</h4>
					<p>{children}</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
