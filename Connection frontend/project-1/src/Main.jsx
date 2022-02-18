import React from "react";
import { Link } from "react-router-dom";

class Main {
	render(){
	return (
		<nav className="navbar navbar-expand">
			<div className="container-fluid">
				<a className="navbar-brand">BOOK MANAGEMENT SYSTEM</a>

				
				<div
					className="collapse navbar-collapse "
					id="bs-example-navbarNav">
					<ul className="nav navbar-nav">
						<li className="nav-item">
							<Link
								className="nav-link"
								activeclassname="active"
								to="/Home">
								<b>Home</b>
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								activeclassname="active"
								to="/customer">
								<b>Customer</b>
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link"
								activeclassname="active"
								to="/book">
								<b>Book</b>
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link"
								activeclassname="active"
								to="/order">
								<b>Order</b>
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								activeclassname="active"
								to="/review">
								<b>Review</b>
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link"
								activeclassname="active"
								to="/about">
								<b>About</b>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
}
export default Main;
