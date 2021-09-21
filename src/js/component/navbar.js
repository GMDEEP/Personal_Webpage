import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/about">
					<button className="btn btn-primary">ABOUT</button>
				</Link>
				<Link to="/portfolio">
					<button className="btn btn-primary">PORTFOLIO</button>
				</Link>
				<Link to="/blog">
					<button className="btn btn-primary">BLOG</button>
				</Link>
				<Link to="/contact">
					<button className="btn btn-primary">CONTACT</button>
				</Link>
			</div>
		</nav>
	);
};
