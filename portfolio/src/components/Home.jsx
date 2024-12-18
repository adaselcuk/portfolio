import React from 'react';
import './Home.css'; 

const Home = () => {
	return (
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
				<h1 className="name">Ada Selcuk</h1>
				<p className="title">Software Developer and Computer Engineering Student</p>
			</header>
			<div className="gradient-bottom"></div>
		</div>
	);
};

export default Home;