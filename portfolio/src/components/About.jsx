import React from 'react';
import './About.css';
import { SocialIcon } from 'react-social-icons'

const About = () => {
	return (
		<div className = "about-container">
			<h2 className="greet">Nice to meet you!</h2>
			<p className="about">I am Ada Selcuk, currently a second-year Computer Engineering student at the University of Toronto.</p>
			<p className="icons">g</p>
			<p className="about">I am interested web development and robotics. I am also exploring the positive impact machine learning can have within the environment and design.</p>
			<p className="icons">X</p>
			<p className="about">Driven by curiosity and my desire to creating, whether it is virtual or through my art, I aim to push the boundaries of what is possible in the digital realm.</p>
			<p className="icons">Y</p>
			<p className="about">I am currently seeking internships for the summer of 2025. If you would like to connect, please feel free to reach out!</p>
			<p className="email"><a href="mailto:adaselcuk16@gmail.com">adaselcuk16@gmail.com</a></p>
			<p className="linkedin"><SocialIcon url="https://www.linkedin.com/in/ada-selcuk" target="_blank" rel="noopener noreferrer" /></p>
			
		</div>
	);
}

export default About;