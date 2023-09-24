export function mobileNav() {
  const navBtn = document.querySelector('.mobile-nav-btn');
  const nav = document.querySelector('.mobile-nav');
  const menuIcon = document.querySelector('.nav-icon');
  const linkItems = document.querySelectorAll('.mobile-nav__item, .mobile-nav__submenu-list');
  const submenuTitles = document.querySelectorAll('.mobile-nav__submenu-title');

  navBtn.addEventListener('click', linkClickHandler);

  linkItems.forEach(item => {
    item.addEventListener("click", linkClickHandler);
  })

  submenuTitles.forEach(item => {
    item.addEventListener("click", dropdownHandler);
  })

  function linkClickHandler() {
    nav.classList.toggle('_open');
    menuIcon.classList.toggle('_active');
    document.body.classList.toggle('no-scroll');
  }

  function dropdownHandler() {
    this.querySelector("svg")?.classList.toggle("_open");
    this.nextElementSibling?.classList.toggle("_open");
  }

}


