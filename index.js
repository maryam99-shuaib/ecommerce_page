var home_content = ` <div class="banner-section">
                        <img src="./assessts/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg">
                    </div>
                    <div class="SectionThree">
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
                                    <button type="button">ADD TO CART</button>
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
                                    <button type="button">ADD TO CART</button>
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
                                    <button type="button">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <button type="button">SUBMIT</button>`

var product_content = ` <div class="searchbar_container">
                            <input type="text" id="searchBar">
                            <button type="button" onclick=""><img src="assessts/fontawesome-free-6.4.0-web/svgs/solid/magnifying-glass.svg"></button>
                        </div>
                        <div class="box_set_section">
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
                                <button type="button">ADD TO CART</button>
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
                                <button type="button">ADD TO CART</button>
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
                                <button type="button">ADD TO CART</button>
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
                                <button type="button">ADD TO CART</button>
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
                                <button type="button">ADD TO CART</button>
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
                                <button type="button">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    
                        </div>`

var contact_content = ` <form class="input_section">
                                    <div>
                                        <label for="name">Name</label>
                                        <input type="text" class="inputONE" id="name">
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

function updateUI(){
    
}
function pageswitcher(page_name){
  if(page_name=="home"){
    page_content.innerHTML = home_content
  }
  else if(page_name=="product"){
    page_content.innerHTML = product_content
  }
  else{
    page_content.innerHTML = contact_content 
  }
}
