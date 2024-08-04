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
	var aboutDivider = document.querySelector('.about-divider');
	var aboutSection = document.querySelector('#about');
	var projectsLink = document.querySelector('a[href="#projects"]');
	var projectsSection = document.querySelector('#projects');
	var contactLink = document.querySelector('a[href="#contact"]');
	var contactSection = document.querySelector('#contact');
	var projectsDivider = document.querySelector('.projects-divider');
	var contactDivider = document.querySelector('.contact-divider');

	function scrollToSection(event, section) {
		event.preventDefault();
		const headerOffset = 80;
		const elementPosition = section.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.scrollY - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}

	aboutLink.addEventListener('click', function(event) {
		scrollToSection(event, aboutSection);
	});

	contactLink.addEventListener('click', function(event) {
		scrollToSection(event, contactSection);
	});

	projectsLink.addEventListener('click', function(event) {
		scrollToSection(event, projectsSection);
	});


	window.addEventListener('scroll', function() {
		var aboutSectionTop = aboutSection.getBoundingClientRect().top;
		if (aboutSectionTop < window.innerHeight && aboutSectionTop >= 0) {
			aboutDivider.classList.add('visible');
		} else {
			aboutDivider.classList.remove('visible');
		}
	});

	window.addEventListener('scroll', function() {
		var projectsSectionTop = projectsSection.getBoundingClientRect().top;
		if (projectsSectionTop < window.innerHeight && projectsSectionTop >= 0) {
			projectsDivider.classList.add('visible');
		} else {
			projectsDivider.classList.remove('visible');
		}
	});

	window.addEventListener('scroll', function() {
		var contactSectionTop = contactSection.getBoundingClientRect().top;
		if (contactSectionTop < window.innerHeight) {
			contactDivider.classList.add('visible');
		} else {
			contactDivider.classList.remove('visible');
		}
	});
});
