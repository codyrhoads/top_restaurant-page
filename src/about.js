export { loadAbout };

function loadAbout() {
    const aboutDiv = document.createElement("div");

    aboutDiv.textContent = "This restaurant was for a Spanish project back in high school.";

    content.appendChild(aboutDiv);
}