const navLinkEls = document.querySelectorAll('.nav__link');
const windowPathName = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
  const navLinkPathname = new URL(navLinkEl.href).pathname;
  
  if (
    (windowPathName === navLinkPathname) || 
    (windowPathName === '/index.html' && navLinkPathname === '/')
    ) {
    navLinkEl.classList.add('active__nav__link');
  }
});