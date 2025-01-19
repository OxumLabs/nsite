
document.querySelectorAll('.expandable-header').forEach(header => {
    header.addEventListener('click', () => {
        const box = header.parentElement;
        box.classList.toggle('active');
    });
});