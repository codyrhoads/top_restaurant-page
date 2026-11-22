import "./styles.css"
import { loadHome } from "./home.js"
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const home = document.getElementById("home-button");
const menu = document.getElementById("menu-button");
const about = document.getElementById("about-button");

function clearContents() {
    // Remove all content children to ensure page looks correct
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

function enableButtons() {
    home.disabled = false;
    menu.disabled = false;
    about.disabled = false;
}

function setupTabs() {
    home.addEventListener("click", event => {
        clearContents();
        enableButtons();
        loadHome();
        home.disabled = true;
    });

    menu.addEventListener("click", event => {
        clearContents();
        enableButtons();
        loadMenu();
        menu.disabled = true;
    });

    about.addEventListener("click", event => {
        clearContents();
        enableButtons();
        loadAbout();
        about.disabled = true;
    });
}

setupTabs();
loadHome();
home.disabled = true;