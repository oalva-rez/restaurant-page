import ramen from "./items-imgs/ramen.jpg";
import miso from "./items-imgs/miso.jpg";
import spanish from "./items-imgs/spanish-roll.jpg";
import spicy from "./items-imgs/spicy-tuna.jpg";
import boba from "./items-imgs/boba.jpg";
import latte from "./items-imgs/latte.jpg";
import machiatto from "./items-imgs/machiatto.jpg";
import matcha from "./items-imgs/matcha.jpg";
function addMenu() {
  let items = {
    Ramen: {
      desc: "This item is a fan favorite among locals. Amazing dish for the heart and soul",
      img: ramen,
      price: "$9.75",
    },
    "Miso Soup": {
      desc: "The heal-all dish to always be there for you when 'they' weren't.",
      img: miso,
      price: "$5.75",
    },
    "Spanish Roll": {
      desc: "A lovers favorite once eaten by the ancient gods.",
      img: spanish,
      price: "$12.75",
    },
    "Spicy Tuna": {
      desc: "A cult classic. Dont be friends with spicy-tuna haters.",
      img: spicy,
      price: "$7.75",
    },
    Boba: {
      desc: "San Diego heat too much? Cool down with some cold boba.",
      img: boba,
      price: "$4.75",
    },
    Latte: {
      desc: "Morning rush remedy. Whats rush hour when you have a perfect latte?",
      img: latte,
      price: "$4.75",
    },
    Machiatto: {
      desc: "This creamy half milk half coffee invention created by some very loving people.",
      img: machiatto,
      price: "$4.50",
    },
    Matcha: {
      desc: "Mystic Mochas costumer favorite. Rated best matcha tea in all of San Diego.",
      img: matcha,
      price: "$3.75",
    },
  };
  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  for (const key in items) {
    let menuItem = document.createElement("div");
    let menuLabel = document.createElement("h2");
    let menuImg = document.createElement("img");
    let menuDesc = document.createElement("p");
    let menuPrice = document.createElement("p");
    menuPrice.classList.add("menu-price");
    menuItem.classList.add("menu-item");
    menuPrice.textContent = items[key].price;
    menuLabel.textContent = key;
    menuImg.src = items[key].img;
    menuDesc.textContent = items[key].desc;
    menuItem.append(menuLabel);
    menuItem.append(menuImg);
    menuItem.append(menuDesc);
    menuItem.append(menuPrice);
    menuContainer.append(menuItem);
  }
  return menuContainer;
}

export default addMenu;
