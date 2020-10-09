
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll(".nav-links li");
    //toggle nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    //animate links
    navlinks.forEach((link, index) => {
        console.log(index);

    });
}

navSlide();