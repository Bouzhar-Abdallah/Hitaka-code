const menu = [
    {
      id: 1,
      title: "Salade",
      category: "Sushi",
      price: 15.99,
      img: "./images/item-1.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "test",
      category: "Sushi",
      price: 15.99,
      img: "./images/item-2.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 3,
      title: "again",
      category: "Sushi",
      price: 35.99,
      img: "./images/item-3.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 4,
      title: "Salade",
      category: "Sushi",
      price: 5.99,
      img: "./images/item-4.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 5,
      title: "Salade",
      category: "Sushi",
      price: 5.99,
      img: "./images/item-5.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 6,
      title: "Salade",
      category: "Sushi",
      price: 5.99,
      img: "./images/item-6.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 7,
      title: "Salade",
      category: "Sushi",
      price: 5.99,
      img: "./images/item-7.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 8,
      title: "Sushi",
      category: "Sushi",
      price: 5.99,
      img: "./images/item-8.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 9,
      title: "Sushi",
      category: "Salade",
      price: 5.99,
      img: "./images/item-9.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 10,
      title: "Sushi",
      category: "Salade",
      price: 5.99,
      img: "./images/item-10.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 11,
      title: "Sushi",
      category: "Salade",
      price: 5.99,
      img: "./images/item-11.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 12,
      title: "Sushi",
      category: "Salade",
      price: 5.99,
      img: "./images/item-12.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 13,
      title: "Sushi",
      category: "Salade",
      price: 5.99,
      img: "./images/item-13.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 14,
      title: "Sushi",
      category: "Salade",
      price: 5.99,
      img: "./images/item-14.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 15,
      title: "Sushi",
      category: "Salade",
      price: 5.99,
      img: "./images/item-15.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 16,
      title: "Obento",
      category: "Salade",
      price: 5.99,
      img: "./images/item-16.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 17,
      title: "Obento",
      category: "Salade",
      price: 5.99,
      img: "./images/item-17.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 18,
      title: "Obento",
      category: "Obento",
      price: 5.99,
      img: "./images/item-18.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 19,
      title: "Obento",
      category: "Obento",
      price: 5.99,
      img: "./images/item-19.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 19,
      title: "Obento",
      category: "Obento",
      price: 5.99,
      img: "./images/item-19.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 19,
      title: "Obento",
      category: "Obento",
      price: 5.99,
      img: "./images/item-19.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 19,
      title: "Obento",
      category: "Obento",
      price: 5.99,
      img: "./images/item-19.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 19,
      title: "Obento",
      category: "Obento",
      price: 5.99,
      img: "./images/item-19.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 20,
      title: "Obento",
      category: "Obento",
      price: 5.99,
      img: "./images/item-20.jpg",
      desc: `hammock freegan copper mug whatever cold-pressed `,
    },

    
    
  ];


  const products = document.querySelector('.products');
  const ordersContainer = document.querySelector('.orders');
  const filterSelect = document.querySelector('.filtre');
  const ordersCount = document.querySelector('.choice_count');
  const cart=document.querySelector('.cart');
  
  cart.addEventListener('click', function(){
    let element = document.querySelector(".order");
    element.classList.toggle("hide_order");
  });
  

  let allKeys = Object.keys(localStorage);

  //load items
  window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu);
    
    displayOrders(allKeys);
    ordersCount.innerHTML=allKeys.length;

    //search for unique cetegories in menu
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
       return values
    },['all']);

    //add uniaue categories to filter options
    const categoriesSelect = categories.map(function(category){
        return `
        <option class="select-control">${category}</option>
        `
    }).join("");
    filterSelect.innerHTML = categoriesSelect;
    //console.log(categoriesSelect);
    //console.log(categories);
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




    class Orders {
        constructor(_id,_q,_name,_price){
            this.id ='order_'+ _id;
            this.q  = _q;
            this.name = _name;
            this.price = _price;
        }
       /*  set setQ(_q){
            this.q=_q;
        } */

     /*    incrementQ(){
            this.q=this.q+1;
        }  */
      }
    


  function displayMenuItems(menuItems){

    let displayMenu = menuItems.map(function(item){
        
        return `
        <div class="product" id="${item.id}">
          <div class="picture"><img src=${item.img} alt=${item.img}></div>
          <div class="infos">
          <div>
              <p class="category">${item.category}: </p>
              <p class="plat-name">${item.title}</p>
              </div>
              <p class="plat-desc">${item.desc}</p>
              <div class="product_footer">
          <p class="plat-price">$ ${item.price}</p>
          <i class="fa-solid fa-circle-plus"></i></div>
          </div>
          
        </div>
        `;
    });
/*     displayMenu = displayMenu.join('');
 */    products.innerHTML = displayMenu;


    if(products.firstChild){
       let listedProducts = products.querySelectorAll('.product');
       
       listedProducts.forEach(function(elem){
        elem.addEventListener('click', function(){
          let KEY = 'order_'+this.id;
            if(Object.keys(localStorage).includes(KEY)){

                let existantOrder = JSON.parse(localStorage.getItem(KEY));
                existantOrder.q=existantOrder.q+1;

                localStorage.setItem(KEY, JSON.stringify(existantOrder));

            }
            else {
                let newOrder = new Orders(this.id,1,elem.querySelector('.infos .plat-name').textContent,elem.querySelector('.infos .plat-price').textContent.slice(2));
                let KEY = 'order_' + this.id;
                localStorage.setItem(KEY, JSON.stringify(newOrder));

            }
            allKeys = Object.keys(localStorage);
            displayOrders(allKeys);
            ordersCount.innerHTML=allKeys.length; 
        /* ordersUpdateDisplay(allKeys);  */ 
        });

       })
    }
  }


  function displayOrders(allKeys) {
    ordersContainer.innerHTML='';
    allKeys.forEach(function(elem){
      const order = JSON.parse(localStorage.getItem(elem));
      ordersContainer.innerHTML += 
      `
      <div class="choice" id="${order.id}">
            <span class="q">Q: ${order.q}.
                <span class="choice-name">${order.name}</span>
            </span>
           
            <span class="choice-price">$${' '+(order.price*order.q).toFixed(2)}
               <i class="fa-solid fa-circle-minus"></i> 
            </span>
            
        </div>
      `

     })
     
     if(ordersContainer.firstChild){
      let listedOrders = ordersContainer.querySelectorAll('.choice');
      
      listedOrders.forEach(function(elem){
       elem.addEventListener('click', function(){
        let existantOrder = JSON.parse(localStorage.getItem(this.id));
        
           if(existantOrder.q>1){
                let existantOrder = JSON.parse(localStorage.getItem(this.id));
               existantOrder.q=existantOrder.q-1;
               
               localStorage.setItem(this.id, JSON.stringify(existantOrder));
               
           }
           else {
          
              localStorage.removeItem(this.id);
              
           }
           allKeys = Object.keys(localStorage);
          ordersCount.innerHTML=allKeys.length;
          displayOrders(allKeys); 
     
       });

      })

   }
   updateTotalPrice(allKeys);
  }
  
  function updateTotalPrice(allKeys){

    let TotalPriceE=document.querySelector('.price');
    let totalPrice=0;
    for(let KEY of allKeys){
      let order = JSON.parse(localStorage.getItem(KEY));
      totalPrice+= order.q * order.price;
     }
     TotalPriceE.innerHTML ='$ ';
     TotalPriceE.innerHTML += totalPrice.toFixed(2);
  }