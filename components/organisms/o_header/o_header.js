document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.o_header');
	const toggle = header.querySelector('.menu-toggle');

	toggle.addEventListener('click', () => {
		const open = header.classList.toggle('is-open');
		toggle.setAttribute('aria-expanded', open);
	});

	header.querySelectorAll('.mobile-link').forEach(link => {
		link.addEventListener('click', () => {
			header.classList.remove('is-open');
			toggle.setAttribute('aria-expanded', 'false');
		});
	});
});
