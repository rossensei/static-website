const mobileNav = document.getElementById('mobile-nav');
const hamburgerBtn = document.getElementById('hamburger-btn');

// console.log(mobileNav, hamburgerBtn);
hamburgerBtn.addEventListener('click', () => {
    mobileNav.classList.toggle("active");
});