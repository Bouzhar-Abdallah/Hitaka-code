const menu = [
    {
      id: 1,
      title: "pancakes",
      category: "Sushi",
      price: 15.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "pancakes",
      category: "Sushi",
      price: 15.99,
      img: "./images/item-2.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 3,
      title: "pancakes",
      category: "Sushi",
      price: 35.99,
      img: "./images/item-3.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 4,
      title: "pancakes",
      category: "Sushi",
      price: 5.99,
      img: "./images/item-4.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 5,
      title: "pancakes",
      category: "Sushi",
      price: 5.99,
      img: "./images/item-5.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 6,
      title: "pancakes",
      category: "Sushi",
      price: 5.99,
      img: "./images/item-6.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 7,
      title: "pancakes",
      category: "Sushi",
      price: 5.99,
      img: "./images/item-7.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 8,
      title: "pancakes",
      category: "Sushi",
      price: 5.99,
      img: "./images/item-8.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 9,
      title: "pancakes",
      category: "Salade",
      price: 5.99,
      img: "./images/item-9.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 10,
      title: "pancakes",
      category: "Salade",
      price: 5.99,
      img: "./images/item-10.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 11,
      title: "pancakes",
      category: "Salade",
      price: 5.99,
      img: "./images/item-11.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 12,
      title: "pancakes",
      category: "Salade",
      price: 5.99,
      img: "./images/item-12.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 13,
      title: "pancakes",
      category: "Salade",
      price: 5.99,
      img: "./images/item-13.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 14,
      title: "pancakes",
      category: "Salade",
      price: 5.99,
      img: "./images/item-14.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 15,
      title: "pancakes",
      category: "Salade",
      price: 5.99,
      img: "./images/item-15.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 16,
      title: "pancakes",
      category: "Salade",
      price: 5.99,
      img: "./images/item-16.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 17,
      title: "pancakes",
      category: "Salade",
      price: 5.99,
      img: "./images/item-17.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 18,
      title: "pancakes",
      category: "Obento",
      price: 5.99,
      img: "./images/item-18.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 19,
      title: "pancakes",
      category: "Obento",
      price: 5.99,
      img: "./images/item-19.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 20,
      title: "pancakes",
      category: "Obento",
      price: 5.99,
      img: "./images/item-20.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    
    
  ];


  const products = document.querySelector('.products');
  const filterSelect = document.querySelector('.filtre')


  //load items
  window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu);
  });


  //filter items

    filterSelect.addEventListener('change', function(e) {
        const category = e.currentTarget.value;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category)
            return menuItem;
        });
        if(category === 'all'){
            displayMenuItems(menu)
        }
        else{
            displayMenuItems(menuCategory);
        }
    });






  function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        
        return `
        <div class="product">
        <div class="picture"><img src=${item.img} alt=${item.img}></div>
        <div class="infos">
            <p class="plat-name">${item.title}</p>
            <p class="plat-desc">${item.desc}</p>
            <p class="plat-price">$ ${item.price}</p>
        </div>
        <div class="button"><i class="fa-solid fa-circle-plus"></i></div>
    </div>
        `;
    });
    displayMenu = displayMenu.join('');
    products.innerHTML = displayMenu;
  }