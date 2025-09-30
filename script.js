document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-item a');
    let currentPage = window.location.pathname.split('/').pop();
    if (!currentPage || currentPage === "") currentPage = "index.html";
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});