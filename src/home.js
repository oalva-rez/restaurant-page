function addHome() {
  let homeContainer = document.createElement("main");
  let leftHalf = document.createElement("section");
  let rightHalf = document.createElement("section");
  let heading = document.createElement("h2");
  let subheading = document.createElement("h3");
  let logo = document.createElement("img");

  let coffeeLogo = new Image();
  leftHalf.classList.add("left-half");
  rightHalf.classList.add("right-half");
  homeContainer.classList.add("home-container");

  homeContainer.appendChild(leftHalf);
  homeContainer.appendChild(rightHalf);

  heading.textContent = "Good Friends. Good Coffee. Good Times.";
  heading.classList.add("home-heading");

  logo.classList.add("home-logo");
  subheading.classList.add("home-subheading");

  subheading.textContent =
    "Located in the heart of North Park. Mystic Mocha is a community oasis promoting health and well-being through natural foods, peaceful environments and friendly service.";

  coffeeLogo.src = "logo-coffee.png";
  logo.src = coffeeLogo.src;
  rightHalf.appendChild(heading);
  rightHalf.appendChild(logo);
  rightHalf.appendChild(subheading);
  return homeContainer;
}

export default addHome;
