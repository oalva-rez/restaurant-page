import ramen from "/src/items-imgs/ramen-thumbnail.jpg";
import miso from "/src/items-imgs/miso-thumbnail.jpg";
import spanish from "/src/items-imgs/spanish-roll-thumbnail.jpg";
import spicy from "/src/items-imgs/spicy-tuna-thumbnail.jpg";
import boba from "/src/items-imgs/boba-thumbnail.jpg";
import latte from "/src/items-imgs/latte-thumbnail.jpg";
import machiatto from "/src/items-imgs/machiatto-thumbnail.jpg";
import matcha from "/src/items-imgs/matcha-thumbnail.jpg";
function addMenu() {
  let items = {
    Ramen: {
      desc: "This item is a fan favorite among locals. Half off every Wednesday.",
      img: ramen,
      price: "$9.75",
      alt: "A bowl of ramen soup.",
    },
    "Miso Soup": {
      desc: "The heal-all dish to always be there for you when 'they' weren't.",
      img: miso,
      price: "$5.75",
      alt: "A bowl of miso soup.",
    },
    "Spanish Roll": {
      desc: "A lovers favorite once eaten by the ancient gods.",
      img: spanish,
      price: "$12.75",
      alt: "Sushi rolls with salmon.",
    },
    "Spicy Tuna": {
      desc: "A cult classic. Dont be friends with spicy-tuna haters.",
      img: spicy,
      price: "$7.75",
      alt: "Sushi roll with spicy tuna inside.",
    },
    Boba: {
      desc: "San Diego heat too much? Cool down with some cold boba.",
      img: boba,
      price: "$4.75",
      alt: "A plastic cup with boba milk tea.",
    },
    Latte: {
      desc: "Morning rush remedy. Whats rush hour when you have a perfect latte?",
      img: latte,
      price: "$4.75",
      alt: "A foamy hot cup of latte coffee",
    },
    Machiatto: {
      desc: "This creamy half milk half coffee invention created by pure genius.",
      img: machiatto,
      price: "$4.50",
      alt: "Pouring hot coffee into machiatto",
    },
    Matcha: {
      desc: "Mystic Mochas costumer favorite. Rated best matcha tea in CA.",
      img: matcha,
      price: "$3.75",
      alt: "hot matcha latte with white foam",
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
