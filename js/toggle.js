
    function redirectToHistory() {
        window.location.href = "https://en.wikipedia.org/wiki/Finger_Lakes#History"; 
    }

// Toggle Navigation Menu for Mobile
document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("show-menu");
});

// style2
document.querySelectorAll('.highlight-card').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = card.getAttribute('href');
    });
});


// Smooth scrolling
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.sidebar a');

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
            const id = section.getAttribute('id');
            links.forEach(link => link.classList.remove('active'));
            document.querySelector(`.sidebar a[href="#${id}"]`).classList.add('active');
        }
    });
});

