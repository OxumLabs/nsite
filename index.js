

// Add event listener to nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').slice(1);
        document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add animation to sections on scroll
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;
        if (scrollPosition >= sectionTop - sectionHeight / 2 && scrollPosition < sectionTop + sectionHeight / 2) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
