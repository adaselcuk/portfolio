import React from 'react';
import './Home.css'; 
import './VerticalNavbar';
import VerticalNavbar from './VerticalNavbar';

const Home = () => {
	return (
		<>
			<VerticalNavbar />
			<div className="home-container">
				<nav className="navbar">
					<ul className="nav-list">
						<li className="nav-item"><a href="#about">about</a></li>
						<li className="nav-item"><a href="#projects">projects</a></li>
						<li className="nav-item"><a href="#notes">notes</a></li>
						<li className="nav-item"><a href="#contact">contact</a></li>
					</ul>
				</nav>
				<header className="header">
					<p className="greeting">Hi! I am</p>
					<h1 className="name">
						<span className='first-name'>Ada</span>
						<span className='last-name'>Selcuk</span>
					</h1>
					<p className="title">Software Developer and<br />Computer Engineering Student</p>
				</header>
				<div className="gradient-bottom"></div>
			</div>
		</>
	);
};

export default Home;