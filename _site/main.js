var menuIcon = document.getElementsByClassName("responsive-navbar");

for (var i = 0; i < menuIcon.length; i++) {
  menuIcon[i].addEventListener("click", function () {
    document.getElementById("responsive-nav").classList.toggle("toggle-nav");
});
}
