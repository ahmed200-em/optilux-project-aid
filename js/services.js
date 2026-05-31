const navbar = document.querySelector('.the-header');

let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll < lastScroll) {
    // Scrolling up
    navbar.classList.add('scroll-up');
  } else {
    // Scrolling down
    navbar.classList.remove('scroll-up');
  }

  lastScroll = currentScroll;
});     