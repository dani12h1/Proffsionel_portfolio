import { animate, scroll, stagger, inView } from "https://cdn.skypack.dev/motion";

scroll(animate(".progress", { scaleX: [0, 1] }));

/*Loading */

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  setTimeout(stopLoad, 1000);
});
function stopLoad() {
  loader.style.display = "none";
}

/* Projects scroll */

document.addEventListener("DOMContentLoaded", function () {
  let scrollKnapProjects = document.querySelector("li:nth-of-type(1)");
  let projects = document.querySelector(".card:nth-of-type(2)");

  scrollKnapProjects.addEventListener("click", scrollFunction);

  function scrollFunction() {
    projects.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
});

/* About scroll */

document.addEventListener("DOMContentLoaded", function () {
  let scrollKnapAbout = document.querySelector("li:nth-of-type(2)");
  let about = document.querySelector("#about");

  scrollKnapAbout.addEventListener("click", scrollFunction);

  function scrollFunction() {
    about.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
});

/* Contact scroll */

document.addEventListener("DOMContentLoaded", function () {
  let scrollKnapContact = document.querySelector("li:nth-of-type(3)");
  let contact = document.querySelector("footer");

  scrollKnapContact.addEventListener("click", scrollFunction);

  function scrollFunction() {
    contact.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
});
