import ramen from "./ramen.jpg";
import miso from "./miso.jpg";
import spanish from "./spanish-roll.jpg";
import spicy from "./spicy-tuna.jpg";
function addMenu() {
  let items = {
    Ramen: {
      desc: "This item is a fan favorite among locals.",
      img: ramen,
    },
    "Miso Soup": {
      desc: "The heal-all dish to always be there for you.",
      img: miso,
    },
    "Spanish Roll": {
      desc: "A lovers favorite once eaten by the ancient gods.",
      img: spanish,
    },
    "Spicy Tuna": {
      desc: "A cult classic. Dont be friends with spicy-tuna haters.",
      img: spicy,
    },
  };
  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  for (const key in items) {
    let menuItem = document.createElement("div");
    let menuLabel = document.createElement("h2");
    let menuImg = document.createElement("img");
    let menuDesc = document.createElement("p");
    menuItem.classList.add("menu-item");
    menuLabel.textContent = key;
    menuImg.src = items[key].img;
    menuDesc.textContent = items[key].desc;
    menuItem.append(menuLabel);
    menuItem.append(menuImg);
    menuItem.append(menuDesc);
    menuContainer.append(menuItem);
  }
  return menuContainer;
}

export default addMenu;
