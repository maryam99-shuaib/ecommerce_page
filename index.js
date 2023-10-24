var page_content =  document.getElementById("maincontainer")
page_content.innerHTML = ` <div class="banner-section">
                                    <img src="./assessts/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg">
                                </div>
                                <div class="SectionThree">
                                    <div class="box one">
                                    </div>
                                    <div class="box two">
                                    </div>
                                    <div class="box three">
                                    </div>
                                </div>
                                <button type="button">SUBMIT</button>`

function updateUI(){
    
}
function pageswitcher(page_name){
  if(page_name=="home"){
    page_content.innerHTML = ` <div class="banner-section">
                                    <img src="./assessts/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg">
                                </div>
                                <div class="SectionThree">
                                    <div class="box one">
                                    </div>
                                    <div class="box two">
                                    </div>
                                    <div class="box three">
                                    </div>
                                </div>
                                <button type="button">SUBMIT</button>`
  }
  else if(page_name=="product"){
    page_content.innerHTML = `  <div class="searchbar_container">
                                    <input type="text" id="searchBar">
                                    <button type="button" onclick=""><img src="assessts/fontawesome-free-6.4.0-web/svgs/solid/magnifying-glass.svg"></button>
                                </div>

                                <div class="box_set_section">
                                    <div class="set one">
                                    </div>
                                    <div class="set two">
                                    </div>
                                    <div class="set three">
                                    </div>
                                    <div class="set four">
                                    </div>
                                    <div class="set five">
                                    </div>
                                    <div class="set six">
                                    </div>
                                </div>`
  }
  else{
    page_content.innerHTML =  ` <form class="input_section">
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
  }
}
