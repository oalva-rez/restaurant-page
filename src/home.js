function addHome() {
  let homeContainer = document.createElement("main");
  let leftHalf = document.createElement("section");
  let rightHalf = document.createElement("section");
  let coffeeLogo = new Image();
  leftHalf.classList.add("left-half");
  rightHalf.classList.add("right-half");
  homeContainer.classList.add("home-container");

  homeContainer.appendChild(leftHalf);
  homeContainer.appendChild(rightHalf);

  let subheading = document.createElement("h2");
  let logo = document.createElement("img");
  logo.classList.add("home-logo");
  subheading.classList.add("home-subheading");

  subheading.textContent =
    "Located in the heart of North Park. Mystic Mocha is a community oasis promoting health and well-being through natural foods, peaceful environments and friendly service.";

  coffeeLogo.src = "logo-coffee.png";
  logo.src = coffeeLogo.src;
  rightHalf.appendChild(logo);
  rightHalf.appendChild(subheading);
  return homeContainer;
}

export default addHome;
