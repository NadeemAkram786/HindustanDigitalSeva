// navbar scroll script for laptop and mobile
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("scroll-navbar").style.top = "0";
        document.getElementById("hds-nav-mobile").style.top = "0";
    } else {
        document.getElementById("hds-nav-mobile").style.top = "-150px";
        document.getElementById("scroll-navbar").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
}
// navbar scroll script for laptop and mobile

//Navbar in mobile script
var hdsSubMenuDropdown = document.getElementsByClassName("hds-submenu-btn");
var i;

for (i = 0; i < hdsSubMenuDropdown.length; i++) {
    hdsSubMenuDropdown[i].addEventListener("click", function() {
        this.classList.toggle("hds-active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
$(".hds-slide-toggle-btn").click(function () {
    $('.hds-mob-sidenav').toggleClass("hds-side-nav-show");
});
$(".slantedMob").click(function () {
    $('.hds-mob-sidenav').removeClass("hds-side-nav-show");
});
$(".aboutUsMob").click(function () {
    $('.hds-mob-sidenav').removeClass("hds-side-nav-show");
});
$(".leadersMob").click(function () {
    $('.hds-mob-sidenav').removeClass("hds-side-nav-show");
});
$(".footerhdsMob").click(function () {
    $('.hds-mob-sidenav').removeClass("hds-side-nav-show");
});