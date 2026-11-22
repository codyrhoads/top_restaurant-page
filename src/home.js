import riceImage from "./img/rice.jpg";

export { loadHome }

function loadHome() {
    const homeDiv = document.createElement("div");
    homeDiv.appendChild(createBannerImage());
    homeDiv.appendChild(createTitle());
    homeDiv.appendChild(createDescription());

    content.appendChild(homeDiv);
}

function createBannerImage() {
    const image = document.createElement("img");
    image.src = riceImage;

    return image;
}

function createTitle() {
    const title = document.createElement("h1");
    title.textContent = "Con Arroz";

    return title;
}

function createDescription() {
    const desc = document.createElement("div");
    desc.textContent = "Come on by and try our specialty dishes that feature rice. Yum!";

    return desc;
}