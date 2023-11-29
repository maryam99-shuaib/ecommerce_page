const products = [
    {
      id: 0,
      name: "Smartwatch",
      cost: 89057,
      img: "https://example.com/image1.jpg"
    },
    {
      id: 1,
      name: "Wireless Mouse",
      cost: 33410,
      img: "https://example.com/image2.jpg"
    },
    {
      id: 2,
      name: "Fitness Tracker",
      cost: 64572,
      img: "https://example.com/image3.jpg"
    },
    {
      id: 3,
      name: "Portable Speaker",
      cost: 74391,
      img: "https://example.com/image1.jpg"
    },
    {
      id: 4,
      name: "Security Camera",
      cost: 28934,
      img: "https://example.com/image2.jpg"
    },
    {
      id: 5,
      name: "VR Headset",
      cost: 56109,
      img: "https://example.com/image3.jpg"
    },
    {
      id: 6,
      name: "Smart Scale",
      cost: 91207,
      img: "https://example.com/image1.jpg"
    },
    {
      id: 7,
      name: "Wireless Keyboard",
      cost: 47280,
      img: "https://example.com/image2.jpg"
    },
    {
      id: 8,
      name: "Bluetooth Earbuds",
      cost: 54813,
      img: "https://example.com/image3.jpg"
    },
    {
      id: 9,
      name: "Gaming Mouse",
      cost: 78546,
      img: "https://example.com/image1.jpg"
    },
    {
      id: 10,
      name: "Smart Home Hub",
      cost: 68018,
      img: "https://example.com/image2.jpg"
    },
    {
      id: 11,
      name: "Mini Projector",
      cost: 29578,
      img: "https://example.com/image3.jpg"
    },
    {
      id: 12,
      name: "Bluetooth Speaker",
      cost: 83241,
      img: "https://example.com/image1.jpg"
    },
    {
      id: 13,
      name: "USB-C Hub",
      cost: 44725,
      img: "https://example.com/image2.jpg"
    },
    {
      id: 14,
      name: "External SSD",
      cost: 65189,
      img: "https://example.com/image3.jpg"
    },
    {
      id: 15,
      name: "Wireless Charger",
      cost: 73126,
      img: "https://example.com/image1.jpg"
    },
    {
      id: 16,
      name: "Smart Doorbell",
      cost: 58209,
      img: "https://example.com/image2.jpg"
    },
    {
      id: 17,
      name: "Mechanical Keyboard",
      cost: 37814,
      img: "https://example.com/image3.jpg"
    },
    {
      id: 18,
      name: "Graphic Tablet",
      cost: 92705,
      img: "https://example.com/image1.jpg"
    },
    {
      id: 19,
      name: "Wireless Headphones",
      cost: 51672,
      img: "https://example.com/image2.jpg"
    },
    {
      id: 20,
      name: "Smart Thermostat",
      cost: 69438,
      img: "https://example.com/image3.jpg"
    },
    {
      id: 21,
      name: "Gaming Headset",
      cost: 80237,
      img: "https://example.com/image1.jpg"
    },
    {
      id: 22,
      name: "4K Monitor",
      cost: 38560,
      img: "https://example.com/image2.jpg"
    },
    {
      id: 23,
      name: "Digital Camera",
      cost: 62178,
      img: "https://example.com/image3.jpg"
    },
    {
      id: 24,
      name: "Smart Lighting Kit",
      cost: 86294,
      img: "https://example.com/image1.jpg"
    },
    {
      id: 25,
      name: "Noise-Canceling Earphones",
      cost: 49721,
      img: "https://example.com/image2.jpg"
    },
    {
      id: 26,
      name: "Wi-Fi Range Extender",
      cost: 71456,
      img: "https://example.com/image3.jpg"
    },
    {
      id: 27,
      name: "Curved Gaming Monitor",
      cost: 58903,
      img: "https://example.com/image1.jpg"
    },
    {
      id: 28,
      name: "Smart Coffee Maker",
      cost: 44982,
      img: "https://example.com/image2.jpg"
    },
    {
      id: 29,
      name: "In-Ear Monitor",
      cost: 79163,
      img: "https://example.com/image3.jpg"
    }
  ]
  
var cart = [];
var index = 0;


function dispalyProduct(arr){
    var productContent="";
    for(let product of arr){
        let product_box = ` <div class="product_box">
        <img src="./assessts/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg">
        <div class="item_description">
            <div class="productname">
                ${product.name}
            </div>
            <div class="price_and_button">
                <div class="fivenaira">
                &#8358 ${product.cost}
                </div>
                 <button onclick="AddToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    </div>`
    productContent = productContent + product_box;
        // console.log(product)
    }
    // console.log(productContent);
    document.getElementById("productContainer").innerHTML = productContent;
}

// dispalyProduct();

var home_content = ` <div class="banner-section">
                        <img src="./assessts/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg">
                    </div>
                    <div class="SectionThree" >
                        <div class="product_box">
                            <img src="./assessts/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg">
                            <div class="item_description">
                                <div class="productname">
                                    PRODUCT NAME
                                </div>
                                <div class="price_and_button">
                                    <div class="fivenaira">
                                        &#8358;<span>5</span>
                                    </div>
                                    <button type="button" onclick="AddToCart(1)">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                        <div class="product_box">
                            <img src="./assessts/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg">
                            <div class="item_description">
                                <div class="productname">
                                    PRODUCT NAME
                                </div>
                                <div class="price_and_button">
                                <div class="fivenaira">
                                        &#8358;<span>5</span>
                                    </div>
                                    <button type="button" onclick="AddToCart(2)">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                        <div class="product_box">
                            <img src="./assessts/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg">
                            <div class="item_description">
                                <div class="productname">
                                    PRODUCT NAME
                                </div>
                                <div class="price_and_button">
                                <div class="fivenaira">
                                        &#8358;<span>5</span>
                                    </div>
                                    <button type="button" onclick="AddToCart(3)">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <button type="button">SUBMIT</button>`

var product_content = ` <div class="searchbar_container">
                            <input type="text" id="searchBar" >
                            <button type="button" onclick="searchProduct()"><img src="assessts/fontawesome-free-6.4.0-web/svgs/solid/magnifying-glass.svg"></button>
                        </div>
                        <div class="box_set_section" id="productContainer">
                            <!--insert content from javascript-->
                        </div>`
 
var contact_content = ` <form class="input_section">
                                    <div>
                                        <label for=name>Name</ label>
                                        <input type="text" class="inputONE" id=name>
                                    </div>
                                    <div>
                                        <label for="email">Email</label>
                                        <input type="text" class="inputONE" id="email">
                                    </div>
                                    <div>
                                        <label for="message">Message</label>
                                        <textarea class="inputTWO">
                                        </textarea>
                                    </div>
                                    <button type="button">SUBMIT</button>
                                </form>`

var page_content =  document.getElementById("maincontainer")
page_content.innerHTML = home_content;

// function updateUI(){
    
// }
function pageswitcher(page_name){
  if(page_name=="home"){
    page_content.innerHTML = home_content
  }
  else if(page_name=="product"){
    page_content.innerHTML = product_content;
    dispalyProduct(products);
  }
  else{
    page_content.innerHTML = contact_content 
  }
  // switches pages in the website;
}

function searchProduct(){
    let search_query = document.getElementById("searchBar").value.toLowerCase();
    // console.log('User searched --->', search_query);
    const searchResults =  products.filter((item)=>item.name.indexOf(search_query) !== -1);
    // console.log('Search Results--->',searchResults);
    dispalyProduct(searchResults)
    // dispalyProduct(searchResults);
}


function AddToCart(product_id){
  const index = cart.findIndex(item => item.id === product_id);
  if (index === -1){
    var newCartmember = products.filter((item)=>item.id === product_id)[0]
    // console.log(newCartmember[0]);
    newCartmember.qty= 1;
    cart.push(newCartmember);
  }
  else{
    cart[index].qty++
  }
    console.log('cart array--->',cart);
    UpdateCart()
    
    // makes add to cart functioal;
}
function ClosingCart(){
  document.getElementById("cartContainer").style.display="none"
}
function closingmobilemenu(){
  document.getElementById("mobilemenu").style.display="none"
}
function openCart(){
  document.getElementById("cartContainer").style.display="block"
}
function tugglemobilemenu(){
  document.getElementById("mobilemenu").style.display="flex";
}
function UpdateCartNotification(){
  let no_items_in_cart = cart.length
  if(no_items_in_cart===0){
   document.getElementById("notification-circle").style.display="none"
  }
  else{
    document.getElementById("notification-circle").innerHTML = no_items_in_cart;
    document.getElementById("notification-circle").style.display="flex"
  }
}
function DeleteFromCart(cart_id){
  console.log(cart_id)
  cart =  cart.filter((item)=>item.id !== cart_id);
  
  UpdateCart();
}
// finding cart-id
// function findProductById(cart_id) {
//   return 
// }

function IncreaseItemInCart(cart_id){
  // Find the index of the cart item with matching id
  const index = cart.findIndex(item => item.id === cart_id);
  
  // If the item is found in the cart
  if (index !== -1) {
      // Increase the 'amount' property by 1
      cart[index].qty++;
      console.log(`Amount increased for item with id ${cart_id}. New amount: ${cart[index].qty}`);
      UpdateCart();
  } else {
      console.log(`Item with id ${cart_id} not found in the cart.`);
  }

  

}
function ReduceItemInCart(cart_id){
  // Find the index of the cart item with matching id
  const index = cart.findIndex(item => item.id === cart_id);
  
  // If the item is found in the car
  if (index !== -1) {
      // Increase the 'amount' property by 1
      if (cart[index].qty===1){
        cart =  cart.filter((item)=>item.id !== cart_id)
      }
      else{
        cart[index].qty--;
        console.log(`Amount reduced for item with id ${cart_id}. New amount: ${cart[index].qty}`);
      }
      UpdateCart();
  } else {
      console.log(`Item with id ${cart_id} not found in the cart.`);
  }

  

  
}






function UpdateCart(){
  var cartContent="";
  for(let cart_item of cart){
    let cart_item_box = `   <div class="cartItem">
        <img src="./assessts/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg">
        <div class="CartItemdetails">
            <div class="PRODUCTNAME">
                ${cart_item.name}
            </div>
            <div class="PRODUCTPRICE">
                5
            </div>
            <button type="button" id="xtoeachbox" onclick="DeleteFromCart(${cart_item.id})">x</button>
            <div class="CartItemQty">
              <div onclick="ReduceItemInCart(${cart_item.id})" id="reduceCartitem">-</div>
              <div>${cart_item.qty}</div>
              <div onclick="IncreaseItemInCart(${cart_item.id})" id="increaseCartitem">+</div>
            </div>
        </div>  
    </div>`
  cartContent = cartContent + cart_item_box;
      // console.log(product)
  }
  // console.log(productContent);
  document.getElementById("cart_items").innerHTML = cartContent;
  UpdateCartNotification()
}