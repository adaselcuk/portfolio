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