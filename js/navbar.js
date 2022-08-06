let navbar = document.getElementById("nav-manage");
let navbarSupportedContent = document.getElementById("navbarSupportedContent");

navbar.addEventListener("click", (e) => {
  let visible = navbarSupportedContent.classList.contains("show");
  if (visible) {
    navbarSupportedContent.classList.remove("show");
  } else {
    navbarSupportedContent.classList.add("show");
  }
});

function closeNavbar() {
  navbar.classList.add("collapsed");
}
function openNavbar() {
  navbar.className;
}
