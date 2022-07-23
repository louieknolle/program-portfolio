const homeTab = document.getElementById("homeIcon");
const aboutTab = document.getElementById("aboutIcon");
const projectsTab = document.getElementById("projectsIcon");

const homeImage = document.getElementById("img-container");
const aboutSection = document.getElementById("about");
const projectsSection = document.getElementById("projects");

homeTab.onclick = function() {
  aboutSection.setAttribute("class", "hidden");
  projectsSection.setAttribute("class", "hidden");
  homeImage.setAttribute("class", "photos");
  homeImage.classList.remove("hidden");
}

aboutTab.onclick = function() {
  homeImage.setAttribute("class", "hidden");
  projectsSection.setAttribute("class", "hidden")
  aboutSection.classList.remove("hidden");
}

projectsTab.onclick = function() {
  aboutSection.setAttribute("class", "hidden");
  homeImage.setAttribute("class", "hidden")
  projectsSection.classList.remove("hidden");
}

