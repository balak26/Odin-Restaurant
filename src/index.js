import "./style.css";
import homeContent from "./home";
import menuContent from "./menu";
import aboutContent from "./about";

const content = document.querySelector("#content");

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let tab = "home";
    if (e.target.textContent.toLowerCase() === "home") {
      while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
      homeContent();
    } else if (e.target.textContent.toLowerCase() === "menu") {
      while (content.firstChild) {
        content.removeChild(content.lastChild);
      }

      menuContent();
    } else if (e.target.textContent.toLowerCase() === "about") {
      while (content.firstChild) {
        content.removeChild(content.lastChild);
      }

      aboutContent();
    }
  });
});

document.addEventListener("DOMContentLoaded", homeContent);
