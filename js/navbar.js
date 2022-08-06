function manageNavbar() {
  if (document.body.classList.length == 0) {
    openNavbar();
  } else {
    closeNavbar();
  }
}
function openNavbar() {
  document.body.classList.add("offcanvas-menu");
}
function closeNavbar() {
  document.body.classList.remove("offcanvas-menu");
}
