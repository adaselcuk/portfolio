import React from 'react';
import './Home.css'; 
import './VerticalNavbar';
import VerticalNavbar from './VerticalNavbar';

const Home = () => {
	return (
		<>
			<VerticalNavbar />
			<div className="home-container">
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