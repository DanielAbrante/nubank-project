function scrollHeader() {
  const header = document.querySelector('header');

  if (window.scrollY >= 50) header.classList.add('active-header');
  else header.classList.remove('active-header');
}

const menuItem = document.querySelectorAll('.menu-item');

menuItem.forEach(item => {
  const navLink = item.querySelector(".nav-link-desktop");
  const dropMenuItem = item.querySelector('.dropdown-menu');
  const allDropDownMenu = document.querySelectorAll('.dropdown-menu');

  navLink.addEventListener('click', (e) => {
    e.preventDefault();

    allDropDownMenu.forEach(dropDownMenuItem => {
      if (dropDownMenuItem == dropMenuItem) return;
      dropDownMenuItem.classList.remove('active-dropdown-menu');
    });

    dropMenuItem.classList.add('active-dropdown-menu');
  })

  dropMenuItem.addEventListener('mouseleave', () => {
    dropMenuItem.classList.remove('active-dropdown-menu');
  })
});