import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
	return (
		<Navbar bg="primary" data-bs-theme="dark">
			<Container>
				<Navbar.Brand>
					<Link to={"/"}>Navbar</Link>
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link>
						<Link to={"/"}>About</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to={"/users"}>User</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to={"/about"}>About</Link>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;
