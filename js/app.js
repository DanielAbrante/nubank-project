function scrollHeader() {
  const header = document.querySelector('header');

  if (window.scrollY >= 50) header.classList.add('active-header');
  else header.classList.remove('active-header');
}

window.addEventListener('scroll', scrollHeader);