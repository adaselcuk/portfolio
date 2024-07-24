window.addEventListener('scroll', function() {
	const navbar = document.getElementById('navbar');
	if (window.scrollY > window.innerHeight / 1.5) {
		navbar.classList.add('fixed-nav');
		navbar.classList.remove('initial-nav');
	} else {
		navbar.classList.remove('fixed-nav');
		navbar.classList.add('initial-nav');
	}
});

document.addEventListener('DOMContentLoaded', function() {
	var aboutLink = document.querySelector('a[href="#about"]');
	var divider = document.querySelector('.about-divider');
	var aboutSection = document.querySelector('#about');

	aboutLink.addEventListener('click', function() {
		event.preventDefault();
		divider.classList.add('visible');
		aboutSection.scrollIntoView({ behavior: 'smooth' });
	});

	window.addEventListener('scroll', function() {
		var aboutSectionTop = aboutSection.getBoundingClientRect().top;
		if (aboutSectionTop < window.innerHeight && aboutSectionTop >= 0) {
			divider.classList.add('visible');
		} else {
			divider.classList.remove('visible');
		}
	});
});
