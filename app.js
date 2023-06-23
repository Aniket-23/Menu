const menu = [
  {
    id: 1,
    title: "chocolate pancakes",
    category: "breakfast",
    price: 160,
    img: "./images/item-1.jpeg",
    desc: `Delight yourself with pancakes that are as healthy as it is homemade and deliciously dipped in chocolate`,
  },
  {
    id: 2,
    title: "Maharaja Borgir",
    category: "lunch",
    price: 220,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "pink milkshake",
    category: "shakes",
    price: 130,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "scrambled eggs and bread",
    category: "breakfast",
    price: 75,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg borgir",
    category: "lunch",
    price: 100,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 140,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon over bread",
    category: "breakfast",
    price: 95,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic meal",
    category: "lunch",
    price: 190,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 169,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 210,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


//load items
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayMenuButtons();
});


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo">
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">Rs. ${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`;
  });
  displayMenu=displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
  //console.log(displayMenu);
};

function displayMenuButtons() {
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ["all"]);
  //console.log(categories);
  const categoryBtn = categories.map((category) => {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
  }).join("");
  //console.log(categoryBtn);
  container.innerHTML = categoryBtn;
  const filterBtns = document.querySelectorAll('.filter-btn');
  //filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      }
      else {
        displayMenuItems(menuCategory);
      }
    });
  });

}